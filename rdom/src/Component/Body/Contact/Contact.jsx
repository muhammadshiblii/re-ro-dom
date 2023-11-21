import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'


const Contact = () => {
  return (
    <div>
         <div className="conact-us">
                <h2>CONTACT FORM</h2>
              </div>
             
              <div className="map-section-main">
                <div className="map-section-map">

                  <h3>Contact US</h3>
                  <span><i className="fa fa-map-marker" id='logo' aria-hidden="true"></i></span>
                  <span>Address</span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem natus qui animi</p>

                  <span><i className="fa fa-phone-square" id='logo' aria-hidden="true"></i></span>
                  <span>Phone</span>
                  <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.+91 9656562371</p>

                  <span><i className="fa fa-envelope"  id='logo' aria-hidden="true"></i></span>
                  <span>Email</span>
                  <p> @info@gmail.com Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                  
                </div>
                <div className="map-contents">
                  <div><input type="text" placeholder="Name"></input></div>
                  <div><input type="text" placeholder="Email"></input></div>
                  <div><input type="text" placeholder="Phone"></input></div>
                  <div className="Message"><input type="text" placeholder="Message"></input></div>
                  <div className="map-links-only">
                    <a href="">SEND</a>
                  </div>
        
                </div>
        
              </div>
      
    </div>
  )
}

export default Contact