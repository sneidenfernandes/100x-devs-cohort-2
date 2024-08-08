import React, { useEffect, useState } from 'react';



function App(){

  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
    },[]);
  })
  return <div>
  {todos.map(todo => <Todo title={todo.title} description={todo.description}/>)}
  </div>
}


function Todo({title,description}){
  
  return<div>
    
    <h1>{title}</h1>
    <br></br>
    <h4>{description}</h4>
    
  </div>
}



export default App;



