
import { FaArrowRight } from "react-icons/fa";
import HomeSlider from "../../components/Slider/HomeSlider";
import TopProduct from "../../components/TopProducts/TopProduct";
import CategorySlider from "../../components/catSlider/CategorySlider";
import Product from "../../components/product/Product";


import banner1 from "../../assets/img/banner/banner-1.png";
import banner2 from "../../assets/img/banner/banner-2.png";
import banner3 from "../../assets/img/banner/banner-3.png";
import banner4 from "../../assets/img/banner/banner-4.png";

import Slider from "react-slick";

import axios from "axios";
import { useEffect, useState } from "react";

import "./Home.css";
const Home = () => {
  const [prodData, setprodData] = useState([])
  const [catArray, setcatArray] = useState([]);
  const [activeTab, setactiveTab] = useState();
  const [activeTabIndex, setactiveTabIndex] = useState(0);
  const [activeTabData, setActiveTabData] = useState([]); 


  const [bestSells, setBestSells] = useState([]); 

  // get all data
  useEffect(() => {
    getData(`http://localhost:5050/productData`);
 }, []);

 const getData = async(url) => {
   try {
      await axios.get(url).then((response) => {
        setprodData(response.data);
      })
   } catch (error) {
     console.log(error.message);
   }
 };

 const catArr = []; 

 // all category
 useEffect(() => {
  prodData?.length !== 0 && 
   prodData?.map((item) => {
     item.items?.length !== 0 && 
       item.items?.map((item_) => {
          catArr.push(item_.cat_name); 
     })
   }) 
 
   const list2 = catArr.filter((item, index) => catArr.indexOf(item) === index);
   setcatArray(list2);
   setactiveTab(list2[0])
 
 }, [ prodData]);


 // get all product 
 useEffect(() => {
     let arr = [];
     setActiveTabData(arr); 

     prodData?.length !== 0 && 
       prodData?.map((item, index) => {
          item.items?.map((item_, index_) => {
             if (item_.cat_name === activeTab ) {
              setActiveTabData(item_.products)
             }
          })
       })
 }, [prodData, activeTab, activeTabData]);

 
 let bestArr = []; 

 // best sell get all product 
  useEffect(() => {
    prodData?.length !== 0 && 
     prodData.map((item) => {
       if (item.cat_name == "Electronics") {
         item.items.length !== 0 && 
            item.items.map((item_) => {
               item_.products.length !== 0 && 
                 item_.products.map((item)=> {
                  bestArr.push(item)
                 })
            })        
      } 
    })
   
    setBestSells(bestArr); 

  }, [ prodData]);


      
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade : false,
    arrows : true, 
    autoPlay : 3000,

  };  


  return (
    <> 
    
      <HomeSlider /> 
      <CategorySlider />  

      {/* Banner section  */}
      <div className="banner-section my-3">
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-4 banner-part">
              <div className="banner-img">
                <img src={banner1} alt="" />
                <div className="banner-text">
                  <h4 className="banner-title">  Everyday Fresh & Clean with Our Products</h4>
                  <a href="#" className="button-shop"> Shop Now <FaArrowRight /></a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 banner-part">
              <div className="banner-img">
                <img src={banner2} alt="" />
                <div className="banner-text">
                  <h4 className="banner-title">  Make your Breakfast Healthy and Easy </h4>
                  <a href="#" className="button-shop"> Shop Now <FaArrowRight /></a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 banner-part">
              <div className="banner-img">
                <img src={banner3} alt="" />
                <div className="banner-text">
                  <h4 className="banner-title">  The best Organic  Products Online </h4>
                  <a href="#" className="button-shop"> Shop Now <FaArrowRight /></a>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>

      {/* Popular Products */}
      <div className="popular-products my-5">
        <div className="container-fluid">
          <div className="tab-header d-flex align-items-center justify-content-between">
            <h3> Popular Products </h3>
            <ul className="list list-inline custom-ul">   


             { 
              catArray?.length !== 0 && 
              catArray?.map((item, index) => {
               return <li  className="list-inline-item" key={index}> 
                         <a className={`${activeTabIndex === index && "active"}`} onClick={() => {             
                          setactiveTab(item)
                          setactiveTabIndex(index)

                        }}> {item} 

                         </a>
                     </li>
              }) 
             } 

            </ul>
          </div>

          <div className="row product-row my-4">
                {
                  activeTabData?.length !== 0 && 
                     activeTabData?.map((item, index) => {
                        return <div className="item" key={index}>
                                   <Product tag={item.type} item={item}/> 
                               </div>
                     })
                }   
 
         
          </div> 

        </div>
      </div>
       
       {/* Daily Best Products */}
       <div className="popular-products my-5">
        <div className="container-fluid">
          <div className="tab-header d-flex align-items-center justify-content-between">
            <h3> Daily Best Sells </h3>
          </div>
          
          <div className="row my-4">
            <div className="col-md-3">
               <div className="banner-image">
                   <img src={banner4} alt="" className="w-100" style={{borderRadius: "20px"}}/>
                   <h2> Bring nature into your home </h2>   
                   <a href="#" className="button-shop-primary"> Shop Now <FaArrowRight /></a>        
               </div>
            </div>
            <div className="col-md-9">
            <Slider {...settings} className="product-slider-main">

            {
              bestSells.length !== 0 && 
                 bestSells?.map((item, index) => {
                    return <div className="item" key={index}>
                    <Product tag={item.type} item={item} />    
                 </div>
                 })
            }


             </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* top products */}
      <div className="topProducts my-3">
        <div className="container-fluid">
           <div className="row">
             <div className="col-md-3">
                 <TopProduct title="Top Selling" />
             </div>
             <div className="col-md-3">
                <TopProduct title="Trending Products"  />
             </div>
             <div className="col-md-3">
                 <TopProduct title="Recently added" />
             </div>
             <div className="col-md-3">
                 <TopProduct title="Top Rated" />
             </div>
           </div>
        </div>
      </div>

    </>

  )
}

export default Home
