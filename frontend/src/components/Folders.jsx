import { Link, useNavigate } from "react-router-dom";
import "./folder.scss";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { url } from "../utils/url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Folders = ({ f, idF ,forceUpdate}) => {

  const [open,setOpen] = useState(false)
  const [rename,setRename] = useState("")
  const [deletes,setDeletes] = useState("")
  const navigate = useNavigate()
  




  const handleEdit = async (e) => {
    e.preventDefault()
    if (rename.length === 0 ){
      toast.error("Field is empty", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }else{
      try {
        const response = await axios.put(url + `/folder/editFolder/${idF}`,{
          rename
        });
        console.log(response)
        toast.success("Folder name changed", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          forceUpdate()
          
        }, 3000);
      } catch (error) {
        console.log(error);
        toast.error("Error occur", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

    }
    

    
  };
  const handleDelete = async(e)=>{
    e.preventDefault();
    try {
      const del = confirm("Do you want to delete this folder ?")
      if(del){
        const response = await axios.delete(url + `/folder/deleteFolder/${idF}`);
        toast.success("Folder deleted", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      console.log(response)
      setTimeout(() => {
        forceUpdate()
      }, 3000);
     
      }else{
        toast.warning("Process cancelled", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
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
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Folders;
