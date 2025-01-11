import { useState } from "react";
import { Container,Cicle } from "./style";
import {Moon,Sun} from "lucide-react"

interface Props {
  onTheme:(prop:boolean)=>void
}

export default function ButtonOption({onTheme}:Props){
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(){
    setIsChecked(!isChecked)
    if(isChecked){onTheme(true)}
      else {onTheme(false)}
  }
  return(
        <Container>
          <Cicle onClick={()=>{handleChange()}}>
            {!isChecked ? <Moon color="white"/> : <Sun color="yellow"/>}
          </Cicle>	
        </Container>

  )
}