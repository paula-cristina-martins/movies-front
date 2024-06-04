import { AiFillStar } from "react-icons/ai";
import { FiStar } from "react-icons/fi";
import { Container } from "./styles";

interface Props {
  note: number;
}

export default function Note({ note }: Props) {
  const filledStars = Math.min(note, 5);
  const emptyStars = Math.max(5 - note, 0);

  return (
    <Container>
      {[...Array(filledStars)].map((_, index) => (
        <AiFillStar key={index} />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FiStar key={filledStars + index} />
      ))}
    </Container>
  );
}
