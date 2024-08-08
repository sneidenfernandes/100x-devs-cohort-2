import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("my name is harkirat");

  function updateTitle(){
    setTitle("my name is " + Math.random());
    
  }      

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="harkirat2"></Header>
      <Header title="harkirat2"></Header>
      <Header title="harkirat2"></Header>
      <Header title="harkirat2"></Header>
      <Header title="harkirat2"></Header>

      </div>
    
  )
}

function HeaderWithButton(){
  
}

const Header = React.memo(function({title}){
  return <div>
    {title}
  </div>
})
export default App
