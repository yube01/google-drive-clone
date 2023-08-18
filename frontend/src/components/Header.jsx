import { Link, useNavigate } from "react-router-dom";
import drive from "../assets/drive.png";
import "./head.scss"
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";




const Header = () => {


  const [unmae,setUname] = useState("")
  const navigate = useNavigate()

    const [logged, setLogged] = useContext(LoginContext)
 
    useEffect(()=>{
    if(logged === false ){
      navigate("/login")
    }
    
  },[navigate,logged,setLogged])
  useEffect(()=>{


  },[])

 

  
  useEffect(()=>{
    
    const logData = JSON.parse(localStorage.getItem("user"))
    console.log(logData)
    if(logData === null) {
  
   navigate("/login")

  }else{
    const firstLetter  = (logData.name).charAt(0).toUpperCase()
    setUname(firstLetter)

  }


  },[navigate])
  

  
    

  
  return (
    <div className="header">
      <div className="left">
      <Link to="/" style={{ textDecoration:"none",color:"inherit"}}>
      <div className="logo"  title="Drive">
        <img src={drive} alt=""/>
        <p>Drive</p>
      </div>
      </Link>
      <div className="search">
       
        <span className="material-symbols-outlined" title="Search">search</span>
        <input type="text" placeholder="Search in Drive" />
        <span className="material-symbols-outlined" title="Advanced Search">tune</span>
      </div>
      </div>
      <div className="rights">
        <span className="material-symbols-rounded">help</span>
        <span className="material-symbols-rounded">settings</span>
        <span className="material-symbols-rounded">
apps
</span>
<span className="user">{unmae ? unmae :""}</span>
      </div>
    </div>
  );
};

export default Header;
