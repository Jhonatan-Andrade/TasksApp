
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props=>props.theme.background};
  @media screen  and (max-width: 600px){ 
    justify-content: start;
  }
`

export const  Close = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  right: 40px;
  background-color: transparent;
  color: ${props=>props.theme.textPrimary};
  &:hover{
    color: ${props=>props.theme.primary};
  }
  @media screen  and (max-width: 600px){
    top: 10px;
    right: 10px;
  }
`


export const  Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  position: relative;
  padding: 20px 40px;
 
  position: relative; 
  @media screen  and (max-width: 600px){ 
    width:100vw;
    padding: 20px;
    padding-top: 100px;
  }
`
export const  Title = styled.h1`
padding-bottom: 20px;
font-size: 18pt;
color: ${props=>props.theme.textPrimary};

`
export const  FormFooter = styled.div`
 width: 100%;
 height: auto;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: end;
 margin-top: 20px ;
 transition: 0.2s;

 @media screen  and (max-width: 600px){ 
  
  gap: 10px;
  }

`
export const  FormDate = styled.div`
  display: flex;
  gap: 10px;
  height: auto;
`

export const  Date = styled.input`
 width: 64px;
 height: 100%;
 border-radius: 10px;
 border: 2px solid ${props=>props.theme.primary};
 color: ${props=>props.theme.textPrimary};
 background-color: transparent;
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 0 20px;
 position: relative;
 &:focus{outline: none;}
 input[type=checkbox] {
    all: unset;
    position: absolute;
    inset: 0;
  }
 p{
  font-size: 10pt;
 }
`
export const  Button = styled.button`
 width: 100px;
 height:36px;
 border-radius: 10px;
 border: 2px solid ${props=>props.theme.primary};
 background-color: ${props=>props.theme.primary};
 color: ${props=>props.theme.textSecondary};
 box-shadow: 4px 4px 20px #00000070;
 font-family: "Poppins", sans-serif;
 font-weight: 700;
 transition: 0.2s;
 &:hover{
  border-color:#fff;
 }
`
export const  Loader = styled.div`
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  color: ${props=>props.theme.textPrimary};
  background-color: transparent;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  & svg{
    width: 100%;
    height: 100%;
  }
`
export const  Log= styled.div`
  position: absolute;
  width:200px;
  background-color: ${props=>props.theme.primary};
  color: #fff;
  top: 0;
  left: 0;
  padding: 20px;
  h3{
    font-size: 12pt;
    font-weight:400;
    color: ${props=>props.theme.secondary};
  }
  p{
    font-size: 10pt;
    font-weight:200;
  }
`