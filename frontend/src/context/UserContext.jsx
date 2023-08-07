import { createContext, useState } from "react";


export const UserContext = createContext()


export const UserProvider = (props)=>{
    
    const [userId,setUserId] = useState("")
    const [folderId,setFolderId] = useState("")


    return(
        <UserContext.Provider value={[userId,setUserId,folderId,setFolderId]}>
            {props.children}
        </UserContext.Provider>
    )
}