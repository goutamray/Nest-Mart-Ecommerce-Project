
import Slider from "react-slick"; 


// slider css  import 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./CategorySlider.css";
import { useState } from "react";

const CategorySlider = () => {
   
  const [itemBg, setItemBg ] = useState([
    "#f2fce4",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",

  ])



  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade : false,
    arrows : true, 
  }

  return (
    <>
      <div className="category-slider">
         <div className="container-fluid">
            <h2 className="heading mb-5"> Featured Categories</h2>
            <Slider {...settings} className="category-slider-main">

                {
                 itemBg.length > 0 && itemBg.map((item, index) => {
                  return <div className="category-item" key={index} >
                  <div className="info" style={{backgroundColor : item }}> 
                   <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-13.png" alt="" />  
                   <h6> <a href="#"> Cake & Milk </a>  </h6> 
                   <span> 26 items </span>
                   </div>
                </div>
                 })
                }
                         
            </Slider>
         </div>
      </div>
    </>
  )
}

export default CategorySlider













