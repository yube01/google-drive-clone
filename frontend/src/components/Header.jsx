import { Link, useNavigate } from "react-router-dom";
import drive from "../assets/drive.png";
import "./head.scss"



const Header = () => {



  

  

  
    

  
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
<span className="user">{}</span>
      </div>
    </div>
  );
};

export default Header;
