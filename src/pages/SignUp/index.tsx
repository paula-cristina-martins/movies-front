import { FiArrowLeft, FiAtSign, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../service/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível realizar o cadastro!");
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua Conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={setName}
        />
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiAtSign}
          onChange={setEmail}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={setPassword}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
