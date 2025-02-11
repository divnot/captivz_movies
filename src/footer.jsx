import React from "react";

function Footer(){
    return (
        <>
      <footer>
        <div  className=" three">
            <div>
                <ul className="foo">
                    <li  style={{width:"50rem"}} className="foot"><img src="https://images.squarespace-cdn.com/content/v1/5f4dbb9a476f95001ff9bf1d/0aa60175-1614-4599-8fa1-08fe8b1d760a/Captivz+Logo" alt="no image"/></li>
                    
                </ul>

            </div>
            <div>
                <ul  className="foo">
                    <li style={{fontVariant:"small-caps" , textDecoration:"underline"}} className="foot"><strong>Support</strong></li>
                    <li  className="foot">Contact</li>
                    <li  className="foot">Rent</li>
                    <li  className="foot">FeedBack</li>
                    <li  className="foot">FAQ</li>
                </ul>

            </div>

            <div>
            <h1 style={{fontVariant:"small-caps" , textDecoration:"underline"}} className="foot"><strong>Contact</strong></h1>
                <ul  className="foo1">
               { /* <li style={{fontVariant:"small-caps" , textDecoration:"underline"}} className="foot"><strong>Contact</strong></li>*/}
                    <li  className="foot"><a href="mailto:divyansh377590@gmail.com" ><img className="temp" src="src\images\linkedin.png" alt="no image" /></a></li>
                    <li  className="foot"> <a href="tel:238289329" ><img  className="temp" src="src\images\app.png" alt="no image" /></a></li>
                    <li  className="foot"> <a href="tel:238289329" ><img  className="temp" src="src\images\gmail.png" alt="no image" /></a></li>
                    <li style={{width:"6rem", height:"5rem"}}  className="foot"><img  className="temp" src="src\images\facebook.png" alt="no post" /></li>
                    <li  className="foot"> <a href="tel:238289329" ><img  className="temp" src="src\images\phone-call.png" alt="no image" /></a></li>
                    <li  className="foot"> <a href="tel:238289329" ><img  className="temp" src="src\images\github.png" alt="no image" /></a></li>
                    <li  className="foot"> <a href="tel:238289329" ><img  className="temp" src="src\images\twitter.png" alt="no image" /></a></li>
                   
                </ul>

            </div>

        </div>
      </footer>
        </>
    )
}
export default Footer;