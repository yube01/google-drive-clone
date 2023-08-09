import { useContext, useEffect, useState } from "react"
import DropDown from "../components/DropDown"
import "./drive.scss"
import { LoginContext } from "../context/LoginContext"
import {  useNavigate } from "react-router-dom"
import Folders from "../components/Folders"
import axios from "axios"
import { UserContext } from "../context/UserContext"

const MyDrive = () => {


  const navigate = useNavigate()

 

 

  const[folders,setFolders] = useState([])

  const [ userId,setUserId] = useContext(UserContext)
  const [logged, setLogged] = useContext(LoginContext)
  const [loading,setLoading] = useState(false)
 
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
        setLoading(true)
        const logData = JSON.parse(localStorage.getItem("user")) || null
        setUserId(logData._id)
        const response = await axios.get("http://localhost:9000/folder/getFolder/" + logData.name)
        setLoading(false)
        
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
    { loading ? "Loading folders" :
    <div className="files">

    {
      folders.map((f)=>(
        <Folders f={f} key={f._id} idF={f._id}  />
      ))

    }
    
    
  </div>
    }
    </div>
  )
}

export default MyDrive
