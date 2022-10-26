import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
} from "./styled";
import bin from "../../assets/bin.png";
import { ListaTarefasCompletas } from "../ListaTarefasCompletas";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefaCompleta, setTarefaCompleta] = useState([]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    const tarefaCompletaFiltrada = [...tarefaCompleta, tarefa];
    setTarefaCompleta(tarefaCompletaFiltrada);
    setLista(listaFiltrada);
  };

  const adicionaTarefaEnter = (event) => {
    if (event.charCode === 13) {
      const novaLista = [...lista, novaTarefa];
      setLista(novaLista);
      setNovaTarefa("");
    }
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyPress={(event) => adicionaTarefaEnter(event)}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
        <h1>Tarefas Completas</h1>
        <ul>
          {tarefaCompleta.map((tarefa, index) => {
            return <ListaTarefasCompletas tarefaCompleta={tarefa} />;
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
    </ListaTarefasContainer>
  );
}
