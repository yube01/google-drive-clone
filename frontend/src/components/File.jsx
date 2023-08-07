import {  useState } from "react"
import axios from "axios"



const File = () => {

  // const [files,setFiles] = useState(null)
  // const[gets,setGet] = useState(null)
  const[file,setFile] = useState(null)

  const[selectImg,setSelectImage] = useState("")
  const[fileName,setFileName] = useState(null)

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
      const response =  await axios.post("http://localhost:9000/files/createFiles",{file,fileName})
      console.log(response)
     }, 5000);
    

    }
  


    } catch (error) {
      console.log(error)
      
    }

    



  }
 


  

  return (
    <div className="file">
      {/* <form onSubmit={handleSubmit}>
        <input type="file" accept="file/*" onChange={handleFile} />
        <button type="submit">Submit</button>
      </form> */}
      <input type="file" onChange={(e)=>{setSelectImage(e.target.files[0])}} />
      <button onClick={handleSub} >Upload</button>
    
      
    </div>
   
  )
}

export default File
