import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [user, setUser] = useState({
     name:"",
     email:""
  });
  const [message,setMessage]=useState('');

useEffect(()=>{
    const fetchData=async()=>{
         const req= await axios.get('/api/mydata');
         setMessage(req.data.message)
    }
      fetchData()
},[])

const  handleSubmit=(e)=>{
      e.preventDefault()
}


  return (
    <>
     
     <div>
      <h1>hii, {message}</h1>
      <form onSubmit={handleSubmit}>
        <label id='name'>Name</label><br/>
       <input type='text'value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}></input><br />
       <label id='email'>Email</label><br />

       <input type='text'value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}></input><br />
        <input type='submit' ></input>
      </form>
     </div>
      <ul>

      </ul>
    </>
  )
}

export default App
