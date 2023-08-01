import { useState } from "react"
import "./side.scss"
import axios from "axios"

const NewFolder = ({setFolder,folder}) => {
    const [folderName,setFolderName] = useState("")


 
        const logData = JSON.parse(localStorage.getItem("user")) || null
        
        const owner = logData.name
   

   const handleSubmit = async(e)=>{
    e.preventDefault()

    try {
        const res = await axios.post("http://localhost:9000/folder/createFolder",{
            folderName,
            owner
        })
        console.log(res.data)
        
    } catch (error) {
        console.log(error.response.data)
        
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
