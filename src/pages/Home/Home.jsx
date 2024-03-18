
import HomeSlider from "../../components/Slider/HomeSlider"
import CategorySlider from "../../components/catSlider/CategorySlider"
import { FaArrowRight } from "react-icons/fa";

import banner1 from "../../assets/img/banner/banner-1.png"
import banner2 from "../../assets/img/banner/banner-2.png"
import banner3 from "../../assets/img/banner/banner-3.png"

import "./Home.css"
import Product from "../../components/product/Product";

const Home = () => {
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
                 <Product /> 
             </div>
             <div className="item">
                 <Product /> 
             </div>
             <div className="item">
                 <Product /> 
             </div>
             <div className="item">
                 <Product /> 
             </div>
             <div className="item">
                 <Product /> 
             </div>
             <div className="item">
                 <Product /> 
             </div>
             <div className="item">
                 <Product /> 
             </div>
          </div>

        </div>
      </div>
       
       {/* Products */}
      


    </>
  )
}

export default Home
