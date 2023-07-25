import { useState } from "react"
import "./authStyle.scss"
import { Link } from "react-router-dom"



const Login = () => {


  const [email,setEmail]  = useState("")
  const[password,setPassword] = useState("")


  const handleSubmit = (e)=>{
    e.preventDefault();

  }

  return (
    <div className="login">

    <div className="container">
      <p className="title">Login</p>
      <form onSubmit={handleSubmit}>
        <input type="email"  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="submit" value="Login" className="btn"/>
      </form>
      <p>Does't have a account?? <Link to="/signup" style={{textDecoration:"none",color:"inherit"}}>
          Signup
        </Link> </p>
    </div>
      
    
  </div>
  )
}

export default Login
