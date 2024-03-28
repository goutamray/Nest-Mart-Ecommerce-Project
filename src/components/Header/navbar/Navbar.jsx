
import { IoGrid } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa"; 
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import sreen from "../../../assets/img/thumbnail/screen.png"

import "./Navbar.css"   

const Navbar = () => {
  const [productData, setProductData ] = useState([]);

  useEffect(() => {
     getData(`http://localhost:5050/productData`);
  }, []);



  const getData = async(url) => {
    try {
       await axios.get(url).then((response) => {
        setProductData(response.data);

       })
    } catch (error) {
      console.log(error.message);
    }
  };


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
          <div className="row d-flex align-items-center my-3 navbar-row ">
            <div className="col-sm-3 part1">
               <div className="browse-button ">
                <button> <IoGrid className="grid-box" />  Browse All Categories <FaChevronDown className="down-arrow-btn"/> </button>
               </div>
            </div>
            <div className="col-sm-7 part2 ">
              <div className="navbar-menu">
                 <ul className="list list-inline menu-item">
                    <li className="list-inline-item list-item-single ">
                       <Link to="/" onClick={handleClickOpen}> Home <FaChevronDown className="down-arrow-item"/> </Link>  
                      
                        <ul className="dropDown-menu shadow">
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
                      
                    </li>
                
                    {
                   productData.length > 0 ? productData.map((item, index) => {
                         return (<li className="list-inline-item list-item-single" key={index}>
                         <Link to={`/cat/${item.cat_name.toLowerCase()}`} > {item.cat_name} </Link>
                         {
                            item.items?.length !== 0 &&  
                            <ul className="dropDown-menu shadow">
                                  {
                                    item.items?.map((item_, index_) => {
                                      return <li key={index_}> 
                                              <Link to={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g,"-").toLowerCase()}`}> {item_.cat_name} </Link>
                                            </li>
                                 
                                    })
                                  }
                          
                           </ul>
                         }
                      </li>)

                   }) : ""
                    }

                    <li className="list-inline-item list-item-single mega-menu-li ">
                       <Link to=""> Megamenu <FaChevronDown className="down-arrow-item"/></Link>  
                       <ul className="dropDown-menu mega-menu shadow">
                          <div className="row">

                          {
                         productData.length > 0 ? productData.map((item, index) => {
                             return <div className="col-md-3" key={index}>
                             <div className="mega-menu-drop-down-list">
                                  <h3 > <Link to={`/cat/${item.cat_name}`}> {item.cat_name} </Link> </h3>

                                   {
                                  item.items?.length !== 0 &&  
                                  <ul >
                                     {
                                        item.items?.map((item_, index_) => {
                                          return <li key={index_}> 
                                                <Link to={`/cat/${item.cat_name}/${item_.cat_name.replace(/\s/g,"-").toLowerCase()}`}> {item_.cat_name} </Link>
                                            </li>
                                 
                                         })
                                       }
                          
                                  </ul>
                                  }
                                </div>
                              </div>
                                          
                          }) : ""
                            }
                              
                              <div className="col-md-3">
                                 <div className="mega-menu-drop-down-list">
                                      <img src={sreen} alt=""  />
                                 </div>
                              </div>
                              
                          </div>
                       </ul>
                    </li>
                   
                    <li className="list-inline-item list-item-single">
                       <Link to="" onClick={handleClickOpenbtn} > Pages  <FaChevronDown className="down-arrow-item"/> </Link>
                       <ul className="dropDown-menu shadow">
                        <li> 
                          <Link to="/"> Home </Link>
                        </li>
                        <li> 
                          <Link href="/about"> About </Link>
                        </li>
                        <li> 
                          <Link href="/blog"> Blog </Link>
                        </li>
                        <li> 
                          <Link href="/contact"> Contact </Link>
                        </li>
                        <li> 
                          <Link href="/login"> Login </Link>
                        </li>
                        <li> 
                          <Link href="/register"> Register </Link>
                        </li>
                        <li> 
                          <Link href="/privacy-police"> Privacy Policy </Link>
                        </li>
                       </ul>
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











