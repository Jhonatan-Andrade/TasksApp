import { useState } from "react";


export interface ThemeType {
    background: string;
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
    textMenu: string;
    border: string;
    transparent: string;
    error: string;
}

export const dark:ThemeType = {
    background: " #090E16",
    primary: "rgb(16, 26, 82)",
    secondary:" #ffffff1e",
    textPrimary:" #ffffff",
    textSecondary:" #ffffff",
    textMenu:" #ffffff",
    border: " #ffffff",
    transparent:"rgba(0, 0, 0, 0.5)",
    error:"rgba(255, 38, 0, 0.34)",    
}
export const light:ThemeType = {
    background: "rgb(214, 227, 231)",
    primary: "rgb(16, 26, 82)",
    secondary:" #ffffff1e",
    textPrimary:"rgb(16, 26, 82)",
    textSecondary:"rgba(255, 255, 255, 0.82)",
    textMenu:"rgb(255, 255, 255)",
    border: "rgb(16, 26, 82)",
    transparent:"rgba(0, 0, 0, 0)",
    error:"rgba(255, 38, 0, 0.34)",   
}

export function useTheme(props?:boolean) {
  const [valueState,setValueState] = useState("dark")
  if(props){
    setValueState("dark")
  }
  else{
    setValueState("dark")
  }
  return valueState
  
}