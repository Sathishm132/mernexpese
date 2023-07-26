

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom"
import Addexpense from './component/Addexpense';
import Allexpense from "./component/Allexpense";
import Editexpense from "./component/Editexpense";
import Leaderboard from "./component/Leaderboard";
import leaderboard from "./component/Leaderboard";
import Password from "./component/Signuppages/Password";
import Signin from "./component/Signuppages/signin";
import Signup from "./component/Signuppages/Signup";
import Contextprovider from "./component/Store/Contextprovider";
 
function App() {
  const router=createBrowserRouter([
    {path:"/",
    element:<Allexpense/>,
    loader:()=>{
      if(localStorage.getItem("token")){
       return true
      }
      else{
        return redirect("/signin")
      }
    }
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:"/addexpense",
      element:<Addexpense/>
    },
    {
      path:'/editexpense/:id',
      element:<Editexpense/>
    },{
      path:"/signin",
      element:<Signin/>
    },{
      path:"/leaderboard",
      element:<Leaderboard/>
    },{
      path:"/password",
      element:<Password/>
    }
  ])
  
 
  return (
    <>
     <Contextprovider>
    <RouterProvider router={router}>
   
    

     
     
      </RouterProvider>
      </Contextprovider>

    
     
    </>
  );
}

export default App;
