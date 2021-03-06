import React ,{useState,useEffect}from 'react'
import axios from 'axios'

const App = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/tods').then(
      response =>  setData(response.data))
    
  },[])
  return (
    <div>
      {data.map(item =><li key= {item.id}>{item.title}</li>)}

    </div>
  )
}

export default App

