
import { Link } from "react-router-dom";
import "./Shop.css";
import SideBar from "../../components/sideBer/SideBar";

const Shop = () => {
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

               <div className="col-md-3 left-sidebar">
                   <SideBar /> 
               </div>

               <div className="col-md-9 right-sidebar">

               </div>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Shop
