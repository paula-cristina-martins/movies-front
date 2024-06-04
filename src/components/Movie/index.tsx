import Note from "../Note";
import { Tag } from "../Tag";
import { Container } from "./styles";

interface Props {
  data: Result;
  onClick: () => void;
}

interface Result {
  id: number;
  title: string;
  description: string;
  rating: number;
  tags: Tag[];
}

interface Tag {
  name: string;
}

export function Movie({ data, onClick, ...rest }: Props) {
  return (
    <Container to={`/details/${data.id}`} onClick={() => onClick()} {...rest}>
      <div>
        <h1>{data.title}</h1>
        <Note note={data.rating} />
      </div>
      <p>{data.description}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag: Tag, index: number) => {
            return <Tag key={index} title={tag.name} />;
          })}
        </footer>
      )}
    </Container>
  );
}
