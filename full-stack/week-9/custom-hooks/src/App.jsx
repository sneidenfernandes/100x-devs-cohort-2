
import './App.css'
import { useState,useEffect } from 'react';
import React from 'react';
import axios from 'axios';


function useTodos(n){
  const [posts,setPosts] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const random = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  const data = response.data[random].body
  setPosts(data)
  setLoading(false)
  }
  

  useEffect(()=>{

   const value = setInterval(()=>{
      fetchData(); 

      return (
        clearInterval(value)
      )
    },n*1000)

    fetchData(); 
   
  },[posts]);

  return {posts,loading}

}



function App() {
  
    const {posts,loading} = useTodos(5);

  return (
    <>
    <div>
      {loading ? <div>loading...</div>: posts}
    </div>
    </>
  )
}




export default App
