import { useState } from 'react'
import {BrowserRouter, Routes, Route,useNavigate} from 'react-router-dom';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<FirstPage/>}/>
      <Route path='/secondPage' element={<SecondPage/>}/>   
      <Route path='/thirdPage' element={<ThirdPage/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App;
