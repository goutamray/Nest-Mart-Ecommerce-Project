
import {  useState } from "react";
import { Link } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import SelectDrop from "../selectDropdown/SelectDrop";


import logo from "../../assets/img/logo.svg"
import compare from "../../assets/img/icons/compare.svg"
import heart  from "../../assets/img/icons/heart.svg"
import cart  from "../../assets/img/icons/cart.svg"
import user  from "../../assets/img/icons/user.svg"



import "./Header.css"; 

const Header = () => {
   const [categories, setCategories ] = useState([ 
          "All Categories",
          "Milks and Ice cream",
          "Noodles & Rice",
          "Fresh Seafood",
          "Vegetables",
          "Baking material",
          "Fast food",
          "Pet Foods & Toy",
          "Clothing & Beauty",
          "Wines & Alcohol",
          "Milks and Dairies",
        
   ]); 



  return (
    <>
       <header className="header-middle">
          <div className="container-fluid">
            <div className="row">

              <div className="col-sm-2">
                 <div className="logo">
                   <Link to="/"> <img src={logo} alt="" /> </Link>
                 </div>
              </div>

            {/* header search start  */}
              <div className="col-sm-5 middle-bar ">
                 <div className="header-search d-flex align-items-center"> 
                      <SelectDrop data ={categories}/>
                     <div className="search">
                       <input type="text" placeholder="Search for items..."/> <IoIosSearch className="search-icon"/>
                     </div>
                 </div>
              </div>
            {/* header search end   */}

             <div className="col-sm-5 cart-wish">
              <div className="header-cart-wishlist "> 

                 <div className="compare-log">
                    <span className="compare-icon"> 
                            <img src={compare} alt="" />
                             <span className="badge"> 3 </span>         
                     </span>
                     <p>  Compare  </p>
                 </div>

                 <div className="compare-log">
                    <span className="compare-icon"> 
                            <img src={heart} alt="" />
                             <span className="badge"> 6 </span>         
                     </span>
                     <p> Wishlist  </p>
                 </div>

                 <div className="compare-log">
                    <span className="compare-icon"> 
                            <img src={cart} alt="" />
                             <span className="badge"> 2 </span>         
                     </span>
                     <p>  Cart  </p>
                 </div>

                 <div className="compare-log">
                    <span className="compare-icon"> 
                            <img src={user} alt="" />                             
                     </span>
                     <p>  Account </p>
                 </div>
                   
                 </div>
             </div>

            </div>
          </div>
        </header>    
    </>      
  )
}

export default Header; 

















