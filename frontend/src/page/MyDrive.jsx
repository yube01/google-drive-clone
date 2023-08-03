import { useContext, useEffect, useState } from "react"
import DropDown from "../components/DropDown"
import "./drive.scss"
import { LoginContext } from "../context/LoginContext"
import { json, useNavigate } from "react-router-dom"
import Folders from "../components/Folders"
import axios from "axios"
const MyDrive = () => {


  const navigate = useNavigate()

 


  const[folders,setFolders] = useState([])


  const [logged, setLogged] = useContext(LoginContext)
 
  useEffect(()=>{


    
    if(logged === false){
      navigate("/login")
    }
    
  },[navigate,logged,setLogged])
  useEffect(()=>{


  },[])


  useEffect(()=>{

    const getFolder = async()=>{
      try {
        const logData = JSON.parse(localStorage.getItem("user")) || null
        
        const response = await axios.get("http://localhost:9000/folder/getFolder/" + logData.name)
        
      setFolders(response.data)
        
    } catch (error) {
        console.log(error)
        
    }

    }
    getFolder()
   
    

},[])




  return (
    <div className="myDrive">
    <div className="drive">
      <DropDown name={"My Drive"}/>
    </div>
    <div className="dropDown">
      <p>Type  <span className="material-symbols-outlined">arrow_drop_down</span></p>
      <p>People  <span className="material-symbols-outlined">arrow_drop_down</span></p>
      <p>Modified  <span className="material-symbols-outlined">arrow_drop_down</span></p>
    </div>
    <div className="files">

      {
        folders.map((f)=>(
          <Folders f={f} key={f._id}/>
        ))

      }
      
      
    </div>
    </div>
  )
}

export default MyDrive
