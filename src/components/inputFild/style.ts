import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 10px 0;
  border-radius: 10px;
`
export const  Input = styled.input`
  width:100%;
  height: 38px;
  color: ${props=>props.theme.textPrimary};
  background-color: transparent;
  border: 2px solid ${props=>props.theme.border};
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 11pt;
  transition: 0.6s;
  
 
  &:focus{outline: none;}
`
export const  Label = styled.span`
  position: absolute;
  top: -8px;
  left: 15px;
  background-color: ${props=>props.theme.background};
  color: ${props=>props.theme.border};
  transition: 0.2s ;
  padding: 0 5px;
  font-size: 11pt;
  font-weight: 700;
`
