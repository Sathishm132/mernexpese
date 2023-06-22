

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Addexpense from './component/Addexpense';
import Allexpense from "./component/Allexpense";
import Editexpense from "./component/Editexpense";
import Signin from "./component/Signuppages/signin";
import Signup from "./component/Signuppages/Signup";
import Contextprovider from "./component/Store/Contextprovider";
 
function App() {
  const router=createBrowserRouter([
    {path:"/",
    element:<Allexpense/>
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
