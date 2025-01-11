
import { useState } from 'react'
import { Container, Input, Label } from './style'

interface Props {
    label:string
    type?:string
    setValue:(text:string)=>void
}
export  default function InputFild({label , type, setValue}:Props) {
  const [text,setText]= useState("")
  return (
        <Container >
            <Input 
              placeholder="" 
              type={type} 
              value={text} 
              onChange={(e)=>{
                setText(e.target.value),
                setValue(e.target.value)
              }}/>
            <Label>{label}</Label>
        </Container>
  )
}

