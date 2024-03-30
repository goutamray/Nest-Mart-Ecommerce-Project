

import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = () => {
  return (
    <>
        {/* breadcrumb */}
        <div className="breadCrumbWrapper2 ">
           <div className="container-fluid">
              <div className="bradcrumb2 ">
               <nav aria-label="breadcrumb">
                 <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li><Link to=""> </Link> </li>

                       <li><Link to=""> </Link> </li>

                     
                 </ul>
                </nav>
             </div>
          </div>
        </div>
    </> 
  )
}

export default Cart;        























