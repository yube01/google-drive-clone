import { useState } from "react"


const File = () => {

  const [files,setFiles] = useState(null)

  const handleDragOver = (e)=>{
    e.preventDefault()

  }
  const handleDrop =(e)=>{
    e.preventDefault()
    console.log(e)

  }

  return (
    <div className="file"
    onDragOver={handleDragOver}
    onDrag={handleDrop} style={{height:"50rem",border:"1px solid black",width:"50rem"}}
    >
      <div className="h1">
        drag and drop
      </div>
      <input type="submit" />
    </div>
  )
}

export default File
