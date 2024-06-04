import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

interface Props {
  isNew?: boolean;
  value?: string;
  onClick?: () => void;
  placeholder?: string;
  onChange?: (e: string) => void;
}

export function TagItem({
  isNew,
  value,
  placeholder,
  onClick,
  onChange,
  ...rest
}: Props) {
  return (
    <Container $isNew={isNew ? isNew.toString() : ""}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        placeholder={isNew ? placeholder : ""}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
      <button type="button" onClick={onClick} className="button">
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
