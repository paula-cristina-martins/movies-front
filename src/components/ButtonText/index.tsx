import { Container } from "./styles";

interface Props {
  title: string;
  isActive?: string;
  onClick: () => void;
}

export function ButtonText({
  title,
  isActive = "false",
  onClick,
  ...rest
}: Props) {
  return (
    <Container
      type="button"
      {...rest}
      $active={isActive.toString()}
      onClick={() => onClick()}
    >
      {title}
    </Container>
  );
}
