import { useState } from "react"
import "./authStyle.scss"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"



const Login = () => {


  const [email,setEmail]  = useState("")
  const[password,setPassword] = useState("")

  const navigate = useNavigate()


  const handleSubmit = async(e)=>{
    e.preventDefault();

    
       
  try {

    const response = await axios.post("http://localhost:9000/auth/login",{
    email,password
    }).json()




    const data = response.json()
    
      if(data === "User hasnot been created" || data === "Password Incorrect"){
        return console.log(data)

      }else{
        localStorage.setItem("user",JSON.stringify(data))
        navigate("/")
      }
    
  } catch (error) {
    console.log(error)
    
  }
      
      

  
    
    
    
  
    
  

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
      <p>Doesnot have a account?? <Link to="/signup" style={{textDecoration:"none",color:"inherit"}}>
          Signup
        </Link> </p>
    </div>
      
    
  </div>
  )
}

export default Login
