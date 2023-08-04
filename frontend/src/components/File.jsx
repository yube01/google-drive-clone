import { useEffect, useState } from "react"
import axios from "axios"
import Files from "./Files"

const File = () => {

  const [files,setFiles] = useState(null)
  const[gets,setGet] = useState(null)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const formData  = new FormData()

    formData.append("file",files)
    const result = await axios.post("http://localhost:9000/filesUp",formData,{
      headers:{
        "Content-Type":"multipart/form-data"
      }
    })


  }
  useEffect(()=>{
    getImage()
  },[])

  const handleFile = (e)=>{
   

    console.log(e.target.files[0])
    setFiles(e.target.files[0])
  }

  const getImage = async()=>{
    const result = await axios.get("http://localhost:9000/fileDown")
    console.log(result.data)
    setGet(result.data)
  }

  

  return (
    <div className="file">
      <form onSubmit={handleSubmit}>
        <input type="file" accept="file/*" onChange={handleFile} />
        <button type="submit">Submit</button>
      </form>
      {gets == null
        ? ""
        : gets.map((data) => {
            return (
              <Files data={data} key={data._id}/>
            );
          })}
    </div>
  )
}

export default File
