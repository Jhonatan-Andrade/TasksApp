import { useState } from 'react'

import {Loader2} from 'lucide-react'
import { Link } from 'react-router-dom'

import InputFild from '../../components/inputFild'
import ErrorMessage from '../../components/error/page'

import {Container,Form,FormFooter,Button,Title, Loader} from './style'

import { validateEmail, validatePassword } from '../../scripts/validateLogin'
import { signinUser } from '../../services/useFetch'


export default function SignIn() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const [errorMessage,setErroMessage] = useState("")
  const [load,setLoad] = useState(false)

  async function onSubmit() {
    setLoad(true)
 
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
    const response = await signinUser({email,password})
    if(response){setErroMessage(response) , setLoad(false)}
    setLoad(false)
  }
  return (
    <Container>
        <Form>
          <Title>Login</Title>
          <InputFild setValue={(text)=>{setEmail(text)}} label='Email' />
          <InputFild setValue={(text)=>{setPassword(text)}} label='Password'/>
          
          < FormFooter>
            <Link to="/signup">Cadastre-se</Link>
            
            <Button disabled={load} onClick={onSubmit}>
             {load ? <Loader><Loader2/></Loader>: 'Entrar'}
            </Button>
          </FormFooter>
          <ErrorMessage text={errorMessage} /> 
        </Form>
    </Container>
  )
}

