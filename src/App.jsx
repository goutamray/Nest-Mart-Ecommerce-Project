
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';



import './App.css'
// import { useEffect, useState } from 'react';
// import axios from 'axios';


function App() {

  // const [productData, setProductData] = useState([]);


  // useEffect(() => {
  //    getData(`http://localhost:5050/productData`);
  // }, []);



  // const getData = async(url) => {
  //    try {
  //        await axios.get(url).then((response) => {
  //         setProductData(response.data);
  //        })
  //    } catch (error) {
  //       console.log(error.message);
  //    }
  // }; 
   
  return (
    <>

      <RouterProvider router={router} /> 
        
    </> 
  )
}

export default App; 
