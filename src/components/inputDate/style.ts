import styled from 'styled-components'

export const Container = styled.div`
  width:64px;
  height: 46px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;  
  position: relative;
  border-radius: 10px;
  border: 2px solid ${props=>props.theme.border} ;
 
`
export const  Input = styled.input`
 width:100%;
 height: 36px;
 color: ${props=>props.theme.textPrimary};
 font-size: 11pt;
 background-color: transparent;
 transition: 0.6s;
 padding: 0 5px ;
  &:focus{outline: none;}
`
export const  Label = styled.span`
  position: absolute;
  background-color: ${props=>props.theme.background};
  color: ${props=>props.theme.border};
  transition: 0.2s ;
  top: -10px;
  padding: 0 5px;
  font-size: 11pt;
  font-weight: 700;
  border-radius: 10px;
  text-align: center;
`
