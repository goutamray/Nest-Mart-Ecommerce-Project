import Layout from "../components/Layout/Layout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
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
        element : <About /> 
      },
      {
        path : "/contact",
        element : <Contact /> 
      }
    ] 
  }
]




// export default router 
export default publicRouter;






