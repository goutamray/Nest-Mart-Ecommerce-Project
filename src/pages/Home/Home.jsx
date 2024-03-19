
import HomeSlider from "../../components/Slider/HomeSlider"
import CategorySlider from "../../components/catSlider/CategorySlider"
import { FaArrowRight } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

import banner1 from "../../assets/img/banner/banner-1.png"
import banner2 from "../../assets/img/banner/banner-2.png"
import banner3 from "../../assets/img/banner/banner-3.png"
import banner4 from "../../assets/img/banner/banner-4.png"
import banner9 from "../../assets/img/banner/banner-9.png"

import icon1  from "../../assets/img/icons/icon-1.svg"
import icon2  from "../../assets/img/icons/icon-2.svg"
import icon3  from "../../assets/img/icons/icon-3.svg"
import icon4  from "../../assets/img/icons/icon-4.svg"
import icon5  from "../../assets/img/icons/icon-5.svg"

import Product from "../../components/product/Product";

import Slider from "react-slick"; 

import "./Home.css"
import TopProduct from "../../components/TopProducts/TopProduct";

const Home = () => {


  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade : false,
    arrows : true, 
    autoPlay : 3000,

  }

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
              <li  className="list-inline-item"> 
                <a href=""> All </a>
              </li>
              <li className="list-inline-item"> 
                <a href=""> Milks & Dairies </a>
              </li>
              <li  className="list-inline-item"> 
                <a href=""> Coffes & Teas </a>
              </li>
              <li  className="list-inline-item"> 
                <a href=""> Pet Foods </a>
              </li>
              <li  className="list-inline-item"> 
                <a href=""> Meats </a>
              </li>
              <li className="list-inline-item"> 
                <a href=""> Vegetables </a>
              </li>
              <li className="list-inline-item"> 
                <a href=""> Fruits </a>
              </li>
            </ul>
          </div>

          <div className="row product-row my-4">
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
                 <Product tag="new"/> 
             </div>
             <div className="item">
                 <Product tag="best"/> 
             </div>
             <div className="item">
                 <Product tag="hot"/> 
             </div>
             <div className="item">
                 <Product tag="sale"/> 
             </div>
             <div className="item">
                 <Product tag="hot"/> 
             </div>
             <div className="item">
                 <Product tag="best"/> 
             </div>
             <div className="item">
                 <Product tag="new"/> 
             </div>
          </div>

        </div>
      </div>
       
       {/* Daily Best Products */}
       <div className="popular-products my-5">
        <div className="container-fluid">
          <div className="tab-header d-flex align-items-center justify-content-between">
            <h3> Daily Best Sells </h3>
            <ul className="list list-inline custom-ul">        
              <li  className="list-inline-item"> 
                <a href=""> Featured </a>
              </li>
              <li className="list-inline-item"> 
                <a href=""> Popular </a>
              </li>
              <li className="list-inline-item"> 
                <a href=""> New added </a>
              </li>
            </ul>
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

     {/* newsletter banner  */}
      <div className="news-letter">
        <div className="container-fluid">
             <div className="row">
               <div className="item">              
                    <div className="info">
                         <h2> Stay home & get your daily <br/>  grocery deals </h2>
                         <p> Start Your Daily Shopping with <a href="#"> Nest Mart </a>  </p>
                         <form className="subscribe-form">
                           <IoIosSend className="send" />
                           <input type="email" placeholder="Your emaill address" />
                           <button type="submit"> Subscribe </button>
                         </form>
                    </div>
                    </div>  
             
                 <div className="photo-box">
                    <img src={banner9} alt="" />
                  </div>
             </div>
          </div>
        </div>



        {/* Top footer section  */}

        <div className="top-footer">
            <div className="container-fluid">
              <div className="row">
                <div className="collumPartAll">

                    <div className="item-box-icon">
                      <div className="single-img">
                         <img src={icon1} alt="" />
                      </div>
                      <div className="single-text">
                          <h4> Best prices & offers </h4>
                          <p> Orders $50 or more </p>
                      </div>
                    </div>

                    <div className="item-box-icon">
                      <div className="single-img">
                         <img src={icon2} alt="" />
                      </div>
                      <div className="single-text">
                          <h4> Free delivery </h4>
                          <p> 24/7 amazing services </p>
                      </div>
                    </div>

                    <div className="item-box-icon">
                      <div className="single-img">
                         <img src={icon3} alt="" />
                      </div>
                      <div className="single-text">
                          <h4> Great daily deal </h4>
                          <p> When you sign up </p>
                      </div>
                    </div>

                    <div className="item-box-icon">
                      <div className="single-img">
                         <img src={icon4} alt="" />
                      </div>
                      <div className="single-text">
                          <h4>  Wide assortment </h4>
                          <p> Mega Discounts </p>
                      </div>
                    </div>

                    <div className="item-box-icon">
                      <div className="single-img">
                         <img src={icon5} alt="" />
                      </div>
                      <div className="single-text">
                          <h4> Easy returns </h4>
                          <p> Within 30 days </p>
                      </div>
                    </div>

                </div>
              </div>
            </div>
        </div>


    </>

  )
}

export default Home
