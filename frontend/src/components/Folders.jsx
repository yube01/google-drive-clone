import { Link } from "react-router-dom";
import "./folder.scss"
import { useState } from "react";
import Dot from "./Dot";



const Folders = ({ f,idF }) => {

  const [openDrop, setOpenDrop] = useState(false)

  const opneDropBox = ()=>{
    setOpenDrop(!openDrop)

  }
  

  return (
    <div className="folders">
      <Link to={`file/`+idF} style={{ textDecoration:"none",color:"inherit"}} >
      <div className="fo">
    <span className="material-symbols-outlined">folder</span>
    <p>{f.folderName}</p>
    </div>
   
   </Link>
    
    <span className="material-symbols-outlined dot" onClick={opneDropBox} >more_vert</span>
    {
      openDrop && 
      <Dot/>
    }
  </div>
    
  );
};

export default Folders;
