
import { IoGrid } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa"; 
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { useState } from "react";

const Navbar = () => {
  
  const [nestOpen, setNestOpen] = useState(false); 
  const [nestOpenbtn, setNestOpenbtn] = useState(false); 

  // handle click 
  const handleClickOpen = () => {
    setNestOpen(() => !nestOpen)
  }
  const handleClickOpenbtn = () => {
    setNestOpenbtn(() => !nestOpenbtn)
  }


  return (
    <>
      <div className="nav navbar-header my-custom-header shadow">
        <div className="container-fluid">
          <div className="row d-flex align-items-center my-3">
            <div className="col-sm-3 part1">
               <div className="browse-button ">
                <button> <IoGrid className="grid-box" />  Browse All Categories <FaChevronDown className="down-arrow-btn"/> </button>
               </div>
            </div>
            <div className="col-sm-7 part2">
              <div className="navbar-menu">
                 <ul className="list list-inline menu-item">
                    <li className="list-inline-item list-item-single ">
                       <Link to="/" onClick={handleClickOpen}> Home <FaChevronDown className="down-arrow-item"/> </Link>
                      {
                        nestOpen &&  <ul className="nested-list shadow">
                        <li> 
                          <a href=""> Home-1 </a>
                        </li>
                        <li> 
                          <a href=""> Home-2 </a>
                        </li>
                        <li> 
                          <a href=""> Home-3 </a>
                        </li>
                        <li> 
                          <a href=""> Home-4 </a>
                        </li>
                       </ul>
                      }
                    </li>
                    <li className="list-inline-item list-item-single">
                       <Link to="/about"> About </Link>
                    </li>
                    <li className="list-inline-item list-item-single">
                       <Link to=""> Blog </Link>
                    </li>
                    <li className="list-inline-item list-item-single">
                       <Link to="/shop"  > Shop  </Link>        
                    </li>
                    <li className="list-inline-item list-item-single">
                       <Link to=""> Vendors <FaChevronDown className="down-arrow-item"/> </Link>
                    </li>
                    <li className="list-inline-item list-item-single">
                       <Link to=""> Megamenu  </Link>
                       
                    </li>
                    <li className="list-inline-item list-item-single">
                       <Link to="" onClick={handleClickOpenbtn} > Pages  <FaChevronDown className="down-arrow-item"/> </Link>
                       {
                        nestOpenbtn &&  <ul className="nested-list shadow">
                        <li> 
                          <a href=""> Home </a>
                        </li>
                        <li> 
                          <a href=""> About </a>
                        </li>
                        <li> 
                          <a href=""> Blog </a>
                        </li>
                        <li> 
                          <a href=""> Contact </a>
                        </li>
                        <li> 
                          <a href=""> Login </a>
                        </li>
                        <li> 
                          <a href=""> Register </a>
                        </li>
                        <li> 
                          <a href=""> Privacy Policy </a>
                        </li>
                       </ul>
                       }
                    </li>
                    <li className="list-inline-item list-item-single">
                       <Link to="/contact"> Contact </Link>
                    </li>
                 
             
                 </ul>
              </div>

            </div>
            <div className="col-sm-2 part3">
                <div className="contact-section">
                   <span className="headphone"> <TfiHeadphoneAlt /> </span>
                   <div className="support">
                        <p> 1900 - 888 </p>
                        <span className="center"> 24/7 Support Center </span>
                   </div>
                 
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar; 













