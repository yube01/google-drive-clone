import DropDown from "../components/DropDown"
import "./drive.scss"
const MyDrive = () => {
  return (
    <div className="myDrive">
    <div className="drive">
      <DropDown/>
    </div>
    <div className="dropDown">
      <p>Type  <span className="material-symbols-outlined">arrow_drop_down</span></p>
      <p>People  <span className="material-symbols-outlined">arrow_drop_down</span></p>
      <p>Modified  <span className="material-symbols-outlined">arrow_drop_down</span></p>
    </div>
    <div className="files">
      Files
    </div>
    </div>
  )
}

export default MyDrive
