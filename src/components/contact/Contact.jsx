import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8u0ufpi', 'template_qmsr52h', form.current, {
        publicKey: 'w_hLHahy1rYnyAuG1',
      })
      e.target.reset()
  };
  return (
    <section className='contact section' id="contact">
       <h2 className='section__title'>Get in touch</h2>
      <span className='section__subtitle'>Contact Me</span>

        <div className='contact__container container grid'>

          <div className='contact__content'>
           <h3 className='contact__title'>Talk to me</h3> 
            <div className='contact__info'>
              <div className='contact__card'>
                <i className='bx bx-mail-send contact__card-icon'></i>

                <h3 className='contact__card-title'>Email</h3>
                <span className='contact__card-data'>shashankrajashekar22@gmail.com</span>
                <a href="mailto:shashankrajashekar22@gmail.com
                      ?subject=Subject%20Here" className='contact__button' target='_blank' rel='noreferrer'>Write me {""}
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>

                </a>
              </div>
              <div className='contact__card'>
                <i className='bx bxl-whatsapp contact__card-icon'></i>

                <h3 className='contact__card-title'>Whatsapp</h3>
                <span className='contact__card-data'>9019054196</span>

                <a href='https://wa.me/9019054196?text=Hello%20there%21' className='contact__button' target='_blank' rel='noreferrer'>Write me{""} 
                  <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                </a>
              </div>
              <div className='contact__card'>
              <i class='bx bx-message-rounded contact__card-icon'></i>
                <h3 className='contact__card-title'>SMS</h3>
                <span className='contact__card-data'>9019054196</span>

                <a href="sms:+9019054196&body=Hello%20there" className='contact__button' target='_blank' rel='noreferrer'>Write me{""} 
                  <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                </a>
              </div>
             
            </div>
          </div>

          <div className='contact__content'>
         
            <h3 className='contact__title'>Write me your project</h3>
         
           <form ref={form} onSubmit={sendEmail} className='contact__form'  
            >
              <div className='contact__form-div'>
                <label className='contact__form-tag'>Name</label>
                <input type='text' name='name' className='contact__form-input' placeholder='Insert your name'/>
              </div>
              <div className='contact__form-div'>
                <label className='contact__form-tag'>Mail</label>
                <input type='email' name='email' className='contact__form-input' placeholder='Insert your email'/>
              </div>
              <div className='contact__form-div contact__form-area'>
                <label className='contact__form-tag'>Project</label>
                 <textarea name="project"  cols="30" rows="10" className='contact__form-input' placeholder='Write your project'>
                 </textarea>
              </div>
              <button className='button button--flex'>Send Message
               <svg
          className="button__icon" // Corrected to className (React uses className)
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 122.56 122.88"
          fill="var(--icon-color, White)" >
          {/* Path of the SVG icon */}
          <path
            className="cls-1" // Corrected to className (React uses className)
            d="M2.33,44.58,117.33.37a3.63,3.63,0,0,1,5,4.56l-44,115.61h0a3.63,3.63,0,0,1-6.67.28L53.93,84.14,89.12,33.77,38.85,68.86,2.06,51.24a3.63,3.63,0,0,1,.27-6.66Z"
          />
               </svg>
              </button>
            </form>
          </div>
            
           
          
        </div>
    </section>
  )
}

export default Contact