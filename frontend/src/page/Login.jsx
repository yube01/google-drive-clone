import { useContext, useEffect, useState } from "react";
import "./authStyle.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";

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
        const response = await axios.post("http://localhost:9001/auth/login", {
          name,
          password,
        },{
          withCredentials:true
        });
  
        localStorage.setItem("user",JSON.stringify(response.data));
        
        setLogged(true)
        navigate("/");
      } catch (error) {
        setErr("User credential is invalid");
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
      </div>
    </div>
  );
};

export default Login;
