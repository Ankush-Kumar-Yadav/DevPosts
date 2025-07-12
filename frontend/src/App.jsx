import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Getdata from './Components/Getdata';
import Updatepost from './Components/Updatepost';
import { ToastContainer } from 'react-toastify';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Postdata from './Components/Postdata';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<>
              <Postdata />  
              <Getdata /> 
            </>} />
          <Route path='/user/:id' element={<Updatepost />} />
          <Route path='/register' element={<Register />} />  
          <Route path='/login' element={<Login />} />  
        </Routes>
      </BrowserRouter>
      <ToastContainer /> 
    </>
  );
}

export default App;
