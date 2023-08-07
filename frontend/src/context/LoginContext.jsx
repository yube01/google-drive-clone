import { createContext, useState } from "react";


export const LoginContext = createContext()


export const LoginProvider = (props)=>{
    const [logged, setLogged] = useState(false)
   


    return(
        <LoginContext.Provider value={[logged,setLogged]}>
            {props.children}
        </LoginContext.Provider>
    )
}