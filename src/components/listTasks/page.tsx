
import ItenList from '../item/page'
import { Button, List, ListContainer, TasksContainer, Title, TitleContainer } from './style'

interface ItenList {
  id:string
  title:string
  description:string
  taskStatus:string;
  date:string
}
interface DataList {
  onPopUpOpen:(data:ItenList)=>void
  title:string
  list:ItenList[]
}

function ListTasks({onPopUpOpen,title , list}:DataList) {
  return (
    <TasksContainer >
      <TitleContainer >
        <Title>{title}</Title>
      </TitleContainer>
      <ListContainer>
        <List>
          {list.map((data:ItenList, index)=>{
            
            return (
              <Button key={index}  onClick={()=>{onPopUpOpen(data)}}>
                <ItenList   item={data}/>
              </Button>
            )
          })}
        </List>
      </ListContainer>
    </TasksContainer>
  )
}

export default ListTasks