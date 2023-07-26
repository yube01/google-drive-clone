import { useEffect, useState } from "react";
import "./side.scss"
import { useRef } from "react";


const Sidebar = () => {

  const [on,setOn] = useState(false)

  let menuRef = useRef();

  useEffect(()=>{
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOn(false);
       
      }      
    };
    document.addEventListener("mousedown",handler)

    return()=>{
      document.removeEventListener("mousedown",handler)
    }
  },[])



  return (
    <div className="sidebar">
      <div className="new" onClick={()=>{setOn(!on)}} >
        <span className="material-symbols-outlined">add</span>
        <p>New</p>
        

      </div>
      
        <div className={`container ${on?'active':'inactive'}`}ref={menuRef}>
          <div className="item ">
            
            <span className="material-symbols-outlined">create_new_folder</span> New
            Folder
          </div>
          <div className="line"></div>
          <div className="item ">
            <span className="material-symbols-outlined">upload_file</span>File
            upload
          </div>
          <div className="item">
            <span className="material-symbols-outlined">drive_folder_upload</span>
            Folder upload
          </div>
        </div>
      
      <div className="options">
        <div className="icons" title="My Drive"><span className="material-symbols-rounded" >hard_drive_2</span>My Drive</div>
        <div className="icons" title="Computers"><span className="material-symbols-rounded" >devices</span>Computers</div>
        <div className="icons" title="Items shared with me"><span className="material-symbols-rounded" >group</span>Share with me</div>
        <div className="icons"title="Recent"><span className="material-symbols-rounded" >schedule</span>Recent</div>
        <div className="icons"title="Starred"><span className="material-symbols-rounded" >star</span>Starred</div>
        <div className="icons" title="Spam"><span className="material-symbols-rounded" >report</span>Spam</div>
        <div className="icons" title="Trash"><span className="material-symbols-rounded" >delete</span>Trash</div>
        <div className="icons" title="Storage"><span className="material-symbols-rounded" >cloud</span>Storage</div>
      </div>
    </div>
  );
};

export default Sidebar;
