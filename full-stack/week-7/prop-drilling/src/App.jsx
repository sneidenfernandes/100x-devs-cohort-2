import { useState, useContext } from 'react'
import './App.css'
import {useRecoilValue, useRecoilState, RecoilRoot, useSetRecoilState} from "recoil";
import {countAtom,evenSelector} from "./store/atoms/count";



function App() {
  

  return (
     <div>
        <RecoilRoot>
        <Count />
        </RecoilRoot>
  
     </div>
  )
}



function Count(){
  return <div>
    <CountRenderer/>
    <Buttons />
    <EvenCountRender/>
  </div>

}

function EvenCountRender(){
  const isEven = useRecoilValue(evenSelector);

  return <div>{isEven ? "It is even": null }</div>
}

function CountRenderer(){
 const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}



function Buttons(){
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount(count => count + 1)
    }}>Decrease</button>
    <button onClick={()=>{
      setCount(count => count - 1)
    }}>Increase</button>
  </div>

}





export default App