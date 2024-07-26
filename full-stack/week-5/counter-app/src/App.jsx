
import './App.css'
import { useState } from 'react';



function App() {
    const [count, setCount] = useState(0);
    console.log(count);
    console.log(setCount);

    function onClickHandler(){
      setCount(count + 1);
    }


    return (
      
      <CustomButton count={count} setCount={setCount}></CustomButton>

    )
}

// component
function CustomButton(props){

  function onClickHandler(){
    props.setCount(count+1);
  }

  return<button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
