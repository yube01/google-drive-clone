import { useContext, useEffect, useState } from "react";
import "./authStyle.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../utils/url";



const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [err,setErr] = useState("")


  
  const [logged, setLogged] = useContext(LoginContext)

  const navigate = useNavigate();
  

  useEffect(()=>{
    const logData = localStorage.getItem("user")
    if(logData){
      setLogged(true)
      navigate("/")
    }
  },[setLogged,navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    if(name.length === 0 && password.length === 0 ){
      setErr("Please fillup data in each section")
  }

    else{
      try {
        const response = await axios.post(url+ "/auth/login", {
          name,
          password,
        });
        console.log(response)
  
        localStorage.setItem("user",JSON.stringify(response.data));
        
        setLogged(true)
        toast.success("Login Successful", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        
        setTimeout(()=>{
          navigate("/");

        },5000)
        
      } catch (error) {
        const loginError =  error.response.data
        console.log(loginError)
        toast.error(loginError, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
       
      }
    }
  };

  return (
    <div className="login">
      <div className="container">
        <p className="title">Login</p>
        <div className="error">{err}</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login" className="btn" />
        </form>

        <p>
          Doesnot have a account??{" "}
          <Link to="/signup" style={{ textDecoration: "none", color: "blue" }}>
            Signup
          </Link>{" "}
        </p>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Login;
