import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Container, Content, NewMovie, Title } from "./styles";
import { Movie } from "../../components/Movie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { useConsultMovie } from "../../hooks/consultMovie";

export function Home() {
  const { search } = useConsultMovie();
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id: number) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movie_notes?title=${search}`);
      setMovies(response.data);
    }
    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header />

      <Title>
        <h1>Meus Filmes</h1>
        <NewMovie to={"/new"}>
          <FiPlus /> Adicionar Filme
        </NewMovie>
      </Title>
      {movies.length != 0 ? (
        <Content>
          {movies.map((movie) => {
            return (
              <Movie
                key={String(movie.id)}
                data={movie}
                onClick={() => handleDetails(movie.id)}
              />
            );
          })}
        </Content>
      ) : (
        <Content>Nenhum filme encontrado / cadastrado!</Content>
      )}
    </Container>
  );
}
