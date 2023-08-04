import { useState } from "react"
import "./side.scss"
import axios from "axios"
import { useNavigate } from "react-router-dom"

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
            const res = await axios.post("http://localhost:9000/folder/createFolder",{
                folderName,
                owner
            })
            setFolder(!folder)
            navigate("/login")
            
        } catch (error) {
            console.log(error.response.data)
            
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
        </div>
      
    </div>
  )
}

export default NewFolder
