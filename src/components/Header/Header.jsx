
import {  useState } from "react";
import { Link } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import SelectDrop from "../selectDropdown/SelectDrop";
import { FiUser } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdVideoLabel } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";


import logo from "../../assets/img/logo.svg"
import compare from "../../assets/img/icons/compare.svg"
import heart  from "../../assets/img/icons/heart.svg"
import cart  from "../../assets/img/icons/cart.svg"
import user  from "../../assets/img/icons/user.svg"

import ClickAwayListener from 'react-click-away-listener';  


import "./Header.css";  
import Navbar from "./navbar/Navbar";

const Header = () => {
   const [dropDownOpen, setDropDownOpen ] = useState(false); 
     
   // handle close
   const handleCloseDrop = () => {
    setDropDownOpen(() => !dropDownOpen)
   }

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

          
             <div className="col-sm-5 cart-wish-account">
                <div className="header-cart-wishlist "> 
                   <div className="header-action-icon-2">
                       <a href='' className="compare-box">
                           <img className=""  src={compare} />
                           <span className="pro-count blue">3</span>
                        </a>
                      <a href='' className="compare-text"><span className="lable ml-0">Compare</span></a>
                   </div>        
                 </div>

                <div className="header-cart-wishlist "> 
                   <div className="header-action-icon-2">
                       <a href='' className="compare-box">
                           <img className=""  src={heart} />
                           <span className="pro-count blue">6 </span>
                        </a>
                      <a href='' className="compare-text"><span className="lable ml-0">Wishlist </span></a>
                   </div>        
                 </div>

                <div className="header-cart-wishlist "> 
                   <div className="header-action-icon-2">
                       <a href='' className="compare-box">
                           <img className=""  src={cart} />
                           <span className="pro-count blue">2 </span>
                        </a>
                      <a href='' className="compare-text"><span className="lable ml-0">Cart</span></a>
                   </div>        
                 </div>

           <ClickAwayListener onClickAway={() => setDropDownOpen(false) }>
                <div className="header-cart-wishlist ">                      
                  <div className="header-action-icon-2">
                       <a href='' className="compare-box">
                           <img className=""  src={user} />
                           <span className=""></span>
                        </a>   
                  
               
                      <a href='#' className="compare-text"><span className="lable ml-0" onClick={handleCloseDrop}> Account </span></a>    
                      
                   </div>
                   {
                    
                    dropDownOpen && <ul className="dropdown-menu-abc shadow">
                    <li className="drop-down-hover"> <FiUser /> <button > My Account </button></li>
                    <li className="drop-down-hover"> <CiLocationOn /> <button> Order Tracking </button></li>
                    <li className="drop-down-hover"> <MdVideoLabel /> <button> My Voucher </button></li>
                    <li className="drop-down-hover"> <CiHeart /> <button> My Wishlist </button></li>
                    <li className="drop-down-hover"> <CiSettings /> <button> Setting </button></li>
                    <li className="drop-down-hover"> <LuLogOut /> <button> Sign out </button></li>
                  </ul>
                   }
                 </div>
                </ ClickAwayListener > 
             </div>

            </div>
          </div>
        </header>

        <Navbar />     
    </>      
  )
}

export default Header; 













