import { Input } from "../Input";
import { Brand, Container, Profile, Search } from "./styles";
import avatarPlaceholder from "../../assets/avatar.svg";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { useConsultMovie } from "../../hooks/consultMovie";

export function Header() {
  const { signOut, user } = useAuth();
  const { search, setSearch } = useConsultMovie();

  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          value={search}
          onChange={setSearch}
        />
      </Search>

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <button onClick={handleSignOut}>sair</button>
        </div>
        <img src={avatarUrl} alt={user.name} />
      </Profile>
    </Container>
  );
}
