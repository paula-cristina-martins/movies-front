import { createContext, ReactNode, useContext, useState } from "react";

interface ConsultMovieContextType {
  search: string;
  setSearch: (e: string) => void;
}

export const ConsultMovieContext = createContext<ConsultMovieContextType | undefined>(
  undefined
);

function ConsultMovieProvider({ children }: { children: ReactNode }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search, setSearch] = useState("");

  return (
    <ConsultMovieContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </ConsultMovieContext.Provider>
  );
}

function useConsultMovie() {
  const context = useContext(ConsultMovieContext);

  return context;
}

export { ConsultMovieProvider, useConsultMovie };
