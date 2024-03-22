
import { CiHeart, CiShuffle } from "react-icons/ci";
import { FaCartPlus, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { Link } from "react-router-dom";

// import galary1 from "../../assets/img/thumbnail/thumbnail-7.jpg"
// import galary2 from "../../assets/img/thumbnail/thumbnail-8.jpg"
// import galary3 from "../../assets/img/thumbnail/thumbnail-9.jpg"
// import galary4 from "../../assets/img/thumbnail/thumbnail-10.jpg"
// import galary5 from "../../assets/img/thumbnail/thumbnail-11.jpg"
// import galary6 from "../../assets/img/thumbnail/thumbnail-12.jpg"

import Slider from "react-slick";
// slider css  import 
import { useRef, useState } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import SideBar from '../../components/sideBer/SideBar';
import "./SingleProduct.css";
import Product from "../../components/product/Product";

const SingleProduct = () => {

  // const [zoomImage, setZoomImage ] = useState("https://www.jiomart.com/images/product/original/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg");


  const [bigImageSize, setbigImageSize ] = useState([1500 , 1500]);
  const [smallImageSize, setsmallImageSize ] = useState([150 , 150]);
  const [activeSize, setActiveSize ] = useState(0);

  const [activeTab , setActiveTab ] = useState(0); 

  const [count, setCount ] = useState(1); 

  // increment 
  const handleIncrement = () => {
    setCount((count) => count + 1); 
  }; 
  // handleDescrement 
  const handleDescrement = () => {
    if (count > 1 ) {
      setCount((count) => count - 1); 
    }
  }; 

  const zoomSliderBig = useRef(); 
  const zoomSlider = useRef(); 

  let settings2 = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade : false,
    arrows : false, 
   
  }

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade : false,
    arrows : true, 
  }
  let related = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade : false,
    arrows : true, 
  }


  const goto = ( index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);

  };

  const isActive = (index) => {
    setActiveSize(index)
  }; 

  return (
    <>   
      <div className="single-product">

       {/* breadcrumb */}
        <div className="breadCrumbWrapper2 ">
           <div className="container-fluid">
              <div className="bradcrumb2 ">
               <nav aria-label="breadcrumb">
                 <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page"> <Link to="/"> Vegetables & Tubers </Link></li>
                      <li className="breadcrumb-item " > Seeds Of Change Organic</li>
                 </ul>
                </nav>
             </div>
          </div>
        </div>


        <div className="container my-5">
           <div className="row">

             <div className="col-md-9 singlePart-1 ">
                 <div className="row">
                  {/* product zoom code start */}
                   <div className="col-md-5 ">
                   <Slider {...settings2} className="product-galary-slider-big" ref={zoomSliderBig}>
                      <div className="item">
                         <div className="product-zoom">
                            <InnerImageZoom zoomType="hover" zoomScale="1"  src={`https://www.jiomart.com/images/product/original/590003515/onion-1-kg-product-images-o590003515-p590003515-0-202203170724.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}  /> 
                         </div>
                      </div>
                      <div className="item">
                         <div className="product-zoom">
                            <InnerImageZoom zoomType="hover" zoomScale="1"  src={`https://www.shutterstock.com/image-photo/onion-bulbs-shallot-vegetable-raw-260nw-2250877815.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}  /> 
                         </div>
                      </div>
            
                      <div className="item">
                         <div className="product-zoom">
                            <InnerImageZoom zoomType="hover" zoomScale="1" src={`https://www.jiomart.com/images/product/original/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}  /> 
                         </div>
                      </div>
                      <div className="item">
                         <div className="product-zoom">
                            <InnerImageZoom zoomType="hover" zoomScale="1"  src={`https://chaldn.com/_mpimage/deshi-peyaj-local-onion-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D52358&q=low&v=1?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}  /> 
                         </div>
                      </div>
                
                      <div className="item">
                         <div className="product-zoom">
                            <InnerImageZoom zoomType="hover" zoomScale="1"  src={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/1200px-Mixed_onions.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}  /> 
                         </div>
                      </div>
                      <div className="item">
                         <div className="product-zoom">
                            <InnerImageZoom zoomType="hover" zoomScale="1"  src={`https://www.shutterstock.com/image-photo/onion-bulbs-shallot-vegetable-raw-260nw-2250877815.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}  /> 
                         </div>
                      </div>
                    </Slider>

                     {/*galary   */}
                      <div className="zoom-galary">
                    <Slider {...settings} className="product-galary-slider" ref={zoomSlider}>
                        <div className="item">
                            <img src={`https://www.jiomart.com/images/product/original/590003515/onion-1-kg-product-images-o590003515-p590003515-0-202203170724.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`} alt="" onClick={() => goto(0)}/>
                        </div>
                        <div className="item">
                            <img src={`https://www.shutterstock.com/image-photo/onion-bulbs-shallot-vegetable-raw-260nw-2250877815.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`} alt="" onClick={() => goto(1)}/>
                        </div>
                        <div className="item">
                            <img src={`https://www.jiomart.com/images/product/original/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`} alt="" onClick={() => goto(2)}/>
                        </div>
                        <div className="item">
                            <img src={`https://chaldn.com/_mpimage/deshi-peyaj-local-onion-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D52358&q=low&v=1?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`} alt="" onClick={() => goto(3)}/>
                        </div>
                        <div className="item">
                            <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/1200px-Mixed_onions.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`} alt="" onClick={() => goto(4)}/>
                        </div>
                        <div className="item">
                            <img src={`https://www.shutterstock.com/image-photo/onion-bulbs-shallot-vegetable-raw-260nw-2250877815.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`} alt="" onClick={() => goto(5)}/>
                        </div>
                     </Slider>
                      </div>    
                   </div>
                  {/* product zoom code end */}


                  {/* product info code start */}
                   <div className="col-md-7 product-info">
                       <div className="all-single-info">
                           <h2> Seeds of Change Organic Quinoa, Brown </h2>
                           <div className="review">
                              <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span> (32 reviews)
                            </div>
                            <div className="price-sec">
                              <span className="sale-price"> $38 </span>
                              <div className="reg-price">
                                 <span className="offer"> 26% Off </span>
                                 <span className="regular"> $52 </span>
                              </div>
                            </div>
                            <div className="short-desc">
                              <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi</p>
                            </div>
                            <div className="productSize d-flex align-items-center mt-3">
                              <span> Size / Weight: </span>
                              <ul className='list list-inline'>
                                <li className='list-inline-item'> <a href="#" className={`tag ${activeSize === 0 ? "active" : ""}`} onClick={() => isActive(0)}> 50kg </a></li>
                                <li className='list-inline-item'> <a href="#" className={`tag ${activeSize === 1 ? "active" : ""}`}  onClick={() => isActive(1)}> 60kg </a></li>
                                <li className='list-inline-item'> <a href="#" className={`tag ${activeSize === 2 ? "active" : ""}`} onClick={() => isActive(2)} > 80kg </a></li>
                                <li className='list-inline-item'> <a href="#" className={`tag ${activeSize === 3 ? "active" : ""}`}  onClick={() => isActive(3)}> 100kg </a></li>
                                <li className='list-inline-item'> <a href="#" className={`tag ${activeSize === 4 ? "active" : ""}`}  onClick={() => isActive(4)}> 150kg </a></li>
                              </ul>
                            </div>
                            <div className="product-counter ">
                               <div className="counter d-flex align-items-center">
                                 <h1> { count } </h1>
                                 <button className='upper' onClick={handleIncrement} > <MdKeyboardArrowUp /> </button>
                                 <button className='lower' onClick={handleDescrement}> <IoIosArrowDown /> </button>
                               </div>
                               <div className="add-to-cart-btn">
                                   <Link to=""> <FaCartPlus className='cart-icon'/> Add to cart </Link>
                               </div>
                               <div className="wishlist same-btn ">
                                  <p> <CiHeart className='heart'/> </p>
                               </div>
                               <div className="compare same-btn ">
                                  <p> <CiShuffle className='heart'/>  </p>
                               </div>
                            </div>

                            <div className="product-all-info">
                              <div className="left-info">
                                  <ul>
                                    <li> Type : <span> Organic </span></li>
                                    <li> MFG : <span> Jun 4.2024 </span></li>
                                    <li> LIFE : <span> 70 days </span></li>
                                  </ul>
                              </div>
                              <div className="left-info">
                                 <ul>
                                    <li> SKU : <a href="#"> FWM15VKT </a>  </li>
                                    <li> Tags :
                                       <a href="#"> Snack, </a>
                                       <a href="#"> Organic, </a> 
                                       <a href="#"> Brown </a>
                                     </li>
                                    <li> Stock :  <a href="#"> 8 Items In Stock</a>  </li>
                               
                                  </ul>
                              </div>
                            </div>
                       </div>



                   </div>
                  {/* product info code end */}

         




                 </div>

                {/* product tab details  */}
                  <div className="card productDetailsTab p-5">
                     <div className="custom-tabs">
                       <ul className='list list-inline'>
                         <li className='list-inline-item'> <button className={`${activeTab === 0 && "active" }`} onClick={() => setActiveTab(0)}> Description </button> </li>
                         <li className='list-inline-item'> <button className={`${activeTab === 1 && "active" }`} onClick={() => setActiveTab(1)}> Additional info </button> </li>
                         <li className='list-inline-item'> <button className={`${activeTab === 2 && "active" }`} onClick={() => setActiveTab(2)}> Reviews (3) </button> </li>
                       </ul>
                  
                  {
                    activeTab === 0 && <div className="tab-content mt-3">
                    <p className="all-small-font"> Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. </p> <br/>
                    <p className="all-small-font"> Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. </p>
                    <h3 className="meduim-text"> Packaging & Delivery</h3>
                    <p className="all-small-font"> Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>

                    <h3 className="meduim-text" > Suggested Use </h3>
                    <p className="all-small-font"> Refrigeration not necessary.</p>
                    <p className="all-small-font"> Stir before serving </p>
                  </div>
                  }
                    
                  {
                    activeTab === 1 && <div className="tab-content mt-3">
                    <div className="table-responsive">
                       <table className='table table-bordered'>
                              <tbody>
                                                       <tr className="stand-up">
                                                           <th>Stand Up</th>
                                                           <td>
                                                               <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="folded-wo-wheels">
                                                           <th>Folded (w/o wheels)</th>
                                                           <td>
                                                               <p>32.5″L x 18.5″W x 16.5″H</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="folded-w-wheels">
                                                           <th>Folded (w/ wheels)</th>
                                                           <td>
                                                               <p>32.5″L x 24″W x 18.5″H</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="door-pass-through">
                                                           <th>Door Pass Through</th>
                                                           <td>
                                                               <p>24</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="frame">
                                                           <th>Frame</th>
                                                           <td>
                                                               <p>Aluminum</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="weight-wo-wheels">
                                                           <th>Weight (w/o wheels)</th>
                                                           <td>
                                                               <p>20 LBS</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="weight-capacity">
                                                           <th>Weight Capacity</th>
                                                           <td>
                                                               <p>60 LBS</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="width">
                                                           <th>Width</th>
                                                           <td>
                                                               <p>24″</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="handle-height-ground-to-handle">
                                                           <th>Handle height (ground to handle)</th>
                                                           <td>
                                                               <p>37-45″</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="wheels">
                                                           <th>Wheels</th>
                                                           <td>
                                                               <p>12″ air / wide track slick tread</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="seat-back-height">
                                                           <th>Seat back height</th>
                                                           <td>
                                                               <p>21.5″</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="head-room-inside-canopy">
                                                           <th>Head room (inside canopy)</th>
                                                           <td>
                                                               <p>25″</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="pa_color">
                                                           <th>Color</th>
                                                           <td>
                                                               <p>Black, Blue, Red, White</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="pa_size">
                                                           <th>Size</th>
                                                           <td>
                                                               <p>M, S</p>
                                                           </td>
                                                       </tr>
                             </tbody>
                       </table>
                    </div>
                  </div>
                  }
                   

                   {
                    activeTab === 2 && <div className="tab-content mt-3">
                         <div className="row">
                          <div className="col-md-8">
                               <div className="review-customer">
                                  <h4> Customer questions & answers  </h4>

                                  <div className="card p-3 review-card mb-4">
                                      <div className="image-item">
                                        <div className="rounded-circle">
                                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/blog/author-2.png" alt="" />
                                         </div>
                                         <p> Sienna </p>
                                      </div>
                                   <div className="card-info">
                                      <div className="review-date">
                                          <p className="now-date"> December 4, 2024 at 3:12 pm</p>
                                          <p className="review-star"> 
                                           <span> <FaStar /> <FaStar /><FaStar /><FaStar /> <FaStarHalfAlt />  </span>
                                           </p>
                                       </div>
                                         <p className="message"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt </p>
                                     </div>
                                  </div>

                                  <div className="card p-3 review-card mb-4">
                                      <div className="image-item">
                                        <div className="rounded-circle">
                                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/blog/author-3.png" alt="" />
                                         </div>
                                         <p> Brenna </p>
                                      </div>
                                   <div className="card-info">
                                      <div className="review-date">
                                          <p className="now-date"> December 4, 2024 at 3:12 pm</p>
                                          <p className="review-star"> 
                                           <span> <FaStar /> <FaStar /><FaStar /><FaStar /> <FaStarHalfAlt />  </span>
                                           </p>
                                       </div>
                                         <p className="message"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt </p>
                                     </div>
                                  </div>

                                  <div className="card p-3 review-card mb-4">
                                      <div className="image-item">
                                        <div className="rounded-circle">
                                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/blog/author-4.png" alt="" />
                                         </div>
                                         <p> Gemma </p>
                                      </div>
                                   <div className="card-info">
                                      <div className="review-date">
                                          <p className="now-date"> December 4, 2024 at 3:12 pm</p>
                                          <p className="review-star"> 
                                           <span> <FaStar /> <FaStar /><FaStar /><FaStar /> <FaStarHalfAlt />  </span>
                                           </p>
                                       </div>
                                         <p className="message"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt </p>
                                     </div>
                                  </div>


                                  <div className="review-form">
                                     <h3> Add a review </h3>
                                     <span className="review-form-data"> <FaStar /> <FaStar /><FaStar /><FaStar /> <FaStarHalfAlt /> </span>
                                 <div className="form"> 
                                     <div className="form-group my-2">
                                        <textarea name="" cols="30" rows="5" className="form-control" placeholder="Write Comment"></textarea>
                                     </div>
                                     <div className="row my-3">
                                       <div className="col-md-6">
                                          <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name"/>
                                          </div>
                                       </div>
                                       <div className="col-md-6">
                                         <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Email"/>
                                          </div>
                                       </div>
                                     </div>
                                     <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Website"/>
                                     </div>                                   
                                     <button className="submit-btn"> Submit Review </button>
                                  </div>

                                 </div>                       
                               </div>
                          </div>

                          <div className="col-md-4">
                               <div className="review-details">
                                    <h4> Customer reviews </h4>
                                    <div className="review-count">
                                      <p> <span> <FaStar /> <FaStar /><FaStar /><FaStar /> <FaStarHalfAlt /></span> <span className="total"> 4.8 out of 5 </span> </p>
                                    </div>

                                     <div className="progress-bar-item">
                                      <div className="single-progress">
                                        <span> 5 star </span>
                                         <div className="progress" style={{width: "100%"}}  >
                                           <div className="progress-bar" style={{width: "75%"}}> 75% </div>
                                         </div>                                     
                                      </div>

                                      <div className="single-progress">
                                        <span> 4 star </span>
                                         <div className="progress" style={{width: "100%"}}  >
                                           <div className="progress-bar" style={{width: "25%"}}> 25% </div>
                                         </div>
                                      </div>

                                      <div className="single-progress">
                                        <span> 3 star </span>
                                         <div className="progress" style={{width: "100%"}}  >
                                           <div className="progress-bar" style={{width: "45%"}}> 45% </div>
                                         </div>
                                      </div>

                                      <div className="single-progress">
                                        <span> 2 star </span>
                                         <div className="progress" style={{width: "100%"}}  >
                                           <div className="progress-bar" style={{width: "65%"}}> 65% </div>
                                         </div>
                                      </div>
                                      <div className="single-progress">
                                        <span> 1 star </span>
                                         <div className="progress" style={{width: "100%"}}  >
                                           <div className="progress-bar" style={{width: "75%"}}> 75% </div>
                                         </div>
                                      </div>
                                      <div className="small-last">
                                         <p href="#" className="small-text"> How are ratings calculated? </p>
                                      </div>
                                    </div>
                               </div>
                          </div>
                         </div>
                     </div>
                  }

                     </div>
                  </div>

                  {/* related products */}
                  <div className="related-product">
                    <h5> Related products </h5>

                    <Slider {...related} className="product-slider-main">
                      <div className="item">
                        <Product tag="new"/>  
                      </div>
                      <div className="item">
                        <Product tag="hot"/>  
                      </div>
                      <div className="item">
                        <Product tag="best"/>  
                      </div>
                      <div className="item">
                        <Product tag="sale"/>  
                      </div>
                      <div className="item">
                        <Product tag="hot"/>  
                      </div>                
                    </Slider>
                  </div>
             </div>


             <div className="col-md-3 singlePart-2 left-sidebar">
                 <SideBar /> 
             </div>
           </div>
        </div>

      </div>
    </>
  )
}

export default SingleProduct; 











