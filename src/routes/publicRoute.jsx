import Layout from "../components/Layout/Layout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Shop from "../pages/Shop/Shop";
import SingleProduct from "../pages/SinglePage/SingleProduct";
import Contact from "../pages/contact/Contact";





// create public router 
const publicRouter = [
  {
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <Home /> 
      },
      {
        path : "/about",
        element : <About /> 
      },
      {
        path : "/contact",
        element : <Contact /> 
      },
      {
        path : "/product/:id",
        element : <SingleProduct />    
      },
      {
        path : "/cat/:id",
        element : <Shop single = { true } />,
         
      },
      {
        path : "/cat/:id/:id",
        element : <Shop  single = { false }/>,      
        
      },
      {
        path : "*",
        element : <NotFound />  
      },
    ] 
  }
]




// export default router 
export default publicRouter;






