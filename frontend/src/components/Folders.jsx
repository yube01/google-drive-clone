import { Link } from "react-router-dom";
import "./folder.scss";
import axios from "axios";
import { useState } from "react";

const Folders = ({ f, idF }) => {

  const [folderName,setFolderName ]  = useState("")
  const [open,setOpen] = useState(false)

  const formOpen = ()=>{
    setOpen(!open)

  }

  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put("http://localhost:9000/folder/editFolder/ "+ idF,{
        folderName
      });
      console.log(response)
    } catch (error) {
      console.log(error);
    }

    
  };

  return (
    <div className="folders">
      <Link
        to={`file/` + idF}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="fo">
          <span className="material-symbols-outlined">folder</span>
          <p>{f.folderName}</p>
        </div>
      </Link>
      <div className="crud">
        <span className="material-symbols-outlined" onClick={formOpen}>
          edit
        </span>
        {
          open &&
          <form onSubmit={handleEdit} >
        <input
          type="text"
          placeholder="rename"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
        />
        <input type="submit" value="Rename"/>
        </form>
        }
        <span className="material-symbols-outlined">delete</span>
      </div>
    </div>
  );
};

export default Folders;
