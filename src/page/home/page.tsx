import { useEffect, useState } from 'react'
import ListTasks from '../../components/listTasks/page'
import {Link} from 'react-router-dom'



import { 
  Add,
  Logout,
  ButtonMenu, 
  ButtonMenuOption, 
  ButtonOption, 
  Header, 
  ListHeader, 
  ListMenuContainer, 
  MenuContainer, 
  Section, 
  Title } from './style'
import PopUp from '../../components/popUp/page'
import ButtonTheme from '../../components/buttonOption/page'
import { LogOut } from 'lucide-react'
import { getTasks } from '../../services/useFetch'

import { ListIten, Data, Props } from './interface'

export default function Home({onTheme}:Props) {

  
  const [menuOpen, setMenuOpen] = useState(false)
  const [popUpOpen, setPopUpOpen] = useState(false)
  const [popUp, setPopUp] = useState<ListIten>()
  const [list, setList] = useState<Data>({
    toDo:[],
    inProgress:[],
    completed:[]
  })
  const [page, setPage] = useState(1)


  const [error, setError] = useState<string>("")

  useEffect(()=>{
      const api  = async ()=>{

        const response = await getTasks()
        if(response.message === "jwt expired"){
            localStorage.removeItem("token")
            window.location.href = "/"
        }
        if(response.message){
            setError(response.message)
            console.log(response);

          }
        if(response.toDo){
          setList(response)
          console.log(response);
        }
          
      }
      api()
  },[page])

  function handlePopUp(data:ListIten) { 
    setPopUp(data)
    setPopUpOpen(popUpOpen?false:true)
  }
  function removeTask(id:string,listTitle:string) {
    if(!list){return}

    if(listTitle === "toDo") {
      list.toDo.splice(list.toDo.findIndex(iten=>iten.id === id),1)
    }
    if(listTitle === "inProgress") {
      list.inProgress.splice(list.inProgress.findIndex(iten=>iten.id === id),1)
    }
    if(listTitle === "completed") {
      list.completed.splice(list.completed.findIndex(iten=>iten.id === id),1)
    }
  }
  return (
    <main>
      <Header>
        <Title>MyTasks</Title>
        <ButtonTheme onTheme={onTheme}/>
        <ListHeader>
          <ButtonOption onClick={()=>{
            setPage(1),
            setPopUpOpen(false)
          }}>A Fazer</ButtonOption>
          
          <ButtonOption onClick={()=>{
            setPage(2),
            setPopUpOpen(false)
          }}>Em Progresso</ButtonOption>
          
          <ButtonOption onClick={()=>{
            setPage(3),
            setPopUpOpen(false)
          }}>Finalisado</ButtonOption>
          
          <Link to={"/dashboard/addTask"}><Add>+</Add></Link>
          <Logout onClick={()=>{localStorage.removeItem("token"), window.location.href = "/"}}><LogOut/></Logout>
          <ButtonMenu onClick={()=>{
            setMenuOpen(menuOpen?false:true)
          }}>Menu</ButtonMenu>

        </ListHeader>
      </Header>
      
      {menuOpen?
        <MenuContainer >
          <ListMenuContainer>
            <ButtonMenuOption onClick={()=>{
              setPage(1),
              setMenuOpen(false),
              setPopUpOpen(false)
            }}> A Fazer</ButtonMenuOption>
        
            <ButtonMenuOption onClick={()=>{
              setPage(2),
              setMenuOpen(false),
              setPopUpOpen(false)
            }}> Em Progresso</ButtonMenuOption>
        
            <ButtonMenuOption onClick={()=>{
              setPage(3),
              setMenuOpen(false),
              setPopUpOpen(false)
            }}> Finalisado</ButtonMenuOption>
        <Link to={"/add"}><Add>+</Add></Link>
          </ListMenuContainer>
        </MenuContainer>
      :<></>}
      {popUpOpen?<PopUp onPopUp={setPopUpOpen} onRemoveItemFromList={removeTask} iten={popUp?popUp:{id:"",title:"",description:"",taskStatus:"",date:""}} />:<></>}
      <Section>
        {{
          1: <ListTasks onPopUpOpen={handlePopUp} title={"A Fazer"} list={list.toDo}/>,
          2: <ListTasks onPopUpOpen={handlePopUp} title={"Em Progresso"} list={list.inProgress} />,
          3: <ListTasks onPopUpOpen={handlePopUp} title={"Finalisado"} list={list.completed} />
        }[page]}
      </Section>

    </main>
  )
}