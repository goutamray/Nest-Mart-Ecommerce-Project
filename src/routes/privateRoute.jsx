import Layout from "../components/Layout/Layout";
import Shop from "../pages/Shop/Shop";




// create public router 
const privateRouter = [
    {
      element : <Layout />,
      children : [
           {
            path : "/shop-abcd",
            element : <Shop />
           }
      ] 
    }
]




// export default router 
export default privateRouter;


















