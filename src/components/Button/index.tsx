import { Container } from "./styles";

interface Props {
  title: string;
  loading?: boolean;
  onClick: () => void;
}

export function Button({ title, loading, onClick, ...rest }: Props) {
  return (
    <Container type="button" onClick={onClick} disabled={loading} {...rest}>
      {loading ? "Carregando..." : title}
    </Container>
  );
}
