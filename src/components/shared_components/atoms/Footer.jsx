import React from "react";
import Buttons from "./Buttons";
import './Footer.css';

function Footer() {
  return (
    
    <footer className="footer"
        style={{
          left: "0px",
          position: "fixed",
          width: "100%",
          bottom:"0",
          height: "50px",
          background: "#444444 0% 0% no-repeat padding-box",
         
        }}
        >
           <div  > 

<button className="cla">Delete</button>
<button className="clas">Edit</button>
            </div> 
        </footer>
  );
}

export default Footer;