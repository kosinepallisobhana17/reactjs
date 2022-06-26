import React,{useState} from 'react'
import axios from 'axios';
const App = () => {
  const [data,setData] =useState({
username:'',
password:''

  }) 
   const {username ,email,password,confirmpassword}=data;
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e =>
  e.preventDefault();
        axios.post('https://telugu-skillhub-9df9c-default-rtdb.firebaseio.com/',data).then(()=>alert("submitted successfully)"))
  
  }
  
  return (
    <div>
      <center>
        <form autoComplete="off" onSubmit={submitHandler}>
          <input type="text" name="username"  value={username} onChange={changeHandler} /><br/>
          <input type="email" name="email" value={email} onChange={changeHandler}/><br/>
          <input type="password" name="password" value={password} onChange={changeHandler} /> <br/> 
          <input type="password" name="confirmpassword" value={confirmpassword}onChange={changeHandler} /><br/>
          <input type="submit" name="submit"/>
        </form>
      </center>
    </div>
  )
}

export default App
