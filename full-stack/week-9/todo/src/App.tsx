import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface TodoType{
  title: string;
  description: string;
  done: boolean;
}

interface TodoInput{
  todo: TodoType;
}


function Todo({todo}: TodoInput): JSX.Element{
  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    
   
  )
}

export default App
