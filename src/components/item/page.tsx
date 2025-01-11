

import { Description, ItenContainer, ItenTitle ,Date } from './style'

export interface ItemList {
  item:{
    id:string
    title:string
    description:string
    taskStatus:string;
    date:string
  }
}
export default function ItemList({item}:ItemList) {

  const word = item.title;
  const title = word.charAt(0).toUpperCase() + word.slice(1)
 
  return (
      <ItenContainer>
          <ItenTitle>{title}</ItenTitle>
          <Description>{item.description}</Description>
          <Date>{item.date}</Date>
      </ItenContainer>
  )
}