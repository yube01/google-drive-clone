import {  useEffect, useState } from "react"
import axios from "axios"


import { useParams } from "react-router-dom"




const File = () => {


  // const [files,setFiles] = useState(null)
  // const[gets,setGet] = useState(null)



  const {folderId} = useParams()




  const[file,setFile] = useState(null)

  const[selectImg,setSelectImage] = useState("")
  const[fileName,setFileName] = useState(null)


  const [dbFile,setDbFile] = useState([])

  
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
useEffect(()=>{

  const getFiles = async()=>{
    try {
      const response =  await axios.get("https://dull-puce-chicken-hat.cyclic.cloud/files/getfiles/"+folderId)

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

    formData.append("file",selectImg)
    formData.append("upload_preset","dsrtkzf0")
    const data = await axios.post("https://api.cloudinary.com/v1_1/dgoksuam1/image/upload",formData)
    setFile(data.data.secure_url)
   
      console.log(data)

    // await axios.post("http://localhost:9000/files/createFiles/"+url).then((response)=>{
    //   console.log("data saveed")
    // })
    if(data.request.statusText === "OK"){
     
     setTimeout(async() => {
      const response =  await axios.post("https://dull-puce-chicken-hat.cyclic.cloud/files/createFiles",{file,fileName,folderId})
      console.log(response)
     }, 10000);
    

    }
  


    } catch (error) {
      console.log(error)
      
    }




  }
 

console.log(dbFile)

  

  return (
    <div className="file">
      {/* <form onSubmit={handleSubmit}>
        <input type="file" accept="file/*" onChange={handleFile} />
        <button type="submit">Submit</button>
      </form> */}
      <input type="file" onChange={(e)=>{setSelectImage(e.target.files[0])}} />
      <button onClick={handleSub} >Upload</button>
      {
        dbFile.map((db)=>
          (<img src={db.file} height="200px"/>)
        )
      }
    
      
    </div>
   
  )
}

export default File
