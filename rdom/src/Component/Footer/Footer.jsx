import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className="footer-main">
        <div className="footer-icons-main">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </div>
        <div className="footer-flex-main-contents">
        <div className="footer-first">
            <h3>ABOUT US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
          </div>
          <div className="footer-second">
            <h3>Newsletter</h3>
            <div><a href="">SUBSCRIBE</a></div>
          </div>
          <div className="footer-third">
            <h3>NEED HELP</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
          </div>
          <div className="footer-four">
            <h3>CONTACT US</h3>
            <div className="footer-four-for-margin">
              <div><i className="fa fa-map-marker" aria-hidden="true"></i><span><a href="">Gb road 123 london Uk</a></span>
              </div>
              <div><i className="fa fa-phone" aria-hidden="true"></i> <span><a href="">+01 12345678901</a></span></div>
              <div><i className="fa fa-envelope" aria-hidden="true"></i><span><a href="">demo@gmail.com</a></span></div>
            </div>
          </div>





        </div>

        </div>
        


      
    </div>
  )
}

export default Footer