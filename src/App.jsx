
import { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';


import axios from 'axios';

const MyContext = createContext();


import './App.css'
function App() {

  const [cartItems, setCartItems] = useState([]);



  const addToCart = async (item) => {
    item.quantity = 1;
   
    try {
      await axios.post("http://localhost:5050/cartItems", item).then((res) => {
        if (res !== undefined) {
          setCartItems([...cartItems, { ...item, quantity: 1 }])
        }
      })
    } catch (error) {
      console.log(error)
    }   

  }; 



  const value = {
     addToCart,
     cartItems,
    //  removeItemsFromCart,
    //   emptyCart,
  }
   
  return (
    <>
     <MyContext.Provider value={value}> 
          <RouterProvider router={router} /> 
      </MyContext.Provider>
    </> 
  )
}

export default App; 

export { MyContext }; 


