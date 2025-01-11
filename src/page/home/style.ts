import {styled } from 'styled-components'



export const  Main = styled.button`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:  ${props=>props.theme.background};

`

export const  Header = styled.header`
  width: 100vw;
  height: 80px;
  background-color: ${props=>props.theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
`
export const  Title = styled.h1`
  color: ${props=>props.theme.textMenu};
  font-size: 18pt;
  left: 0;
  margin-left: 60px;
`
export const  ListHeader = styled.ul`
  width:100%;
  display: flex;
  justify-content: right;
  align-items: center;
  list-style: none;
  margin-right: 60px;
  gap: 10px;
  list-style: none;
  padding: 0;
`
export const  ButtonOption = styled.button`
    width: 130px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid transparent;
    display: flex;	
    justify-content: center;
    align-items: center;
    padding: 0.6em 1.2em;
    font-size: 10pt;
    font-weight: 600;
    background-color: ${props=>props.theme.secondary};
    cursor: pointer;
    transition: border-color 0.25s;
    color: #ffffffbd;
    color:${props=>props.theme.textMenu};

    @media (max-width: 700px) {
      display: none
    }
`
export const  Add = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  cursor: pointer;
  background-color:  ${props=>props.theme.secondary};
  border-radius: 12px;

    @media (max-width: 700px) {
        width: 48px;
        height: 48px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color:  ${props=>props.theme.primary};
    }
`
export const  Logout = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  cursor: pointer;
  background-color: transparent;
  position: absolute;
  right: 10px;

`
export const  ButtonMenu = styled.button`
    display: none;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    background-color:transparent;
    transition: border-color 0.25s;
    color:${props=>props.theme.textMenu};

    @media (max-width: 700px) {
      display: flex;
    }
`


export const  MenuContainer = styled.div`
    @media (max-width: 700px) {
        width: 100vw;
        position: fixed;
        z-index: 3;
        margin-top: 80px;
        padding: 5px 0 ;
        background-color: ${props=>props.theme.background};
        
    }
`
export const  ListMenuContainer = styled.ul`
    @media (max-width: 700px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 11pt;
        gap: 20px;
    }
`
export const  ButtonMenuOption = styled.button`
   display: none;
   @media (max-width: 700px) {
    display: flex;
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    color: #ffffffbd;
    background-color: ${props=>props.theme.primary};
    color:${props=>props.theme.textMenu};
    }
`
export const  Section = styled.section`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  z-index: 1;
  margin-top: 80px;
  scrollbar-width: none;

`
