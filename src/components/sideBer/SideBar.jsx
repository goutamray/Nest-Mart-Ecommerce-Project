
import cat1 from "../../assets/img/icons/category-1.svg"
import cat2 from "../../assets/img/icons/category-2.svg"
import cat3 from "../../assets/img/icons/category-3.svg"
import cat4 from "../../assets/img/icons/category-4.svg"
import cat5 from "../../assets/img/icons/category-5.svg"
import banner11 from "../../assets/img/banner/banner-11.png"

import { MdFilterListAlt } from "react-icons/md";

import Filter from "./Filter/Filter"


import "./SideBar.css";
const SideBar = () => {
  return (
    <>
    <div className="sidebar-left">
        <div className="card-box">
           <h2> Category </h2>

           <div className="catList">
             <div className="catItem">
                 <div className="text">
                    <a href=""> <img src={cat1} alt="" /> Milks & Dairies  </a> 
                    <p className="count"> 27 </p>
                 </div>
             </div>
             <div className="catItem">
                 <div className="text">
                    <a href=""> <img src={cat2} alt="" /> Clothing  </a> 
                    <p className="count"> 2 </p>
                 </div>
             </div>
             <div className="catItem">
                 <div className="text">
                    <a href=""> <img src={cat3} alt="" /> Pet Foods  </a> 
                    <p className="count"> 7 </p>
                 </div>
             </div>
             <div className="catItem">
                 <div className="text">
                    <a href=""> <img src={cat4} alt="" /> Baking material  </a> 
                    <p className="count"> 20 </p>
                 </div>
             </div>
             <div className="catItem">
                 <div className="text">
                    <a href=""> <img src={cat5} alt="" /> Fresh Fruit  </a> 
                    <p className="count"> 9 </p>
                 </div>
             </div>
           </div>
        </div>

      {/* Fill by price */}
        <div className="card-box">
           <h2> Fill by price </h2>
              <Filter /> 
       
          <div className="customer-checkbox">
             <h6> Color </h6>
             <ul>
               <li>
                  <input type="checkbox" id="red"/>
                  <label htmlFor="red"> <span className="color-count"> Red (56)</span></label>
               </li>
               <li>
                  <input type="checkbox" id="green"/>
                  <label htmlFor="green"> <span className="color-count"> Green (78) </span></label>
               </li>
               <li>
                  <input type="checkbox" id="blue"/>
                  <label htmlFor="blue"> <span className="color-count"> Blue (54)</span></label>
               </li>
               <li>
                  <input type="checkbox" id="yellow" />
                  <label htmlFor="yellow"> <span className="color-count"> Yellow (56) </span></label>
               </li>
               <li>
                  <input type="checkbox" id="orange"/>
                  <label htmlFor="orange"> <span className="color-count"> Orange (56)</span></label>
               </li>
             </ul>

             <h6 className="mt-3"> Item Condition </h6>
             <ul>
               <li>
                  <input type="checkbox" id="new"/>
                  <label htmlFor="new"> <span className="color-count">New (1506)</span></label>
               </li>
               <li>
                  <input type="checkbox" id="refur"/>
                  <label htmlFor="refur"> <span className="color-count"> Refurbished (27) </span></label>
               </li>
               <li>
                  <input type="checkbox" id="used"/>
                  <label htmlFor="used"> <span className="color-count"> Used (45)</span></label>
               </li> 
             </ul>
          </div>
           <a href="" className="btn-default-filter"> <MdFilterListAlt className="filter" /> Filter </a>
        
        </div>
 
      {/* New products*/}
        {/* <div className="card-box">
           <h2> New products </h2>
           <div className="catList">
             <div className="catItem">
                 <div className="text">
                    <a href=""> <img src={cat1} alt="" /> Milks & Dairies  </a> 
                    <p className="count"> 27 </p>
                 </div>
             </div>
             <div className="catItem">
                 <div className="text">
                    <a href=""> <img src={cat2} alt="" /> Clothing  </a> 
                    <p className="count"> 2 </p>
                 </div>
             </div>
             <div className="catItem">
                 <div className="text">
                    <a href=""> <img src={cat3} alt="" /> Pet Foods  </a> 
                    <p className="count"> 7 </p>
                 </div>
             </div>
             <div className="catItem">
                 <div className="text">
                    <a href=""> <img src={cat4} alt="" /> Baking material  </a> 
                    <p className="count"> 20 </p>
                 </div>
             </div>
             <div className="catItem">
                 <div className="text">
                    <a href=""> <img src={cat5} alt="" /> Fresh Fruit  </a> 
                    <p className="count"> 9 </p>
                 </div>
             </div>
           </div>

        </div> */}

      {/* New products*/}
        <div className="card-box-img">
             <img src={banner11} alt="" />
        </div>


      </div>
    </>
  )
}

export default SideBar














