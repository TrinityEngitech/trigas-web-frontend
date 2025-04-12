import React from "react";
import "../assets/css/Whatsapp.css";
import whatsapp from "../assets/image/whatsapp.png";

function Whatsapp() {
  return (
    <div  id="whatsapp">
      <a
        href="https://wa.me/8866210228?text=Hello!%20I'm%20contacting%20you%20through%20your%20website%20regarding%20your%20services."
        target="_blank"
         rel="noopener noreferrer"
        className="btn-whatsapp-pulse btn-whatsapp-pulse-border"
       
      >
        <img src={whatsapp} alt="" width={"50px"} />
      </a>
    </div>
  );
}

export default Whatsapp;
