import styled from "styled-components";

export const Container = styled.div`
   width: 36px;
   height: 36px;
   border-radius: 25px;
   margin: 0 10px ;
   display: flex;
   align-items: center;
   position: relative;
   transition: 0.9s;
   bottom{
      width: 100%;
      height: 100%;
   }
   
`
export const Cicle = styled.button`
   width: 100%;
   height: 100%;
   background-color: transparent;
   border-radius: 50%;
   &:checked{
      transition: 0.9s;
   }
`

