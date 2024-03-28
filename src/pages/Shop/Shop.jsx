
import { FaSortAmountDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import Product from "../../components/product/Product";
import SideBar from "../../components/sideBer/SideBar";


import { useEffect, useState } from "react";

import axios from "axios";
import "./Shop.css";
const Shop = ( props  ) => {

  const [dropDownOpen, setDropDownOpen ] = useState(false); 
  const [dropDownOpen2, setDropDownOpen2 ] = useState(false); 

  const [allProduct, SetAllProduct] = useState([])
  const [data, setData] = useState([]);

  // get all data
  useEffect(() => {
    getData(`http://localhost:5050/productData`);
 }, []);

 const getData = async(url) => {
   try {
      await axios.get(url).then((response) => {
        SetAllProduct(response.data);
      })
   } catch (error) {
     console.log(error.message);
   }
 };

 let id = useParams();   
 let singleId = id.id; 


 let itemDataArr = []; 

useEffect(() => {
  
     allProduct.length !== 0 && 
       allProduct.map((item, index)=> {
          //page == single cat
             if (props.single === true){
                if  (item.cat_name.toLowerCase() == singleId.toLowerCase()) {
                     item.items.length !== 0 && 
                       item.items.map((item_, index_) => {
                          item_.products.length !== 0
                            item_.products.map((product) => {
                                itemDataArr.push(product)
                            })
                       })
                } 
             }

           //page == double cat 
         else{
          item.items.length !== 0 &&  
           item.items.map((item_) => {
              if(item_.cat_name.split(" ").join("-").toLowerCase() == singleId.toLowerCase()) {
                item_.products.length !== 0 
                item_.products.map((product) => {
                  itemDataArr.push(product)
                })
              }

            })  
           }   
       })

  const list = itemDataArr.filter((item, index) => itemDataArr.indexOf(item) === index);
  
   setData(list);
   

 
}, [ allProduct, itemDataArr ]); 


// console.log(ItemsData);

     // handle close
     const handleCloseDrop = () => {
      setDropDownOpen(() => !dropDownOpen)
     }
  
     // handle close
     const handleCloseDrop2 = () => {
      setDropDownOpen2(() => !dropDownOpen2)
     }
  

  return (
    <>
    {/* breadcrumb section */}
      <div className="listingProduct my-4">
         <div className="container-fluid">
             <div className="row">
                <div className="breadCrumb">
                   <h2> Snack </h2>
                   <ul className="list list-inline">
                    <li className="list-inline-item">
                      <Link to=""> Home </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to=""> Shop </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to=""> Snack </Link>
                    </li>
                   </ul>
                </div>
             </div>
         </div>
      </div>


      {/* listing data  */}
        <div className="productListingData">
          <div className="container-fluid">
            <div className="row">
               <div className="col-lg-9 col-md-3  left-sidebar">
                   <SideBar /> 
               </div>

               <div className="col-lg-9 col-md-9 right-sidebar popular-products ">
               <div className="top-strip d-flex align-items-center justify-content-between">
                  <p> We found <span style={{color: "#3BB77E"}}> {data.length} </span> items for you! </p>
                  <div className="ml-auto  d-flex align-items-center ">
                      <div className="tab-item">
                        <button className="show-btn" onClick={handleCloseDrop }> <IoGrid /> show : 50 <FaAngleDown /> </button>
                        {
                          dropDownOpen && <ul className="dropdown-menu-abc shadow ">
                          <li className="drop-down-hover" > <button onClick={() => setDropDownOpen(false)}> 50 </button></li>
                          <li className="drop-down-hover" > <button onClick={() => setDropDownOpen(false)}> 100 </button></li>
                          <li className="drop-down-hover"> <button onClick={() => setDropDownOpen(false)}> 150 </button></li>
                          <li className="drop-down-hover"> <button onClick={() => setDropDownOpen(false)}> 200 </button></li>
                          <li className="drop-down-hover"> <button onClick={() => setDropDownOpen(false)}> All </button></li>
                          </ul>
                        }
                        
                      </div>
                      <div className="tab-item">
                        <button className="show-btn ms-3" onClick={ handleCloseDrop2 }> <FaSortAmountDown />  Sort by: Featured <FaAngleDown /> </button>
                         {
                          dropDownOpen2 && <ul className="dropdown-menu-abc shadow ">
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Featured </button></li>
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Price: Low to High </button></li>
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Price: High to Low </button></li>
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Release Date </button></li>
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Avg. Rating </button></li>
                          </ul>
                         }
                      </div>
                  </div>
               </div>   

                   <div className="row product-row ms-3 ">

                   {
                    data.length !== 0 && 
                    data.map((item, index) => {
                       return (
                         <div className="item width-big" key={index}>
                          <Product tag={item.type} item={item}  /> 
                      </div>
                       )
                    })
                   }

                    
                   </div>
               </div>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Shop
