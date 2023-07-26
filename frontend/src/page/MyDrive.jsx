import DropDown from "../components/DropDown"
import "./drive.scss"
const MyDrive = () => {
  return (
    <div className="myDrive">
    <div className="drive">
      <DropDown/>
    </div>
    <div className="dropDown">
      <p>type</p>
      <p>People</p>
      <p>modified</p>
    </div>
    <div className="files">
      Files
    </div>
    </div>
  )
}

export default MyDrive
