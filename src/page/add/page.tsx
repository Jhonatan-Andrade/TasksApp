

import { useState } from 'react'

import {Loader2, X} from 'lucide-react'
import { Link } from 'react-router-dom'

import InputArea from '../../components/inputArea'
import InputFild from '../../components/inputFild'
import InputDate from '../../components/inputDate'
import ErrorMessage from '../../components/error/page'

import {Container,Form,FormDate,FormFooter,Button,Close, Title, Loader} from './style'

import { createTask } from '../../services/useFetch'

export default  function AddPage() {
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")

  const [year,setYear] = useState("")
  const [month,setMonth] = useState("")
  const [day,setDay] = useState("")

  const [errorMessage,setErroMessage] = useState("")
  const [load,setLoad] = useState(false)

  async function onSubmit() {
    if (!title || !description || !year || !month || !day ) {
      setErroMessage("Preencha todos os campos")
      return
    }
    setLoad(true)
    const response = await createTask({
          title,
          description,
          date: `${day}/${month}/${year}`
    })
    if(response){setErroMessage(response) , setLoad(false)}
    setLoad(false)
  }
  return (
    <Container>
      <Link to="/dashboard" ><Close><X/></Close></Link>
        <Form>
          <Title>Criar Tarefa</Title>
          <InputFild setValue={(text)=>{setTitle(text)}} label='Titulo' />
          <InputArea setValue={(text)=>{setDescription(text)}} label='Descrição'/>
          < FormFooter>
            <FormDate>
              <InputDate setValue={(text)=>{setDay(text)}} label='Dia' />
              <InputDate setValue={(text)=>{setMonth(text)}} label='Mes' />
              <InputDate setValue={(text)=>{setYear(text)}} label='Ano' />
            </FormDate> 
            <Button disabled={load} onClick={onSubmit}>
             {load ? <Loader><Loader2/></Loader>: 'Criar'}
            </Button>
          </FormFooter>
          <ErrorMessage text={errorMessage} /> 
        </Form>
    </Container>
  )
}

