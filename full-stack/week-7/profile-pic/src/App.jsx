import { useState } from 'react'
import ProfilePic from './components/profilepic'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <ProfilePic name="Rita Corriea" age="32" city="London" followerCount={80} likeCount={803} photoCount={1.4}  />
  )
}

export default App
