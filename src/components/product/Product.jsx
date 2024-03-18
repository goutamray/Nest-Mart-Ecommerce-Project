import { FaStar } from "react-icons/fa"; 
import { FaStarHalfAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";


import "./Product.css"
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="productThumb my-2">
        <Link > 
          <div className="product-image">      
             <img style={{width: "100%"}} src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-10-2.jpg" alt="" />
         </div>
         </Link>
         
         <div className="info">
           <h4 className="category"> Snack</h4>
           <div className="title"> <h3> Seeds of Change Organic Quinoa, Brown, & Red Rice</h3></div>
           <div className="review">
            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
           </div>
           <div className="author">
              <p> By <a href="#"> NestFood </a></p>
           </div>
           <div className="product-card-bottom">
            <div className="product-price">
                <span> $54.85 </span> <span className="old-price"> $55.8 </span>
            </div>
            <div className="product-cart">
               <a href="#"> <IoCartOutline className="cart" /> Add </a>
            </div>
           </div>
         </div>
      </div>
      
    </>
  )
}

export default Product






