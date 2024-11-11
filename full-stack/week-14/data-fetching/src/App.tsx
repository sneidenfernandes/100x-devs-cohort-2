import { useEffect, useState } from 'react'
import axios from 'axios'

interface Data {
  name: string,
  email: string,
  address: {
    city: string,
    state: string,
    houseNumber: string
  }
}

function App() {
 const [data,setData] = useState<Data>();
 const [loading, setLoading] = useState(true);

  const handleRequest = async () => {
      
    
  
  }

  useEffect(()=>{
    axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')
    .then(res => {
      setData(res.data);
      setLoading(false);
    })
  },[]);

  if(loading){
    return "Loading...,"
  }

  return (

    <button >Something</button>

  )
}

export default App
