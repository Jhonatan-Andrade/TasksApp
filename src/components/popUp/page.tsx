
import { Trash, X } from "lucide-react";
import { PopUpAbout, PopUpButton, PopUpBox, PopUpDescription, PopUpDescriptionText,PopUpDate, PopUpTitle , PopUpContainer, PopUpButtonClose, PopUpFooter} from "./style"
import { deleteTask, editTask } from "../../services/useFetch";



interface Iten {
  id:string
  title:string
  description:string
  taskStatus:string;
  date:string
}
interface DataComponent{
    onPopUp:(data:boolean)=>any
    onRemoveItemFromList:(id:string,listTitle:string)=>any
    iten : Iten
}
export default function PopUp({onPopUp,onRemoveItemFromList,iten}:DataComponent) {
  

  async function editTasks(taskStatus:string) {

    const response = await editTask({
      id:iten.id,
      taskStatus:taskStatus
    })
    if(response.id === iten.id){
      onPopUp(false)
      onRemoveItemFromList(iten.id,iten.taskStatus)
    }
    if(response.message){
      window.alert(response.message)
    }
  }
  async function deleteTasks() {
    const response = await deleteTask(iten.id)
    if(response.message === "Tarefa deletada com sucesso"){
      onPopUp(false)
      onRemoveItemFromList(iten.id,iten.taskStatus)
    }
  }
  return (
        <PopUpContainer>
          <PopUpBox>
            <PopUpButtonClose onClick={()=>{onPopUp(false)}}><X/></PopUpButtonClose>
            <PopUpAbout>
              <PopUpTitle>{iten.title}</PopUpTitle>
              <PopUpDescription>
                <PopUpDescriptionText>{iten.description}</PopUpDescriptionText>
              </PopUpDescription>
            </PopUpAbout>
            <PopUpFooter>
            <PopUpDate>{iten.date}</PopUpDate>
                {{
                    "toDo": <PopUpButton onClick={()=>{editTasks("inProgress")}}>Iniciar</PopUpButton>,
                    "inProgress": <PopUpButton onClick={()=>{editTasks("completed")}}> Concluir</PopUpButton>,
                    "completed": <PopUpButton  onClick={()=>{deleteTasks()}}><Trash/></PopUpButton>,
                }[iten.taskStatus]}
            </PopUpFooter>
          </PopUpBox>
        </PopUpContainer>
  )
}