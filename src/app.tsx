

import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import SignUp from './page/signup/page.tsx'
import SignIn from './page/signin/page.tsx'
import Home from './page/home/page.tsx'
import AddPage from './page/add/page.tsx'


import { ThemeProvider,  } from 'styled-components'
import { GlobalStyle } from './globalStyle.ts'
import { dark , light ,useTheme} from './theme.ts'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface User {
  id: number;
  name: string;
  email: string;
}

export default  function App() {



  const [theme,setTheme]=useState<boolean>(true)
  const [user,setUser]=useState<User>()
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    
  const token = localStorage.getItem("token")

  axios.get("http://localhost:3333/task",{
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  .then((response)=>{
    if(response.status === 200)
      setIsLoggedIn(true)
    
  })
  .catch((error)=>{
    if(error.response.data.status === 500){
      setIsLoggedIn(false)
    }
  })

return (
  <ThemeProvider  theme={theme?dark:light}>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!isLoggedIn? <SignIn /> : <Navigate to="/dashboard" />}/>
        <Route path="/signup" element={<SignUp/>}/>

        <Route path="/dashboard" element={localStorage.getItem("token") ? <Home onTheme = {setTheme} /> : <Navigate to="/" />}/>
        <Route path="/dashboard/addTask" element={localStorage.getItem("token") ? <AddPage /> : <Navigate to="/" />}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)
}