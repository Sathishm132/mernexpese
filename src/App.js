

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Addexpense from './component/Addexpense';
import Allexpense from "./component/Allexpense";
import Editexpense from "./component/Editexpense";
import Contextprovider from "./component/Store/Contextprovider";
 
function App() {
  const router=createBrowserRouter([
    {path:"/",
    element:<Allexpense/>
    },
    {
      path:'/addexpense',
      element:<Addexpense/>
    },
    {
      path:'/editexpense/:id',
      element:<Editexpense/>
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
