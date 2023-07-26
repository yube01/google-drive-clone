import { useState } from "react";
import "./drop.scss"



const DropDown = () => {
  const [on, setOn] = useState(false);

  const clickOption = () => {
    setOn(!on);
  };

  return (
    <div className="dropDowns">
      <div className="drive" onClick={clickOption}>
        My Drive <span class="material-symbols-outlined">arrow_drop_down</span>
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
    </div>
  );
};

export default DropDown;
