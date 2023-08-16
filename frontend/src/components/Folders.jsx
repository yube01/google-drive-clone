import { Link, useNavigate } from "react-router-dom";
import "./folder.scss";
import axios from "axios";
import { useState } from "react";

const Folders = ({ f, idF }) => {

  const [open,setOpen] = useState(false)
  const [rename,setRename] = useState("")
  const [deletes,setDeletes] = useState("")
  const navigate = useNavigate()

  const formOpen = ()=>{
    setOpen(!open)

  }

  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`https://dull-puce-chicken-hat.cyclic.cloud/folder/editFolder/${idF}`,{
        rename
      });
      console.log(response)
      navigate("/login")
    } catch (error) {
      console.log(error);
    }

    
  };
  const handleDelete = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.delete(`https://dull-puce-chicken-hat.cyclic.cloud/folder/deleteFolder/${idF}`);
      console.log(response)
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  }

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
          <form >
        <input
          type="text"
          placeholder="Change Name"
          value={rename}
          onChange={(e) => setRename(e.target.value)}
        />
        <button onClick={handleEdit}> Rename</button>
        </form>
        }
        <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
      </div>
    </div>
  );
};

export default Folders;
