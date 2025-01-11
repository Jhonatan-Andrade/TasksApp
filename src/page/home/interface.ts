export interface ListIten {
    id:string
    title:string
    description:string
    taskStatus:string;
    date:string
  }
export interface Data {
  toDo:ListIten[]
  inProgress:ListIten[]
  completed:ListIten[]
}
export interface Props {
  onTheme:(prop:boolean)=>void
}