
import { createContext, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';


import axios from 'axios';

const MyContext = createContext();


import './App.css'
function App() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCartData(`http://localhost:5050/cartItems`); 
  }, []); 
  
  
  const getCartData = async(url) => {
    try {
     await axios.get(url).then((response) => {
       setCartItems(response.data)
     })
    } catch (error) {
      console.log(error.message);
    }
   };

  // add to cart 
  const addToCart = async (item) => {
    item.quantity = 1;
   
    try {
      await axios.post("http://localhost:5050/cartItems", item).then((res) => {
        if (res !== undefined) {
          setCartItems([...cartItems, { ...item, quantity: 1 }])
        }
      })
    } catch (error) {
      console.log(error.message)
    }   

  };      


  // remove cart 
  const removeItemsFromCart = (id) => {
    const arr = cartItems.filter((obj) => obj.id !== id);
    setCartItems(arr)
  }

  // empty cart 
  const emptyCart = () => {
    setCartItems([])
  }

  const value = {
     cartItems,
     addToCart,
     removeItemsFromCart,
     emptyCart,
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


