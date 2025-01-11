
interface Props {
  text:string
}
import styled from "styled-components";

export const  ErroMessage = styled.div`

    width: 100%;  
    height: 30px;
    color: rgba(255, 72, 72, 0.42);
    font-size: 10pt;
    font-weight: 500;
    font-size: 10pt;
    margin-left: 5px;
`

export default function ErrorMessage({text}:Props) {
  return(
          <ErroMessage >  
            <p>{text}</p>
          </ErroMessage>

  )
}