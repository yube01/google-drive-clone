import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import "./file.scss";

import { useNavigate, useParams } from "react-router-dom";
import { url } from "../utils/url";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const File = () => {
  // const [files,setFiles] = useState(null)
  // const[gets,setGet] = useState(null)

  const { folderId } = useParams();

  const [file, setFile] = useState(null);

  const [selectImg, setSelectImage] = useState("");
  const [fileName, setFileName] = useState(null);

  const [dbFile, setDbFile] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [err, setError] = useState("");


  const [reducerValue,forceUpdate] = useReducer(x=>x+1,0)

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
  // }match
 
  useEffect(() => {
    const getFiles = async () => {
      try {
        const response = await axios.get(url + "/files/getfiles/" + folderId);

        setDbFile(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFiles();
  }, [folderId,reducerValue]);

  const handleSub = async () => {
    setFileName(selectImg.name);
    console.log(selectImg.size)

    try {
      const formData = new FormData();
      setUploading(true);
      const load = toast.loading("Photo uploading", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      formData.append("file", selectImg);
      formData.append("upload_preset", "dsrtkzf0");
      const data = await axios.post(
        "https://api.cloudinary.com/v1_1/dgoksuam1/image/upload",
        formData
      );
      setFile(data.data.secure_url);
      

      console.log(data);

      // await axios.post("http://localhost:9000/files/createFiles/"+url).then((response)=>{
      //   console.log("data saveed")
      // })
      
      
      setTimeout(async () => {
        if (folderId) {
          const response = await axios.post(url + "/files/createFiles", {
            file: data.data.secure_url,
            fileName: selectImg.name,
            folderId,
          });
          console.log(response);
          setUploading(false);
          toast.dismiss(load)
          toast.success("Photo uploaded", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          
           forceUpdate()
        } else {
          alert("Error occur while uploading file");
        }
      }, 1000);
      
    } catch (error) {
      console.log(error.message);
      
      setError("Please upload again");
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    

    try {
      const conformation = confirm("Do you want to delete this photo??")
      if(conformation){
        const response = await axios.delete(
          `https://dull-puce-chicken-hat.cyclic.cloud/files/deleteFile/${id}`
        );
        toast.success("Photo deleted", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(response);
       setTimeout(() => {
        forceUpdate()
       }, 3000);
        
      }else{

        toast.warning("Process cancelled", {
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
    } catch (error) {
      console.log(error);
    }
  };

  // const handleFile = async()=>{
    
  //   const result = await uploadFile(selectImg, {
  //     publicKey: '81db13eaa3038936b020',
  //     store: 'auto',
  //     metadata: {
  //       subsystem: 'uploader',
  //       pet: 'cat'
  //     }
  //   })
  //   console.log(`URL: ${file.cdnUrl}`)
  // }

 

  return (
    <div className="file">
      {/* <form onSubmit={handleSubmit}>
        <input type="file" accept="file/*" onChange={handleFile} />
        <button type="submit">Submit</button>
      </form> */}
      <div className="uploader">
        <span>Upload photo</span>
        <br/>
        <input
          type="file"
          onChange={(e) => {
            setSelectImage(e.target.files[0]);
          }}
        />
        <button onClick={handleSub}>Upload</button>
        {/* <input
          type="file"
          onChange={(e) => {
            setSelectImage(e.target.files[0]);
          }}
        />
        <button onClick={handleFile}>Upload</button> */}
      </div>
      {uploading ? "Photo uploading" : ""}
      {err && err}
      <div className="images">
        {dbFile.map((db) => (
          <div className="image" key={db._id}>
            <div className="crud">
              {/* <span className="material-symbols-outlined">edit</span> */}
              <span
                className="material-symbols-outlined"
                onClick={(e) => handleDelete(e, db._id)}
              >
                delete
              </span>
              <ToastContainer/>
            </div>
            <img src={db.file}  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default File;
