
import { IoLocationOutline, IoMailOpenOutline } from "react-icons/io5";
import { MdOutlineHeadphones } from "react-icons/md"; 
import { CiClock2 } from "react-icons/ci";
import { FiPhoneCall, FiTwitter } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineSkype } from "react-icons/ai"; 

import logo from "../../assets/img/logo.svg"
import payment1 from "../../assets/img/pay/google-play.jpg"
import payment2 from "../../assets/img/pay/app-store.jpg"
import payment3 from "../../assets/img/pay/payment-method.png"




import "./Footer.css"
const Footer = () => {
  return (
    <>
      <div className="footer-section my-4">
        <div className="container-fluid">
          <div className="row ">
          <div className="footer-all-part d-flex justify-content-between"> 
             <div className="footer-part1">
                <div className="footer-left-box">
                  <img src={logo} alt=""  />
                  <h4> Awesome grocery store website template </h4>
                  <p><span> <IoLocationOutline /> </span>  Address 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                  <p><span><MdOutlineHeadphones /> </span> Call Us <a href="#" className="link-text-all"> (+91)-540-025-124553 </a></p>
                  <p><span> <IoMailOpenOutline /></span> Email <a href="#" className="link-text-all"> sale@Nest.com </a></p>
                  <p><span> <CiClock2 /> </span> Email Hours 10:00 - 18:00, Mon - Sat </p>
               </div>
             </div>
             <div className="footer-part2">
                 <h2> Company </h2>
                 <ul>
                  <li>
                    <a href="#"> About Us </a>
                  </li>
                  <li>
                    <a href="#"> Delivery Information </a>
                  </li>
                  <li>
                    <a href="#"> Privacy Policy </a>
                  </li>
                  <li>
                    <a href="#"> Terms & Conditions </a>
                  </li>
                  <li>
                    <a href="#"> Contact Us </a>
                  </li>
                  <li>
                    <a href="#"> Support Center </a>
                  </li>
                  <li>
                    <a href="#"> Careers </a>
                  </li>
                 </ul>
             </div>
             <div className="footer-part2">
                 <h2> Account </h2>
                 <ul>
                  <li>
                    <a href="#"> Sign In </a>
                  </li>
                  <li>
                    <a href="#"> View Cart </a>
                  </li>
                  <li>
                    <a href="#"> My Wishlist </a>
                  </li>
                  <li>
                    <a href="#"> Track My Order </a>
                  </li>
                  <li>
                    <a href="#"> Help Ticket </a>
                  </li>
                  <li>
                    <a href="#"> Shipping Details </a>
                  </li>
                  <li>
                    <a href="#"> Compare products </a>
                  </li>
                 </ul>
             </div>

             <div className="footer-part2">
                 <h2> Corporate </h2>
                 <ul>
                  <li>
                    <a href="#"> Become a Vendor </a>
                  </li>
                  <li>
                    <a href="#"> Affiliate Program </a>
                  </li>
                  <li>
                    <a href="#"> Farm Business </a>
                  </li>
                  <li>
                    <a href="#"> Farm Careers </a>
                  </li>
                  <li>
                    <a href="#"> Our Suppliers </a>
                  </li>
                  <li>
                    <a href="#"> Accessibility </a>
                  </li>
                  <li>
                    <a href="#"> Promotions </a>
                  </li>
                 </ul>
             </div>

             <div className="footer-part2">
                 <h2> Popular </h2>
                 <ul>
                  <li>
                    <a href="#"> Milk & Flavoured Milk </a>
                  </li>
                  <li>
                    <a href="#"> Butter and Margarine </a>
                  </li>
                  <li>
                    <a href="#"> Eggs Substitutes </a>
                  </li>
                  <li>
                    <a href="#"> Marmalades </a>
                  </li>
                  <li>
                    <a href="#"> Sour Cream and Dips </a>
                  </li>
                  <li>
                    <a href="#"> Tea & Kombucha </a>
                  </li>
                  <li>
                    <a href="#"> Cheese </a>
                  </li>
                 </ul>
             </div>

             <div className="footer-part1">
                <div className="footer-right-box">
                   <h2> Install App  </h2>
                   <p> From App Store or Google Play </p>
                   <div className="image ">
                       <a href="#"> <img src={payment1} alt="" /> </a>
                       <a href="#"> <img src={payment2} alt="" /> </a>
                      
                   </div>
                   <div className="image2 ">
                      <p> Secured Payment Gateways </p>
                       <a href="#"> <img src={payment3} alt="" /> </a>                   
                   </div>
               </div>
             </div>
            </div>
          </div>
        </div>
      </div>


      {/* bottom footer */}
      <div className="bottom-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
               <div className="footer-left">
                  <p> All rights reserved By <a href="#"> Goutam Ray </a> </p>
               </div>
            </div>
            <div className="col-sm-5 middle-bar">
               <div className="icon-call">
                  <div className="icon">
                      <span> <FiPhoneCall /></span>
                  </div>
                  <div className="call">
                     <h2> 1900646666 </h2>
                     <p> Working 8:00 - 22:00 </p>
                  </div>
               </div>
               <div className="icon-call d-flex">
                  <div className="icon">
                      <span> <FiPhoneCall /></span>
                  </div>
                  <div className="call">
                     <h2> 1900648888 </h2>
                     <p> 24/7 Support Center </p>
                  </div>
               </div>
            </div>
            <div className="col-sm-3 d-flex align-items-center">
               <div className="bottom-right">
                 <div className="follow-media">
                  <div className="follow">
                    <p> Follow Us </p>
                  </div>
                  <div className="media">
                    <span> <FaFacebookF className="all-icon"/> <FiTwitter className="all-icon" /> <AiOutlineSkype className="all-icon"/> <FaInstagram className="all-icon"/> </span>
                  </div>
                 </div>
                 <p> Up to 15% discount on your first subscribe </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer





































