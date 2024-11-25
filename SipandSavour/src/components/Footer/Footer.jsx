import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className="footer-content">
      <div className="footer-content-left">
       <img src={assets.logo} alt="" />
       <p>"Sip & Savour is dedicated to delivering a wide range of delicious food and refreshing drinks right to your doorstep. Whether you're craving something savory, sweet, or thirst-quenching, our menu offers something for everyone. Experience the joy of great taste with every bite and sip!"</p>
       <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
       </div>
      </div>
      <div className="footer-content-center">
         <h2>COMPANY</h2>
         <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
         </ul>
      </div>
      <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>+91 9322532716</li>
          <li>rahulpradipchoudhary9860@gmail.com</li>
        </ul>
      </div>
      </div>  
      <hr />
      <p className='footer-copyright'>&copy; 2024 Sip & Savour. All rights reserved.</p>
    </div>
  )
}

export default Footer