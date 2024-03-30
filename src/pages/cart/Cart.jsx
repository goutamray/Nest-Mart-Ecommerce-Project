
import { RiDeleteBin6Fill } from "react-icons/ri"; 
import { Link } from "react-router-dom";

import { PiSignOutBold } from "react-icons/pi";

import StarRating from "../../components/star-rate/StarRating";
import Counter from "../../components/counter/Counter";


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
                    <li className="breadcrumb-item" ><Link to="/shop"> Shop </Link> </li>
                     <li className="breadcrumb-item"><Link to=""> Cart </Link> </li>          
                 </ul>
                </nav>
             </div>
          </div>
        </div>


        {/* Cart section  */}

   <div className="cart-section py-2">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
           <div className="cart-header py-4">
               <div className="cart-left">
                 <h2 className="heading"> Your Cart </h2>
                 <div className="cart-clear">
                  <div className="left">
                     <p> There are <span> 1 </span> products in your cart </p>
                  </div>
                  <div className="right">
                    <p> <span> <RiDeleteBin6Fill /> </span> Clear Cart  </p>
                  </div>                              
                 </div>
               </div>   
           </div>


           {/* cart body start  */}
            <div className="cart-body">
              <div className="table-responsive">
               <table className="table table-bordered ">
                    <thead>
                          <tr > 
                            <th> Product </th>
                            <th> Unit Price </th>
                            <th> Quantity </th>
                            <th> Subtotal </th>
                            <th> Remove </th>
                          </tr>           
                    </thead>
                    <tbody>
                        <tr>
                          <td> 
                             <div className="table-box d-flex align-items-center">
                                <div className="image">
                                    <img src="https://www.ecom5.themetodo.com/storage/guest-8ea6b3ca-f4d9-4460-a04a-785d669235d5-400x400.jpeg" alt="" />
                                </div>
                                <div className="product-content">
                                  <Link to=""> <h5> Organic Frozen Triple Berry Blend </h5> </Link>
                                  <p> <span> <StarRating value={4.5} /> (4.5)  </span> </p>
                               
                                </div>
                             </div>
                          </td>
                          <td className="product-price"> $120.00</td>
                          <td> 
                            <div className="cart-counter">
                                <Counter />
                            </div>
                          </td>
                          <td className="subTotal"> $120.00 </td>
                          <td className="delete-product"> <span> <RiDeleteBin6Fill /> </span></td>
                        </tr>

                        <tr>
                          <td> 
                             <div className="table-box d-flex align-items-center">
                                <div className="image">
                                    <img src="https://www.ecom5.themetodo.com/storage/guest-8ea6b3ca-f4d9-4460-a04a-785d669235d5-400x400.jpeg" alt="" />
                                </div>
                                <div className="product-content">
                                  <Link to=""> <h5> Organic Frozen Triple Berry Blend </h5> </Link>
                                  <p> <span> <StarRating value={4.5} /> (4.5)  </span> </p>
                               
                                </div>
                             </div>
                          </td>
                          <td className="product-price"> $120.00</td>
                          <td> 
                            <div className="cart-counter">
                                <Counter />
                            </div>
                          </td>
                          <td className="subTotal"> $120.00 </td>
                          <td className="delete-product"> <span> <RiDeleteBin6Fill /> </span></td>
                        </tr>

                    </tbody>
                </table>
              </div>
            </div>
        </div>

         <div className="col-md-4 ">
            <div className="total-box">
              <div className="card p-2">
                <div className="card-body">
                   <div className="sub-total d-flex align-items-center justify-content-between">
                      <p className="top-total"> Subtotal </p>
                       <h4 className="sub-price">  $120.00 </h4>
                   </div>
                   <div className='border-info d-flex align-items-center justify-content-between mb-4'>
                      <h5 className='mb-0 same-text'>Shipping</h5>
                       <h3 className='right-text ml-auto mb-0 font-weight-bold'><span >Free</span></h3>
                    </div>


                  <div className='d-flex align-items-center justify-content-between mb-4'>
                      <h5 className='mb-0 same-text'>Estimate for</h5>
                      <h3 className='right-text ml-auto mb-0 font-weight-bold'>United Kingdom</h3>
                  </div>

                  <div className='d-flex align-items-center justify-content-between  mb-4'>
                    <h5 className='mb-0 same-text'>Total</h5>
                     <h3 className='right-text ml-auto mb-0 font-weight-bold'> $120.00 <span className='text-g'>                
                      </span></h3>
                  </div>
                  <div className="process-btn ">
                          <Link to=""> Proceed To Checkout <PiSignOutBold className='cart-icon'/> </Link>
                  </div>

                </div>
              </div>
            </div>
        </div> 
      </div>
    </div>
   </div>












    </> 
  )
}

export default Cart;        























