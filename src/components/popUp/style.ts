import styled from "styled-components"


export const PopUpContainer = styled.div`
  width: 100vw;	
  height: calc(100vh - 80px);
  top:80px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  background-color:${props => props.theme.transparent};
  z-index: 2;
  @media (max-width: 700px) {
    background-color: ${props => props.theme.background};
  }

`
export const PopUpBox = styled.div`
  width: 500px;
  height: 450px;
  position: fixed;
  top: 150px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
  border-radius: 20px;
  border: 2px solid ${props => props.theme.primary};

  @media (max-width: 700px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    width: 100vw;
    height: 80%;
    top: 80px;
    background-color: transparent;
    border-radius: 0px;
    border: none;
  }
`
export const PopUpButtonClose = styled.button`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  border-radius:42px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 20px;
  right: 20px;
  @media (max-width: 700px) {
    top: 0px;
  }

`
export const PopUpAbout = styled.div`
  width:400px;
  height:80% ;
  margin: 0px 50px;
  color: ${props => props.theme.textSecondary};
  @media (max-width: 700px) {
    width: 80%;
    color: ${props => props.theme.textPrimary};
    font-size: 14pt;
  }

`
export const PopUpTitle = styled.h3`
  padding-bottom:10px;
`
export const PopUpDescription = styled.div`
  width:100% ;
  height:70% ;
  word-wrap: break-word;
  overflow:hidden;
  overflow-y: auto;
  scrollbar-width: none;

`
export const PopUpDescriptionText = styled.p`
  height:100% ;
`

export const PopUpFooter = styled.div`
  width:400px;
  height:80px;
  margin:  0px 50px 0px 40px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  color: ${props => props.theme.textSecondary};
  position: absolute;
  bottom: 0px;
  @media (max-width: 700px) {
    width:80%;
    margin:  0px 80px;
    justify-content:center;
    flex-direction:column;
    color: ${props => props.theme.textPrimary};
  }

`
export const PopUpButton=  styled.button`

 
  height: 40px;
  padding:8px;
  color: ${props=>props.theme.textSecondary};

  background-color: transparent;
  svg{
    width: 80%;
    height: 80%;
  }	
  @media (max-width: 700px) {
      width: 80px;
      height: 80px;
      padding:24px;
      color: ${props=>props.theme.textPrimary};
      svg{
        width: 100%;
        height: 100%;
      }	
  }
`
export const PopUpDate = styled.p`

  font-size: 10pt;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    font-size: 14pt;
    margin-bottom: 20px;
  }

`