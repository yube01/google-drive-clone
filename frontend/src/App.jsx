import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LeftSide from "./components/LeftSide";
import MyDrive from "./page/MyDrive";
import Computers from "./page/Computers";
import Login from "./page/Login"
import Signup from "./page/Signup"

function App() {


  const Layout = () => {
    return (
      <div className="app">

        <Header/>
        <Sidebar/>
        <Outlet />
        <LeftSide/>

       
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
       
        
      ],
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup />,
    }
  ]);
  

  return (
    <>

<RouterProvider router={router} />
     
    </>
  )
}

export default App
