import { Link, useNavigate } from "react-router-dom";
import "./folder.scss";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { url } from "../utils/url";



const Folders = ({ f, idF ,forceUpdate}) => {

  const [open,setOpen] = useState(false)
  const [rename,setRename] = useState("")
  const [deletes,setDeletes] = useState("")
  const navigate = useNavigate()
  




  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(url + `/folder/editFolder/${idF}`,{
        rename
      });
      console.log(response)
      forceUpdate()
    } catch (error) {
      console.log(error);
    }

    
  };
  const handleDelete = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.delete(url + `/folder/deleteFolder/${idF}`);
      console.log(response)
      forceUpdate()
    } catch (error) {
      console.log(error);
    }
  }
  let editBtn = useRef()
  useEffect(()=>{
    let handler = (e)=>{
      if(!editBtn.current.contains(e.target)){
        setOpen(false);
       
      }      
    };
    document.addEventListener("mousedown",handler)

    return()=>{
      document.removeEventListener("mousedown",handler)
    }
  },[])

  return (
    <div className="folders" ref={editBtn}>
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
        <span className="material-symbols-outlined" onClick={()=>setOpen(!open)}>
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
