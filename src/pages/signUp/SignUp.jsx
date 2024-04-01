
import { useState } from "react";
import { Link } from "react-router-dom"
import { FaRegEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

import googleImage from "../../assets/img/icons/google.png"
import loginImg from "../../assets/img/icons/login-1.png"

const SignUp = () => {
  const [showPassword, setShowPassword ] = useState(false); 

  return (
    <>
         <div className="sign-up py-3">
        <div className="container-fluid">
          <div className="row"> 
              <nav aria-label="breadcrumb py-3">
          <div className="breadCrumb">
              <ul className="breadcrumb list list-inline ">
                    <li className="breadcrumb-item list-inline-item breadcrumb-item">
                      <Link to="/"> Home </Link>
                    </li>
                    <li className="breadcrumb-item list-inline-item">
                        Sign Up 
                    </li>
                 </ul>
              </div>
              </nav>  




               </div>
            </div>
        </div>


        <div className="login-section">
        <div className="container-fluid">
            <div className="row">  

             <div className="col-md-2"></div>

              <div className="col-md-4">
                <div className="image-login">
                  <img src={loginImg} alt="" />
                </div>
              </div>

              {/* Sign up form  start */}
              <div className="col-md-4">
                <div className="sign-in-form py-3 ">
                    <div className="card">
                        <div className="card-header">   
                            <h4 className="text-center"> Sign Up </h4>
                        </div>
                        <div className="card-body">
                        <div className="form-floating mb-3">
                              <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                              />
                              <label htmlFor="floatingInput">Email address</label>
                            </div>
                      
                          <div className="pass-box"> 
                            <div className="form-floating ">
                                <input
                                  type={ showPassword === false ? "password" : "text"} className="form-control"
                                  id="floatingPassword"
                                    placeholder="Password"
                                />
                                <label htmlFor="floatingPassword">Password</label>
                              </div>
                              <div className="icon-show">
                                <button className="icon" onClick={() => setShowPassword(!showPassword)}>
                                  {
                                    showPassword === false ? <FaRegEyeSlash /> : <FiEye />
                                  }
                                  
                                </button>
                              </div>
                          </div>

                              <div className="signIn-button">
                                  <button> Sign Up </button> 
                              </div>
                              <div className="or text-center p-4"> OR </div>
                              <div className="google-btn">
                                <button> <img src={googleImage} alt="" /> Sign In With Google </button>
                              </div>

                        
                        </div>
                    </div>
                </div>
              </div>
              {/* Sign up form  end */}




                <div className="col-md-2"></div>
             </div>
           </div>
        </div>
    </>
  )
}

export default SignUp
















