import "./side.scss"


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="new">
        <span class="material-symbols-outlined">add</span>
        <p>New</p>
      </div>
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
