import { Link } from "react-router-dom";
import drive from "../assets/drive.png";
import "./head.scss"
import { useState } from "react";


const Header = () => {

  

  const logData = JSON.parse(localStorage.getItem("user")) || null
  const firstLetter  = (logData.name).charAt(0).toUpperCase()
  
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
<span className="user">{firstLetter}</span>
      </div>
    </div>
  );
};

export default Header;
