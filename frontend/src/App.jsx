import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LeftSide from "./components/LeftSide";
import MyDrive from "./page/MyDrive";
import Computers from "./page/Computers";
import Login from "./page/Login";
import Signup from "./page/Signup";
import "./App.css";
import { LoginProvider } from "./context/LoginContext";
import File from "./components/File";
import { UserProvider } from "./context/UserContext";
import { CrudProvider } from "./context/CrudContext";
import { useState } from "react";

function App() {
  // const [name,setName] = useState("")
  // const logData = JSON.parse(localStorage.getItem("user")) || null
  // if(logData !== null){
  //   const firstLetter  = (logData.name).charAt(0).toUpperCase()
  //   setName(firstLetter)
   
    
  // }else{
  //   console.log("not found")
    

  // }
  const Layout = () => {
    return (
      <div className="app">
        <Header/>
        <div className="main">
          <div className="left">
            <Sidebar />
          </div>
          <div className="middle">
            {" "}
            <Outlet />
          </div>
          <div className="right">
            <LeftSide />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MyDrive />,
        },
        {
          path: "/computers",
          element: <Computers />,
        },
        {
          path: "/file/:folderId",
          element: <File />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <>
      <UserProvider>
        <LoginProvider>
          <CrudProvider>
            <RouterProvider router={router} />
          </CrudProvider>
        </LoginProvider>
      </UserProvider>
    </>
  );
}

export default App;
