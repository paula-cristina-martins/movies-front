import { Container } from "./styles";

interface Props {
  placeholder: string;
  value?: string;
  onChange: (e: string) => void;
}

export function TextArea({ value, onChange, ...rest }: Props) {
  return (
    <Container {...rest} onChange={(e) => onChange(e.target.value)}>
      {value}
    </Container>
  );
}
