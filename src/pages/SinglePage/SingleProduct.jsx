
import { useEffect, useRef, useState } from 'react';
import { CiHeart, CiShuffle } from "react-icons/ci";
import { FaCartPlus, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

import axios from "axios";
import Slider from "react-slick";

// slider css  import 
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Product from "../../components/product/Product";
import StarRating from "../../components/star-rate/StarRating";

import "./SingleProduct.css";

import Rating from 'react-rating';

const SingleProduct = () => {
  

  const [productData, setproductData] = useState([]);


  const [bigImageSize, setbigImageSize ] = useState([1500 , 1500]);
  const [smallImageSize, setsmallImageSize ] = useState([150 , 150]);
  const [activeSize, setActiveSize ] = useState(0);

  const [activeTab , setActiveTab ] = useState(0); 
  const [count, setCount ] = useState(1); 

 const [currentProduct, setCurrentProduct] = useState([]);

 const [relatedProduct, setRelatedProduct ] = useState([]); 


  let singleId = useParams(); 
  let id = singleId.id;

  useEffect(() => {
  window.scrollTo(0, 0);
      
     productData.length !== 0 && 
       productData.map((item, index) => {
        item.items.length !== 0 && 
            item.items.map((item_, index_) => {
                 item_.products.length !== 0 &&
                 item_.products.map((product) => {
                    if (parseInt(product.id) === parseInt(id) ) {
                      setCurrentProduct(product);
                    }
                 })
            })
       })


    // related product 
   const related_products = [];

    productData.length !== 0 && 
    productData.map((item) => {
         if (prodCat.parentCat === item.cat_name) {
             item.items.length !== 0 && 
             item.items.map((item_, index_) => {
                  if (prodCat.subCatName === item_.cat_name) {
                    item_.products.length !== 0 && 
                     item_.products.map((product, index) => {
                      if (product.id !== parseInt(id)) {
                        related_products.push(product)                        
                       }                     
                     })
                  }
             })
         }
    })
  
    setRelatedProduct(related_products)

  }, [id, productData]);


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
   
    // get all data
    useEffect(() => {
      getData(`http://localhost:5050/productData`);
   }, []);
  
   const getData = async(url) => {
     try {
        await axios.get(url).then((response) => {
            setproductData(response.data);
        })
     } catch (error) {
       console.log(error.message);
     }
   };

   const [prodCat, setProdCat] = useState({
    parentCat: sessionStorage.getItem('parentCat'),
    subCatName: sessionStorage.getItem('subCatName')
  })

  // form state manage 
 const [rating, setRating ] = useState(0);

  const [input, setInput] = useState({
     review : "",
     userName : "",
     rating : 0
  
});     


const handleChangeInput = (e) => {
  setInput((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value,
        date: new Date().toLocaleString(),
        id: id,
        rating : 0, 
      }))
}         
             


const handleFormSubmit = async(e) => {
   e.preventDefault();


   try {
     const response = await axios.post(`http://localhost:5050/productReviews`, input )

    console.log(rating);
     return response.data; 

   } catch (error) {
    console.log(error.message);
   }    


}

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
                      <li><Link to={`/cat/${prodCat.parentCat.split(' ').join('-').toLowerCase()}`} onClick={() => sessionStorage.setItem('cat', prodCat.parentCat.split(' ').join('-').toLowerCase())} className='text-capitalize'>{prodCat.parentCat}</Link> </li>

                       <li><Link to={`/cat/${prodCat.parentCat.toLowerCase()}/${prodCat.subCatName.replace(/\s/g, '-').toLowerCase()}`} onClick={() => sessionStorage.setItem('cat', prodCat.subCatName.toLowerCase())} className='text-capitalize'>{prodCat.subCatName}</Link> </li>

                      <li>{currentProduct.productName}</li>
                 </ul>
                </nav>
             </div>
          </div>
        </div>


        <div className="container my-5">
           <div className="row">

             <div className="col singlePart-1 ">
                 <div className="row">
                  {/* product zoom code start */}
                   <div className="col-md-5 ">
                   <Slider {...settings2} className="product-galary-slider-big" ref={zoomSliderBig}>

                     {
                      currentProduct.productImages !== undefined && 
                        currentProduct.productImages?.map((imaUrl, index)=> {
                             return (               
                          <div className="item" key={index}>
                             <div className="product-zoom">
                                   <InnerImageZoom zoomType="hover" zoomScale= "1"  src={`${imaUrl}?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}  /> 
                            </div>
                          </div>
                             )
                      })
                     }

                    </Slider>


                     {/*galary image start  */}
                      <div className="zoom-galary">
                    <Slider {...settings} className="product-galary-slider" ref={zoomSlider}>

                    {
                      currentProduct.productImages !== undefined && 
                        currentProduct.productImages?.map((imaUrl, index)=> {
                             return (               
                              <div className="item" key={index}>
                              <img src={`${imaUrl}?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`} alt="" onClick={() => goto(index)}/>
                          </div>
                             )
                      })
                     }
                      

          
                     </Slider>
                      </div>    
                   </div>
                  {/* product zoom code end */}


                  {/* product info code start */}
                   <div className="col-md-7 product-info">
                       <div className="all-single-info">
                           <h2>{ currentProduct.productName} </h2>
                           <div className="review">
                               <span> <StarRating stars={currentProduct.rating}/> </span>   <span>  (32 reviews) </span> 
                            </div>
                            <div className="price-sec">
                              <span className="sale-price"> ${currentProduct.price} </span>
                              <div className="reg-price">
                                 <span className="offer">{currentProduct.discount}% Off </span>
                                 <span className="regular"> ${currentProduct.oldPrice}</span>
                              </div>
                            </div>
                            <div className="short-desc">
                              <p> {currentProduct.description} </p>
                            </div>

                      {
                        currentProduct.weight !== undefined && currentProduct.weight.length !== 0 &&  <div className="productSize d-flex align-items-center mt-3">
                        <span> Size / Weight: </span>
                        <ul className='list list-inline'>
                          {
                            currentProduct.weight.map((item, index) => {
                                 return <li className='list-inline-item' key={index}> 
                                 <a href="#" className={`tag ${activeSize === index ? "active" : ""}`} onClick={() => isActive(index)}> {item}kg </a></li>
                            })
                          }                      
                        </ul>
                      </div>
                      }

                            {/* ram   */}
                      {
                        currentProduct.RAM !== undefined && currentProduct.RAM.length !== 0 &&  <div className="productSize d-flex align-items-center mt-3">
                        <span> RAM: </span>
                        <ul className='list list-inline'>
                          {
                            currentProduct.RAM.map((RAM, index) => {
                                 return <li className='list-inline-item' key={index}> 
                                 <a href="#" className={`tag ${activeSize === index ? "active" : ""}`} onClick={() => isActive(index)}> { RAM } GB </a></li>
                            })
                          }                      
                        </ul>
                      </div>
                      }


                            {/* size  */}


                      {
                        currentProduct.SIZE !== undefined && currentProduct.SIZE.length !== 0 &&  <div className="productSize d-flex align-items-center mt-3">
                        <span> SIZE: </span>
                        <ul className='list list-inline'>
                          {
                            currentProduct.SIZE.map((SIZE, index) => {
                                 return <li className='list-inline-item' key={index}> 
                                 <a href="#" className={`tag ${activeSize === index ? "active" : ""}`} onClick={() => isActive(index)}> {SIZE} </a></li>
                            })
                          }                      
                        </ul>
                      </div>
                      }
                                     

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
                    <p className="all-small-font">{currentProduct.description}</p>
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

                         {/* {
                          currentProduct.reviews.length !== 0 && 
                             currentProduct.reviews.map((item, index) => {
                                return (
                                <div className="card p-3 review-card mb-4" key={index}>
                                  <div className="image-item">
                                    <div className="rounded-circle">
                                        <img src="https://nest-frontend-v6.netlify.app/assets/imgs/blog/author-2.png" alt="" />
                                     </div>
                                     <p> Sienna </p>
                                  </div>
                                  <div className="card-info">
                                     <div className="review-date">
                                       <p className="now-date"> December 4, 2024 at 3:12 pm</p>
                                      </div>
                                      <div className="star-message mt-3"> 
                                        <p className="message">{item.review} </p>
                                      </div> 
                                  </div>
                                  <div className="review-final">
                                     <span> <StarRating stars={item.rating}/> </span>   
                                  </div>
                              </div>
                                )
                             })
                         } */}
                                 


    



                            <div className="review-form">
                                     <h3> Add a review </h3>
                             
                                 <form className="form" onSubmit={handleFormSubmit}> 
                                     <div className="form-group my-2">
                                        <textarea name="review" value={input.review}  onChange={handleChangeInput} cols="30" rows="5" className="form-control" placeholder="Write Comment"></textarea>
                                     </div>
                                     <div className="row my-3">
                                       <div className="col-md-6">
                                          <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" name="userName" value={input.userName} onChange={handleChangeInput} />
                                          </div>
                                       </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                       <span className="me-3"> 
                                       Review  <Rating className='icon-all' emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x"  fractions={2} name="rating"  value={rating} onChange={(rating) => setRating(rating)} /> </span>
                                     
                                          </div>
                                       </div>  
                                     </div>
                                                                       
                                     <button type="submit" className="submit-btn"> Submit Review </button>
                                  </form>

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

                    {
                      relatedProduct.length !== 0 && 
                      relatedProduct.map((item, index) => {
                        return (
                          <div className="item" key={index}>
                             <Product tag={item.type} item={item}/>  
                          </div>
                        )
                      })

                    }
               
                    </Slider>
                  </div>
             </div>



           </div>
        </div>

      </div>
    </>
  )
}

export default SingleProduct; 











