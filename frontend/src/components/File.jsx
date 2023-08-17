import {  useEffect, useState } from "react"
import axios from "axios"
import "./file.scss"


import { useNavigate, useParams } from "react-router-dom"
import { url } from "../utils/url"




const File = () => {


  // const [files,setFiles] = useState(null)
  // const[gets,setGet] = useState(null)



  const {folderId} = useParams()




  const[file,setFile] = useState(null)

  const[selectImg,setSelectImage] = useState("")
  const[fileName,setFileName] = useState(null)


  const [dbFile,setDbFile] = useState([])
  const [uploading,setUploading] = useState(false)
  const [err,setError] = useState("")

  
  // const handleSubmit = async(e)=>{
  //   e.preventDefault()
  //   const formData  = new FormData()

  //   formData.append("file",files)
  //   const result = await axios.post("http://localhost:9000/filesUp",formData,{
  //     headers:{
  //       "Content-Type":"multipart/form-data"
  //     }
  //   })


  // }
  // useEffect(()=>{
  //   getImage()
  // },[])

  // const handleFile = (e)=>{
   

  //   console.log(e.target.files[0])
  //   setFiles(e.target.files[0])
  // }

  // const getImage = async()=>{
  //   const result = await axios.get("http://localhost:9000/fileDown")
  //   console.log(result.data)
  //   setGet(result.data)
  // }
  const navigate = useNavigate()
useEffect(()=>{

  const getFiles = async()=>{
    try {
      
      const response =  await axios.get(url + "/files/getfiles/"+folderId)

  setDbFile(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  getFiles()
  
},[])


  const handleSub = async()=>{
    setFileName(selectImg.name)

    
    try {
      const formData  = new FormData()
      setUploading(true)
    formData.append("file",selectImg)
    formData.append("upload_preset","dsrtkzf0")
    const data = await axios.post("https://api.cloudinary.com/v1_1/dgoksuam1/image/upload",formData)
    setFile(data.data.secure_url)
   
      console.log(data)

    // await axios.post("http://localhost:9000/files/createFiles/"+url).then((response)=>{
    //   console.log("data saveed")
    // })
    if(file !== null || fileName !== null){
     
     setTimeout(async() => {
      const response =  await axios.post(url + "/files/createFiles",{file,fileName,folderId})
      console.log(response)
      setUploading(false)
      navigate("/")
     }, 5000);
    
    

    }else{
      alert("Error occur while uploadinf file")
    }
  
    

    } catch (error) {
      console.log(error)
      setError("Please upload again")
      
    }




  }

  const handleDelete = async(e,id)=>{
    e.preventDefault();
    
    try {
      const response = await axios.delete(`https://dull-puce-chicken-hat.cyclic.cloud/files/deleteFile/${id}`);
      console.log(response)
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
 



  

  return (
    <div className="file">
      {/* <form onSubmit={handleSubmit}>
        <input type="file" accept="file/*" onChange={handleFile} />
        <button type="submit">Submit</button>
      </form> */}
     <div className="uploader">
      <span>Upload photo</span>
     <input type="file" onChange={(e)=>{setSelectImage(e.target.files[0])}}/>
      <button onClick={handleSub} >Upload</button>
     </div>
     {uploading ? "Photo uploading" : ""}
     {err && err}
     <div className="images">
     {
        dbFile.map((db)=>
        
          (<div className="image" key={db._id}>
            <div className="crud">
              {/* <span className="material-symbols-outlined">edit</span> */}
              <span className="material-symbols-outlined" onClick={(e)=>handleDelete(e,db._id)}>delete</span>
            </div>
            <img src={db.file} height="200px" width="200px"/>
            
            </div>)
        )
      }
     </div>
    
      
    </div>
   
  )
}

export default File
