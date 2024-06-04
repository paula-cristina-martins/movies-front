import { FiAtSign, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="email" icon={FiAtSign} onChange={setEmail}/>
        <Input placeholder="Senha" type="password" icon={FiLock} onChange={setPassword}/>

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar Conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
