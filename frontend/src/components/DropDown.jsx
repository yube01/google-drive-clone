import { useEffect, useRef, useState } from "react";
import "./drop.scss"
import NewFolder from "./NewFolder";



const DropDown = ({forceUpdate}) => {
  const [on, setOn] = useState(false);
   const[folder,setFolder] = useState(false)

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
    <div className="dropDowns" ref={menuRef}>
      <div className={`drive ${on?'activee':'inactivee'}`} onClick={()=>setOn(!on)}>
        My Drive <span className="material-symbols-outlined">arrow_drop_down</span>
      </div>
     
      <div className={`container ${on?'active':'inactive'}`}>
          <div className={`item`} onClick={()=>setFolder(!folder)}>
            
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
        {folder && <NewFolder setFolder={setFolder} folder={folder} forceUpdate={forceUpdate}/>}
    </div>
  );
};

export default DropDown;
