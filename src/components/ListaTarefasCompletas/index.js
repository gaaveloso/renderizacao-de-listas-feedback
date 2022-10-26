import { ListaContainer, Tarefa, RemoveButton, ListaTarefasContainer } from "./styled";
import bin from "../../assets/bin.png";

export const ListaTarefasCompletas = (props) => {
  return (
    <ListaContainer>
      <ul>
        <Tarefa>
          <s>{props.tarefaCompleta}</s>
        </Tarefa>
      </ul>
    </ListaContainer>
  );
};
