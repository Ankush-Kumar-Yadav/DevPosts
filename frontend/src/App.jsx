 
import './App.css'
 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import PostGet from './Components/PostGet'
import Updatepost from './Components/Updatepost'
  import { ToastContainer} from 'react-toastify';

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<PostGet/>} ></Route>
      <Route path='/user/:id' element={<Updatepost/>} ></Route>
     </Routes>
     </BrowserRouter>
      <ToastContainer/> 
    </>
  )
}

export default App
