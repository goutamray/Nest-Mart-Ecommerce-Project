
import { IoIosSend } from "react-icons/io";

import "./NewsLater.css"
const NewsLater = () => {
  return (
    <>
        <form className="subscribe-form">
          <IoIosSend className="send" />
          <input type="email" placeholder="Your emaill address" />
          <button type="submit"> Subscribe </button>
         </form>
    </>
  )
}

export default NewsLater; 


