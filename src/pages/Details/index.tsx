import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { MovieDetails } from "../../components/MovieDetails";
import Return from "../../components/Return";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../service/api";

export function Details() {
  const params = useParams();
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-2);
  }


  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movie_notes/${params.id}`);
      setData(response.data);
    }
    fetchMovie();
  }, [params.id]);

  return (
    <Container>
      <Header />
      <aside>
        <button className="return" type="button" onClick={handleBack}>
          <Return />
        </button>
      </aside>
      <main>{data && <MovieDetails data={data} handleBack={handleBack}/>}</main>
    </Container>
  );
}
