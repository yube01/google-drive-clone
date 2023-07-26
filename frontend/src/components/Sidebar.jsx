import { useState } from "react";
import "./side.scss"


const Sidebar = () => {

  const [on,setOn] = useState(false)

  const newSubmit = ()=>{
    setOn(!on)
   
  }



  return (
    <div className="sidebar">
      <div className="new" onClick={newSubmit}>
        <span class="material-symbols-outlined">add</span>
        <p>New</p>
        

      </div>
      {on && (
        <div className="container">
          <div className="item ">
            
            <span class="material-symbols-outlined">create_new_folder</span> New
            Folder
          </div>
          <div className="line"></div>
          <div className="item ">
            <span class="material-symbols-outlined">upload_file</span>File
            upload
          </div>
          <div className="item">
            <span class="material-symbols-outlined">drive_folder_upload</span>
            Folder upload
          </div>
        </div>
      )}
      <div className="options">
        <div className="icons" title="My Drive"><span class="material-symbols-rounded" >hard_drive_2</span>My Drive</div>
        <div className="icons" title="Computers"><span class="material-symbols-rounded" >devices</span>Computers</div>
        <div className="icons" title="Items shared with me"><span class="material-symbols-rounded" >group</span>Share with me</div>
        <div className="icons"title="Recent"><span class="material-symbols-rounded" >schedule</span>Recent</div>
        <div className="icons"title="Starred"><span class="material-symbols-rounded" >star</span>Starred</div>
        <div className="icons" title="Spam"><span class="material-symbols-rounded" >report</span>Spam</div>
        <div className="icons" title="Trash"><span class="material-symbols-rounded" >delete</span>Trash</div>
        <div className="icons" title="Storage"><span class="material-symbols-rounded" >cloud</span>Storage</div>
      </div>
    </div>
  );
};

export default Sidebar;
