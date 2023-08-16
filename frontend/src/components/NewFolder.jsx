import { useState } from "react"
import "./side.scss"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewFolder = ({setFolder,folder}) => {
    const [folderName,setFolderName] = useState("")


 
        const logData = JSON.parse(localStorage.getItem("user")) || null
        
        const owner = logData.name

    const navigate = useNavigate()
   

   const handleSubmit = async(e)=>{
    e.preventDefault()

    if(folderName.length === 0){
        alert("Please enter folder name")
    }else{
        try {
            const res = await axios.post("https://dull-puce-chicken-hat.cyclic.cloud/folder/createFolder",{
                folderName,
                owner
            })
            setFolder(!folder)
            navigate("/login")
            toast("Folder Created", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            
        } catch (error) {
            toast("Error", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            
        }
    }
   }

  return (
    <div className="newFolder">
        <div className="container">
           <p>New Folder</p>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Folder name" value={folderName} onChange={(e)=>setFolderName(e.target.value)}/>
            <div className="btn">
                <button onClick={()=>setFolder(!folder)}>Cancel</button>
                <input type="submit" value="Create" />
            </div>
            </form>
            <ToastContainer/>
        </div>
      
    </div>
  )
}

export default NewFolder
