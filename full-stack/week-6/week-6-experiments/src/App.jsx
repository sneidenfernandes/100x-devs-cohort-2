import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = 0;
  for(let i = 1; i <= inputValue; i++){
    count = count + i;
  }



  return <div>
    <input onChange={
      function(e){
        setInputValue(e.target.value);
      }
    } placeholder={"Find sum from 1 to n"}></input>
    <br />
    <div>Sum from 1 to {inputValue} is {count}</div>
  
    <button onClick={()=>{
      setCounter(counter+1);
    }}>Counter ({counter})</button>
  </div>


}







export default App
