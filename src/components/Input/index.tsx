import { Container } from "./styles";

interface Props {
  icon?: React.ComponentType<{ size: number }>;
  placeholder: string;
  type?: string;
  value?: string;
  onChange: (e: string) => void;
}

export function Input({
  icon: Icon,
  placeholder,
  value,
  onChange,
  ...rest
}: Props) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input
        {...rest}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
}
