import React from 'react'
import './About.css'  
import ME from '../../assets/aboutimage.JPG'
import { AiFillCode } from 'react-icons/ai'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { FaUserGraduate } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container" >
        <div className="about__me" >
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
        </div>
        </div> 
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <AiFillCode className='about__icon'/>
              <h5> Programming</h5>
              <small>5+ Languages</small>
            </article>
            <article className='about__card'>
              <AiFillSafetyCertificate className='about__icon' />
              <h5> Certificates</h5>
              <small>3+ Certificates</small>
            </article>
            <article className='about__card'>
              <FaUserGraduate className='about__icon' />
              <h5> Graduation</h5>
              <small>BCA Graduate</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ratione consequuntur a rerum. Consequatur illum maxime perspiciatis sint dicta ducimus, cumque natus error nostrum inventore sequi praesentium provident beatae architecto?
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
      </div>
      </div>

    </section>
  )
}

export default About