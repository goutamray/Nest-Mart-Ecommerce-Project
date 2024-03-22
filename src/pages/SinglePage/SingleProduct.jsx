
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom'; 
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io"; 
import { MdKeyboardArrowUp } from "react-icons/md"; 
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci"; 
import { CiShuffle } from "react-icons/ci"; 

// import galary1 from "../../assets/img/thumbnail/thumbnail-7.jpg"
// import galary2 from "../../assets/img/thumbnail/thumbnail-8.jpg"
// import galary3 from "../../assets/img/thumbnail/thumbnail-9.jpg"
// import galary4 from "../../assets/img/thumbnail/thumbnail-10.jpg"
// import galary5 from "../../assets/img/thumbnail/thumbnail-11.jpg"
// import galary6 from "../../assets/img/thumbnail/thumbnail-12.jpg"

import Slider from "react-slick"; 
// slider css  import 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import { useState } from 'react';

import "./SingleProduct.css";
import SideBar from '../../components/sideBer/SideBar';

const SingleProduct = () => {

  const [zoomImage, setZoomImage ] = useState("https://www.jiomart.com/images/product/original/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg");


  const [bigImageSize, setbigImageSize ] = useState([1500 , 1500]);
  const [smallImageSize, setsmallImageSize ] = useState([150 , 150]);
  const [activeSize, setActiveSize ] = useState(0);

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
                  {/* product info code start */}

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











