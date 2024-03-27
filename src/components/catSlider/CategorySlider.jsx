
import Slider from "react-slick";

import axios from "axios";
import { useEffect, useState } from "react";

// slider css  import 
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./CategorySlider.css";

const CategorySlider = () => {
   
  const [allData, setAllData] = useState([]);
  const [totalLength, setTotalLength] = useState([]);

   // get all data
   useEffect(() => {
    getData(`http://localhost:5050/productData`);
   }, []);

   // get all data 
 const getData = async(url) => {
   try {
      await axios.get(url).then((response) => {
        setAllData(response.data);
      })
   } catch (error) {
     console.log(error.message);
   }
 };


 var catLength = 0;
 var lengthArr = [];

 useEffect(() => {
     allData?.length !== 0 &&
         allData?.map((item, index) => {
             item.items?.length !== 0 &&
                 item.items?.map((item_) => {
                     catLength += item_.products.length
                 })
             lengthArr.push(catLength)
             catLength = 0;
         })

     const list = lengthArr.filter((item, index) => lengthArr.indexOf(item) === index);
     setTotalLength(list)


 }, []);




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
 
                 
         
               {/* {   allData.length !== 0 &&  
                      allData.map((item, index) => {
     
                    return  <div className='category-item' key={index} >
                     <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                     <div className='info' style={{ background: itemBg[index] }}>
                        <img src={item.image} width="80" />
                         <h6>  {item.cat_name}  </h6> 
                         <span> {totalLength[index]} items </span>
                      </div>
                     </Link>
                   </div>
                 }) 
                 
                 } */}

               
             



                        
        {
                 itemBg.length > 0 && itemBg.map((item, index) => {

                  return <div className="category-item" key={index} >
                  <div className="info" style={{backgroundColor : item }}> 
                   <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-13.png" alt="" />  
                   <h6> <a href="#"> Cake & Milk </a>  </h6> 
                   <span> 45 items </span>
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













