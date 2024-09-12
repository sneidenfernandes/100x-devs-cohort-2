
import './App.css'
import { useState,useEffect } from 'react';
import React from 'react';
import axios from 'axios';


// function useTodos(n){
//   const [posts,setPosts] = useState("");
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     const random = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
//   const data = response.data[random].body
//   setPosts(data)
//   setLoading(false)
//   }
  

//   useEffect(()=>{

//    const value = setInterval(()=>{
//       fetchData(); 

//       return (
//         clearInterval(value)
//       )
//     },n*1000)

//     fetchData(); 
   
//   },[posts]);

//   return {posts,loading}

// }

// function useIsOnline(){

//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(()=>{
//     window.addEventListener("online", ()=>{
//       setIsOnline(true);
//     })
  
//     window.addEventListener("offline", ()=> {
//       setIsOnline(false);
//     })
//   }, []);
  

//   return isOnline
// }

// const useMousePointer = () => {
//   // Initialize state with the initial mouse position (0, 0)
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   // Event handler to update the mouse position on mouse movement
//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     // Add event listener for 'mousemove' event when the component mounts
//     window.addEventListener('mousemove', handleMouseMove);

//     // Cleanup: Remove event listener on component unmount
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   // Return the current mouse position
//   return position;
// };



function useDebounce(value,timeout){

  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(()=>{
    let clock = setTimeout(()=>{
          setDebouncedValue(value)
    }, timeout)

    return () => {
      clearTimeout(clock)
    }
  },[value]);

  return debouncedValue;
}

function App() {
  
 const [value,setValue] = useState(0);
 const debouncedValue = useDebounce(value,500);


 return (
  <div>
    Debounced Value is :{debouncedValue}
    <input type="text" onChange={e => setValue(e.target.value)}/>
  </div>
 )

    
 
}




export default App
