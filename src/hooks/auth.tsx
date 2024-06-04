import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../service/api";

interface AuthContextType {
  user: IUser | null;
  token: string;
  signIn: (data: IUser) => Promise<void>;
  signOut: () => void;
  updateProfile: (data: IUser, avatarFile) => Promise<void>;
}

export interface IUser {
  name?: string;
  email: string;
  old_password?: string;
  password?: string;
  avatar?: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

function AuthProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<{ user: IUser | null; token: string }>({
    user: null,
    token: "",
  });

  async function signIn({ email, password }: IUser): Promise<void> {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Login não efetuado!");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:token");
    localStorage.removeItem("@rocketmovies:user");

    setData({
      user: null,
      token: "",
    });
  }

  async function updateProfile(user: IUser, avatarFile): Promise<void> {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Perfil atualizado!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil!");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token");
    const user = localStorage.getItem("@rocketmovies:user");

    if (token && user) {
      api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;
      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
        token: data.token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
