import { Link } from "react-router-dom";
import "./folder.scss"

const Folders = ({ f }) => {
  return (
    <div className="folders">
      <Link to="/file">
      <div className="fo">
    <span className="material-symbols-outlined">folder</span>
    <p>{f.folderName}</p>
    </div>
   
   </Link>
    
    <span className="material-symbols-outlined">more_vert</span>
  </div>
    
  );
};

export default Folders;
