export interface UserSignUp {
  name: string;
  email: string;
  password: string;
}
export interface UserSignIn {
  email: string;
  password: string;
}
export interface CreatedTask {
  title: string;
  description: string;
  date: string;
}
export interface EditTask {
  id: string;
  taskStatus: string;
}

