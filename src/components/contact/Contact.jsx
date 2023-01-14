import React from 'react'
import './Contact.css'
import { TbMail } from 'react-icons/tb'
import { AiFillInstagram } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
            <TbMail className='contact__option-icon'/>
            <h4>Email</h4>
          <h5>arifmohammed2009@gmail.com</h5>
          <a href="mailto:arifmohammed2009@gmail.com" target='_blank'>Send a Message</a>
        </article>
        
          <article className='contact__option'>
            <AiFillInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>_a.ri.f</h5>
            <a href="https://instagram.com " target='_blank'>Visit Profile</a>
          </article>
          
        
          <article className='contact__option'>
            < BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+968 91063519</h5>
            <a href="https://wa.me/+96891063519" target='_blank'>Direct Message</a>
          </article>

        </div>
        {/*End of Contact Options*/}
        <h2 className='fill__form'>Fill out the form</h2>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>  
      
    </section>
  )
}

export default Contact