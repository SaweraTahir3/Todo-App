
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar'
import Login from "./Components/Login/Login";

import Todos from "./Components/Todos/Todos";
// import { Form } from 'formik'
function App() {
  

  return (
    <>
 <Navbar/>
   <BrowserRouter>
  <Routes>
    <Route path='/' element={<SignUp/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path="/Todo" element={<Todos/>}/>
 
   </Routes>
</BrowserRouter> 
  
  
    </>
  )
}

export default App
