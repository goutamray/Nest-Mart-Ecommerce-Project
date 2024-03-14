
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom"
import { useState } from "react";
import ClickAwayListener from 'react-click-away-listener'; 


import "./SelectDrop.css"

const SelectDrop = ({ data }) => {
  
  const [isOpenDrop, setIsOpenDrop ] = useState(false); 
  const [selectIndex, setSelectIndex ] = useState(0); 
  const [selectItem, setSelectItem ] = useState("All Categories"); 

 // handleClickOpen
 const handleClickOpen =() => {
    setIsOpenDrop(() => !isOpenDrop); 
 }

 // handleClose 
 const handleClose = (index, item) => {
    setSelectIndex(index); 
    setIsOpenDrop(() => !isOpenDrop); 
    setSelectItem(item)
 }




  return (
    <>
       <ClickAwayListener onClickAway={() => setIsOpenDrop(false) }>
          <div className="select-drop">
              <p className="select-drop-category" onClick={handleClickOpen}> { selectItem }   <FaAngleDown /> </p> 
                
              {
              isOpenDrop &&   <div className="select-dropdown">       
              <div className="search-field">
                <input type="text" placeholder="Search here ...."/>
              </div>
              <ul className="search-result">
                {
                  data.map((item, index) => {
                    return  <li key={index} >
                    <Link to="" onClick={() => handleClose(index, item)} className={`${selectIndex === index ? "active" : ""}`} >{item} </Link>
                  </li>
                  })
                }     

              </ul>
           </div>
            }

          </div>

        </ClickAwayListener>
       
    </>
  )
}

export default SelectDrop














