import React from 'react';
import logo from '../assets/img/PXTCH0.png';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__container container">
            <div className="footer__logo">
               <a href="/" className="header__logo">
                  <img
                     src={logo}
                     alt="Pxtch - Home"
                     className="header__logo__image"
                  />
                  <span className="header__logo__text">  </span>
               </a>
               <p>PATCH located in downtown Lagos</p>{' '}
               <span>+234-9029977665</span>
            </div>
            <nav className="footer__nav">
               <div className="footer__nav__nav">
                  <h4>Contact Us</h4>
                  <ul className="footer__nav--list">
                     <li>
                        <a href="/">Contact</a>
                     </li>
                     <li>
                        <a href="/">Support</a>
                     </li>
                     <li>
                        <a href="/">Sponsorships</a>
                     </li>
                  </ul> 
               </div> 
            </nav>
         </div>
      </footer>
   );
};

export default Footer;