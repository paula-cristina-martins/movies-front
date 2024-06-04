import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import Return from "../../components/Return";
import { TextArea } from "../../components/TextArea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TagItem } from "../../components/TagItem";
import { api } from "../../service/api";

export function New() {
  const [title, setTitle] = useState("");
  const [available, setAvailable] = useState(null);
  const [observation, setObservation] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted: string) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título do filme.");
    }

    if (available < 0 || available > 5) {
      return alert("Atenção ao informar a nota entre 0 a 5.");
    }

    if (!observation) {
      return alert("Digite a observação do filme.");
    }

    if(tags.length == 0) {
      return alert(
        "Informe um novo marcador."
      );
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar."
      );
    }
    
    await api.post("/movie_notes", {
      title,
      rating: Number(available),
      description: observation,
      tags,
    });
    alert("Filme cadastrado com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <aside>
        <button className="return" type="button" onClick={handleBack}>
          <Return />
        </button>
      </aside>
      <main>
        <Form>
          <h1>Novo filme</h1>
          <div>
            <Input placeholder="Titulo" type="text" onChange={setTitle} />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              onChange={setAvailable}
            />
          </div>
          <TextArea placeholder="Observações" onChange={setObservation} />

          <p>Marcadores</p>

          <span className="tags">
            {tags.map((tag, index) => {
              return (
                <TagItem
                  key={index}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              );
            })}

            <TagItem
              isNew
              placeholder="Novo Marcador"
              value={newTag}
              onChange={setNewTag}
              onClick={handleAddTag}
            />
          </span>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
