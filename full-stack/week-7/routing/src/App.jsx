import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import {lazy} from "react";

import './App.css';
import { Suspense } from 'react';

const Dashboard = lazy(() => import('./components/Dashboard.jsx'));
const Landing = lazy(() => import('./components/Landing.jsx'));


function App() {

  return (
    <div>
      
    <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          <Route path='/' element ={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}



function Appbar(){

  const navigate = useNavigate();
  
  return <div>
            <div>
            <button onClick={()=>{
              navigate("/");
            }}>Landing Page</button>
            <button onClick={()=>{
              navigate("/dashboard");
            }}>Dashboard</button>
            </div>
         </div>
}

export default App
