import { useState } from "react";
import "./authStyle.scss"
import {Link} from 'react-router-dom'



const Signup = () => {


  const [email,setEmail]  = useState("")
  const[password,setPassword] = useState("")


  const handleSubmit = (e)=>{
    e.preventDefault();

  }

  return (
    <div className="register">

      <div className="container">
        <p className="title">Signup</p>
        <form onSubmit={handleSubmit}>
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
