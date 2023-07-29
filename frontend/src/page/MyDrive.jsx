import { useContext, useEffect } from "react"
import DropDown from "../components/DropDown"
import "./drive.scss"
import { LoginContext } from "../context/LoginContext"
import { useNavigate } from "react-router-dom"
const MyDrive = () => {


  const navigate = useNavigate()

 




  const [logged, setLogged] = useContext(LoginContext)
 
  useEffect(()=>{


    
    if(logged === false){
      navigate("/login")
    }
    
  },[navigate,logged,setLogged])

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
