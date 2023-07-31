import { useState } from "react"
import "./side.scss"
import axios from "axios"

const NewFolder = ({setFolder,folder}) => {
    const [fname,setFname] = useState("")

   const handleSubmit = async(e)=>{
    e.preventDefault()

    try {
        const res = await axios.post("http://localhost:9000/folder/createFolder",{
            fname
        })
        console.log(res)
        
    } catch (error) {
        console.log(error)
        
    }
   }

  return (
    <div className="newFolder">
        <div className="container">
           <p>New Folder</p>
            <input type="text" placeholder="Folder name" value={fname} onChange={(e)=>setFname(e.target.value)}/>
            <div className="btn">
                <button onClick={()=>setFolder(!folder)}>Cancel</button>
                <button onClick={handleSubmit}>Create</button>
            </div>
        </div>
      
    </div>
  )
}

export default NewFolder
