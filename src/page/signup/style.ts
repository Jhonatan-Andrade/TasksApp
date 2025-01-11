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
  display: flex;
  
  color: ${props=>props.theme.textPrimary};
  &:hover{
    color: ${props=>props.theme.primary};
  }
  @media screen  and (max-width: 600px){
    top: 10px;
    right: 10px;
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
  height	: 70%;
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
 justify-content: center;
 align-items: center;
 margin: 10px 0;
`

export const  Button = styled.button`
 width: 100%;
 height: 100%;
 border-radius: 10px;
 display: flex;
 align-items: center;
 justify-content: center;
 border: 1px solid ${props=>props.theme.primary};
 background-color: ${props=>props.theme.primary};
 color: ${props=>props.theme.textPrimary};
 &:hover{
  border: 1px solid ${props=>props.theme.border};
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
export const  ErroMessage = styled.div`

    width: 100%;  
    height: 30px;
    color: rgba(255, 72, 72, 0.42);
    font-size: 10pt;
    font-weight: 500;
    font-size: 10pt;
    margin-left: 5px;
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