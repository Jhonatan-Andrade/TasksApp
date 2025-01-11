import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-top: 10px ;
  border: 2px solid ${props=>props.theme.border};
  transition: 0.6s;
  border-radius: 10px;
 
`
export const  Input = styled.textarea`
  width:380px;
  height: 180px;
  color: ${props=>props.theme.textPrimary};
  background-color: transparent;
  border: none;
  padding: 0 10px;
  font-size: 11pt;
  resize: none;
  overflow-y: visible;
  scrollbar-color: ${props=>props.theme.secondary}  ${props=>props.theme.background};
  &:focus{
    outline: none;
  }

`
export const  Label = styled.span`
  position: absolute;
  top: -11px;
  left: 15px;
  background-color: ${props=>props.theme.background};
  color: ${props=>props.theme.border};
  transition: 0.2s ;
  padding: 0 5px;
  font-size: 11pt;
  font-weight: 700;
`


