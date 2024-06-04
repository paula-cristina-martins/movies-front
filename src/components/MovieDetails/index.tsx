import { FiClock, FiTrash } from "react-icons/fi";
import Note from "../Note";
import { Tag } from "../Tag";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar.svg";
import { api } from "../../service/api";

interface Props {
  data: Result;
  handleBack: () => void;
}

interface Result {
  id: number;
  title: string;
  description: string;
  rating: number;
  created_at: string;
  tags: Tag[];
}

interface Tag {
  name: string;
}

export function MovieDetails({ data, handleBack, ...rest }: Props) {
  const { user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function splitDate(created: string): {
    dateCreated: string;
    hourCreated: string;
  } {
    const [dateCreated, hourCreated] = created.split(" ");
    return { dateCreated, hourCreated };
  }

  function formatDate(date: string): string {
    const [yyyy, mm, dd] = date.split("-");
    return `${dd}/${mm}/${yyyy}`;
  }

  const { dateCreated, hourCreated } = splitDate(data.created_at);

  async function handleRemove(id: number) {
    const confirm = window.confirm("Deseja realmente remover o filme?");

    if (confirm) {
      await api.delete(`movie_notes/${id}`);
      handleBack();
    }
  }

  return (
    <Container {...rest}>
      <div className="title">
        <h1>{data.title}</h1>
        <span>
          <Note note={data.rating} />
        </span>
      </div>
      <div className="details">
        <img src={avatarUrl} alt={user.name} />
        <p>Por {user.name}</p>
        <FiClock />
        <p>
          {formatDate(dateCreated)} às {hourCreated}
        </p>
        <button className="delete" onClick={() => handleRemove(data.id)}>
          <FiTrash />
        </button>
      </div>
      {data.tags && (
        <div className="tags">
          {data.tags.map((tag: Tag, index: number) => {
            return <Tag key={index} title={tag.name} />;
          })}
        </div>
      )}
      <p className="movie">{data.description}</p>
    </Container>
  );
}
