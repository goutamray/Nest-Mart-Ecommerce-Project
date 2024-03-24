
import { CiHeart, CiShuffle } from "react-icons/ci";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Product.css";

const Product = (props) => {
    const [productData, setProductData] = useState([]); 


  useEffect(() => {
    setProductData(props.item)
  }, [props.item])

  console.log(productData);

  return (   
          <>  

      <div className="productThumb my-2">
        {
          props.tag !== null && props.tag !== undefined &&  
           <span className={`badge ${props.tag}`}> {props.tag} </span>
        } 

    {
      productData !== undefined && 
      <> 
        <Link > 
          <div className="product-image">      
             <img style={{width: "100%"}} src={productData.catImg} alt="" />

             <div className="overlay">
                <ul className="list list-inline">
                    <li className="list-inline-item">
                      <a href="#"> <MdOutlineRemoveRedEye /> </a>
                     
                    </li>
                    <li className="list-inline-item">
                      <a href="#" > <CiHeart /> </a>
                     
                    </li>
                    <li className="list-inline-item" >
                      <a href="#" > <CiShuffle /> </a>
                     
                    </li>
                </ul>
             </div>
         </div>
         </Link>  
         
         <div className="info">     
           <h4 className="category">  {productData.brand}</h4>
           <div className="title"> <h3> {productData.productName}</h3></div>
           <div className="review">
            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
           </div>
           <div className="author">
              <p> By <a href="#"> {productData.brand} </a></p> 
           </div>
           <div className="product-card-bottom">
            <div className="product-price">
                <span> TK {productData.price} </span> <span className="old-price"> TK {productData.oldPrice} </span>
            </div>
            <div className="product-cart">
               <a href="#"> <IoCartOutline className="cart" /> Add </a>
            </div>
           </div>
         </div>
     
      </>
    }
      
      
  



      </div>
      
    </>
  )
}

export default Product






