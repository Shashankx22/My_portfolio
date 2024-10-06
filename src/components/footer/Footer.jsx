import React from 'react';
import "./footer.css"
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Shashank B R</h1>
            <ul className='footer__list'>
                     <a href='#home' className='footer__link'>Portfolio</a>
             </ul>
            <span className='footer__copy'> Thank you for visiting my portfolio. For inquiries or collaborations, please don’t hesitate to contact me!</span>
        </div>
    </footer>
   )
}

export default Footer