import drive from "../assets/drive.png";
import "./head.scss"


const Header = () => {
  return (
    <div className="header">
      <div className="left">
      <div className="logo"  title="Drive">
        <img src={drive} alt=""/>
        <p>Drive</p>
      </div>
      <div className="search">
       
        <span class="material-symbols-outlined" title="Search">search</span>
        <input type="text" placeholder="Search in Drive" />
        <span class="material-symbols-outlined" title="Advanced Search">tune</span>
      </div>
      </div>
      <div className="rights">
        <span class="material-symbols-rounded">help</span>
        <span class="material-symbols-rounded">settings</span>
        <span class="material-symbols-rounded">
apps
</span>
<span className="user">Y</span>
      </div>
    </div>
  );
};

export default Header;
