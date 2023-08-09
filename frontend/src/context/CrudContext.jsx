import { createContext, useState } from "react";


export const CrudContext = createContext()


export const CrudProvider = (props)=>{
    const [crudOn, setCrudOn] = useState(false)
   


    return(
        <CrudContext.Provider value={[crudOn,setCrudOn]}>
            {props.children}
        </CrudContext.Provider>
    )
}