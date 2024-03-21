
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom'; 
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; 
import { Link } from "react-router-dom";


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
const SingleProduct = () => {
  const [zoomImage, setZoomImage ] = useState("https://www.jiomart.com/images/product/original/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg");


  const [bigImageSize, setbigImageSize ] = useState([1500 , 1500]);
  const [smallImageSize, setsmallImageSize ] = useState([150 , 150]);

  const zoomSlider = useRef(); 

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade : false,
    arrows : true, 
  }

  const goto = (url) => {
    setZoomImage(url)
  }

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


        <div className="container-fluid my-4">
           <div className="row">

             <div className="col-md-9 singlePart-1 ">
                 <div className="row">
                  {/* product zoom code start */}
                   <div className="col-md-5 ">
                     <div className="product-zoom">
                        <InnerImageZoom zoomType="hover" zoomScale="1"  src={`${zoomImage}?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}  /> 
                      </div>
                      <div className="zoom-galary">
                  <Slider {...settings} className="product-galary-slider" ref={zoomSlider}>
                        <div className="item">
                            <img src={`https://www.jiomart.com/images/product/original/590003515/onion-1-kg-product-images-o590003515-p590003515-0-202203170724.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`} alt="" onClick={() => goto("https://www.jiomart.com/images/product/original/590003515/onion-1-kg-product-images-o590003515-p590003515-0-202203170724.jpg")}/>
                        </div>
                        <div className="item">
                            <img src={`https://www.shutterstock.com/image-photo/onion-bulbs-shallot-vegetable-raw-260nw-2250877815.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`} alt="" onClick={() => goto("https://www.shutterstock.com/image-photo/onion-bulbs-shallot-vegetable-raw-260nw-2250877815.jpg")}/>
                        </div>
                        <div className="item">
                            <img src={`https://www.jiomart.com/images/product/original/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`} alt="" onClick={() => goto("https://www.jiomart.com/images/product/original/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg")}/>
                        </div>
                        <div className="item">
                            <img src={`https://chaldn.com/_mpimage/deshi-peyaj-local-onion-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D52358&q=low&v=1?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`} alt="" onClick={() => goto("https://chaldn.com/_mpimage/deshi-peyaj-local-onion-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D52358&q=low&v=1")}/>
                        </div>
                        <div className="item">
                            <img src={`https://www.jiomart.com/images/product/original/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`} alt="" onClick={() => goto("https://www.jiomart.com/images/product/original/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg")}/>
                        </div>
                        <div className="item">
                            <img src={`https://www.jiomart.com/images/product/original/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`} alt="" onClick={() => goto("https://www.jiomart.com/images/product/original/590002136/onion-5-kg-pack-product-images-o590002136-p590002136-0-202203141906.jpg")}/>
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
                       </div>
                   </div>
                  {/* product info code start */}

                 </div>
             </div>


             <div className="col-md-3 singlePart-2 ">

             </div>
           </div>
        </div>

      </div>
    </>
  )
}

export default SingleProduct; 











