
import { useState } from 'react'
import { Container, Input, Label } from './style'

interface Props {
    label:string
    setValue:(text:string)=>void
}

export default function InputArea({label,setValue}:Props) {
  const [text,setText]= useState("")
  return (
        <Container >
            <Input  
            value={text} 
            onChange={(e)=>{
              setText(e.target.value),
              setValue(e.target.value)
            }} 
            placeholder=""/>
            <Label>{label}</Label>
        </Container>
  )
}

