import {styled } from 'styled-components'


export const ItenContainer = styled.div`
  width: 300px;
  height: 100px;
  border:1px solid ${props=>props.theme.primary};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.40);
  border-radius: 10px;
  padding: 20px ;
  position: relative;
  
  list-style: none;
  color: ${props=>props.theme.textPrimary};

`
export const ItenTitle = styled.h3`
  font-size: 12pt;
`
export const Description = styled.p`
  font-size: 10pt;
  overflow: hidden;
  height: 20px;
`
export const Date = styled.p` 
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 10pt;
  
`
