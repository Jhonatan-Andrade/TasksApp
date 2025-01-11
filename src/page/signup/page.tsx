import { useState } from 'react'

import {X,Loader2} from 'lucide-react'
import { Link } from 'react-router-dom'

import InputFild from '../../components/inputFild'
import ErrorMessage from '../../components/error/page'

import {Container,Form,FormFooter,Button,Close, Loader,Title} from './style'

import { validateEmail, validatePassword } from '../../scripts/validateLogin'
import { createUser } from '../../services/useFetch'

export default function SignUp() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const [errorMessage,setErroMessage] = useState("")
  const [load,setLoad] = useState(false)

  async function onSubmit() {
    setLoad(true)
    if(name.length < 2 || name.length > 16){
      setLoad(false)
      setErroMessage("Nome inválidos ( Entre 2 a 16 caracteres ) ")
      return
    }
    if(!validateEmail(email)){
      setLoad(false)
      setErroMessage("Email inválidos ( text@text.com ) ")
      return
    }
    if(!validatePassword(password)){
      setLoad(false)
      setErroMessage("Senha inválidos ( 8 a 16,maiúscula, minúscula, número, caractere, especial ) ")
      return
    }
    const response = await createUser({name,email,password})
    if(response){setErroMessage(response) , setLoad(false)}
    setLoad(false)
 
  }
  return (
    <Container>
      <Link to="/"><Close><X/></Close></Link>
        <Form>
          <Title>SignUp</Title>
          <InputFild  setValue={(text)=>{setName(text)}} label='Name' />
          <InputFild  setValue={(text)=>{setEmail(text)}} label='Email' />
          <InputFild  setValue={(text)=>{setPassword(text)}} label='Password'/>
          
          < FormFooter>
            <Button disabled={load} onClick={onSubmit}>
             {load ? <Loader><Loader2/></Loader>: <p>Criar conta</p>}
            </Button>
          </FormFooter>
          <ErrorMessage text={errorMessage} /> 
        </Form>
    </Container>
  )
}

