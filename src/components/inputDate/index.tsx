
import { useState } from 'react'
import { Container, Input, Label } from './style'

interface Props {
    label:string
    setValue:(text:string)=>void
}
export  default function InputDate({label , setValue}:Props) {
  const [text,setText]= useState("")

  function handleChange(value:string){
    setText(value)
    setValue(value)
  }


  
  return (
        <Container>
            <Input  
              value={text} 
              onChange={(e)=>{
                handleChange(e.target.value)
              }}  
              placeholder="">              
            </Input>
            <Label>{label}</Label>
        </Container>
  )
}

