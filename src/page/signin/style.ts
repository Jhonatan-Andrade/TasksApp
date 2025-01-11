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
export const  Title = styled.h1`
  color: ${props=>props.theme.textPrimary};
  font-size: 20pt;
  font-weight: 500;
  margin-bottom: 20px;
`
export const  Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height	: 55%;
  border-radius: 10px;
  position: relative;
  padding: 20px 40px;
  position: relative;
  @media screen  and (max-width: 600px){ 
    width:100vw;
    padding: 20px;
    padding-top: 100px;
  }
`
export const  FormFooter = styled.div`
 width: 100%;
 height: 36px;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 margin: 10px 0;
 transition: 0.2s;
   a{
    color: ${props=>props.theme.textPrimary};
    font-weight: 500;
    text-align: start;
    font-size: 10pt;
    margin-left: 5px;
    &:hover{
      opacity: 0.5;
    }
  }
 @media screen  and (max-width: 600px){ 
  
  gap: 10px;
  }

`
export const  FormDate = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
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
 height: 100%;
 border-radius: 10px;
 display: flex;
 align-items: center;
 justify-content: center;
 border: 1px solid ${props=>props.theme.primary};
 background-color: ${props=>props.theme.primary};
 color: ${props=>props.theme.textPrimary};
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
