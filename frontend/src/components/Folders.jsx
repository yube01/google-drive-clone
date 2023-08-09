import { Link } from "react-router-dom";
import "./folder.scss"






const Folders = ({ f,idF }) => {


  

  return (
    <div className="folders">
      <Link to={`file/`+idF} style={{ textDecoration:"none",color:"inherit"}} >
      <div className="fo">
    <span className="material-symbols-outlined">folder</span>
    <p>{f.folderName}</p>
    </div>
   
   </Link>
    
   
  </div>
    
  );
};

export default Folders;
