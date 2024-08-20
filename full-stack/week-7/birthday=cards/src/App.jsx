import { useState, useRef } from 'react'
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'
import FirstPage from './components/FirstPage'
import BirthdayCards from './components/BirthdayCards'


function App() {

 

 
  const [name, setName] = useState('');

  const changeName = (e) => {
    setName(e.target.value)
    
  }
  

  return (
   
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<FirstPage onchange={changeName} />}/>
    <Route path='/BirthdayCards' element={<BirthdayCards name={name}/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
