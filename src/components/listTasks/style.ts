import {styled } from 'styled-components'



export const TasksContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    overflow-y: scroll;
    scrollbar-color: ${props=>props.theme.secondary}  ${props=>props.theme.background};
   
    background-color: ${props=>props.theme.background};
    color: ${props=>props.theme.textSecondary};
  `
  export const TitleContainer = styled.div`
    display: flex;
    margin-top: 32px;
    margin-left: 64px;
    color: ${props=>props.theme.textSecondary};
    @media (max-width: 700px) {
      justify-content: center;
      margin-top: 64px ;
      margin-left: 0px;
    }
  `
  export const Title = styled.h3`
  color: ${props=>props.theme.textPrimary};

  `
  export const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  export const List = styled.ul`
    width: 90%;
    display: grid;
    grid-template-columns: auto auto auto; 
    list-style: none;
    grid-gap: 24px;
    align-items: center;
    justify-content: start;
    padding: 20px;
    @media (max-width: 1000px) {
      grid-template-columns: auto auto;
    }
    @media (max-width: 700px) {
      grid-template-columns: auto;
      width: 80%;
      justify-content: center;
    }
    @media (max-width: 550px) {
      grid-template-columns: auto;
      width: 90%;
    }
    @media (min-width: 1600px) {
      grid-template-columns: auto auto auto auto;
    }
    @media (min-width: 2000px) {
      grid-template-columns: auto auto auto auto auto;
    }
  `
  export const Button = styled.a`
    background-color: transparent;
    border: none;
    cursor: pointer;
    justify-content: center;
    
    :hover{
      background-color: ${props=>props.theme.primary};
      color: ${props=>props.theme.textSecondary};
    }
    &:hover div{
      box-shadow: none;
    }

  `