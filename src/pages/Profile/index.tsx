import { FiAtSign, FiCamera, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Avatar, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import Return from "../../components/Return";
import { IUser, useAuth } from "../../hooks/auth";
import { useState } from "react";
import avatarPlaceholder from "../../assets/avatar.svg";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const update: IUser = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    const userUpdate = Object.assign(user, update);

    await updateProfile(userUpdate, avatarFile);
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <Return />
        </button>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt={user.name} />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={setName}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiAtSign}
          value={email}
          onChange={setEmail}
        />
        <Input
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
          onChange={setPasswordOld}
        />
        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={setPasswordNew}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
