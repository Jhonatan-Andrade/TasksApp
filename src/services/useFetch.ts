import axios from "axios";
import { CreatedTask, EditTask, UserSignIn, UserSignUp } from "./interface";

const baseUrl = 'http://localhost:3333';
const token = `Bearer ${localStorage.getItem("token")}`


//Criar usuario
export const createUser = async ({name,email, password}: UserSignUp) => {
 
  try {
    const response = await axios(`${baseUrl}/user/signup`,{
    method: 'POST',
    data:{name,email, password}
    });
    if(response.data.created){
      localStorage.setItem("token",response.data.token)
      window.location.href = "/dashboard"
    } 
  }
  catch (error:any) {
    return error.response.data.message 
  }

}
//Login
export const signinUser = async ({email, password}: UserSignIn) => {

  try {
    const response = await axios(`${baseUrl}/user/signin`,{
    method: 'POST',
    data:{email, password}
    });
    localStorage.setItem("token",response.data.token)
    window.location.href = "/dashboard"
  }
  catch (error:any) {
    return error.response.data.message 
  }

}
`${baseUrl}/task`
//Criar tarefa
export const createTask = async (data:CreatedTask) => {
  try {
    const response = await axios(`${baseUrl}/task`,{
    method: 'POST',
    data,
    headers:{
      Authorization: token
    }
    });
    if(response.data.title === data.title){
      window.location.href = "/dashboard" 
    }
  }
  catch (error:any) {
      return error.response.data.message 
  }
}
//Buscar tarefas
export const getTasks = async () => {

  
  try {
    const response = await axios(`${baseUrl}/task`,{
    method: 'GET',
    headers:{
      Authorization: token
    }
    });
    return response.data
  }
  catch (error:any) {
    return error.response.data
  }
}
//Editar tarefa
export const editTask = async (data:EditTask) => {
  try {
    const response = await axios(`${baseUrl}/task`,{
    method: 'PUT',
    data,
    headers:{
      Authorization: token
    }
    });
    return response.data
  }
  catch (error:any) {
    return error.response.data
  }
}
//Deletar tarefa
export const deleteTask = async (id:string) => {
  try {
    const response = await axios(`${baseUrl}/task`,{
    method: 'DELETE',
    data:{id},
    headers:{
      Authorization: token
    }
    });
    return response.data
  }
  catch (error:any) {
    return error.response.data
  }
}