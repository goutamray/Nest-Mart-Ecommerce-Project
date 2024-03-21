import Layout from "../components/Layout/Layout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Shop from "../pages/Shop/Shop";
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
        path : "/shop",
        element : <Shop /> 
      },
      {
        path : "/contact",
        element : <Contact /> 
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






