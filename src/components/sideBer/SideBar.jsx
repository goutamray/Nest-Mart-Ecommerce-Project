
import cat1 from "../../assets/img/icons/category-1.svg"
import cat2 from "../../assets/img/icons/category-2.svg"
import cat3 from "../../assets/img/icons/category-3.svg"
import cat4 from "../../assets/img/icons/category-4.svg"
import cat5 from "../../assets/img/icons/category-5.svg"

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

      {/* New products*/}
        <div className="card-box">
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

        </div>


      </div>
    </>
  )
}

export default SideBar














