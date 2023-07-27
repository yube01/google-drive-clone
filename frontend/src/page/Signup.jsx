import { useState } from "react";
import "./authStyle.scss"
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"


const Signup = () => {


  const [email,setEmail]  = useState("")
  const[password,setPassword] = useState("")
  const[name,setName] = useState("")

  const navigate = useNavigate()


  const handleSubmit = async(e)=>{
    e.preventDefault();

  try {

    const response = await axios.post("http://localhost:9000/auth/register",{
      name,email,password
    }).json()




    const data = response.json()
    
      if(data === "User created")
        return navigate("/login")
  
      
      

  
    
    
    
  } catch (error) {
    console.log(error)
    
  }
    

  }
  

  return (
    <div className="register">

      <div className="container">
        <p className="title">Signup</p>
        <form onSubmit={handleSubmit}>
        <input type="text"  placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="email"  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <input type="submit" value="Signup" className="btn"/>
        </form>
        <p>Already have a account?? <Link to="/login" style={{textDecoration:"none",color:"inherit"}}>
          Login
        </Link> </p>
        
      </div>
        
      
    </div>
  )
}

export default Signup
