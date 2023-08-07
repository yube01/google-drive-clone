import { Link } from "react-router-dom";
import "./folder.scss"
// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

const Folders = ({ f,idF }) => {
  

  // const [folderId,setFolderId] = useContext(UserContext)
// console.log(idF)
  // setFolderId(id)
  // console.log(folderId)
  return (
    <div className="folders">
      <Link to={`file/`+idF}>
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
