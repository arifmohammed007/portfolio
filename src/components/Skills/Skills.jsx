import React from 'react'
import './Skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2> My Skills</h2>
      <div className='.contaner skills__container'>

      
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className='skills_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skill_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skill_details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skill_details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skill_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skill_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        
{/****************** Other Skills****************** */}

        
        <div className="other__skills">
          <h3>Other Skills</h3>
          <div className="skill_content">
            <article className='skills_details'>
              <BsPatchCheckFill className='skill_details-icon'/>
              <div>
                <h4>Ethical Hacking</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skill_details-icon'/>
              <div>
                <h4>Microsoft Office</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skill_details-icon'/>
              <div>
                <h4>Tally Prime</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skill_details-icon'/>
              <div>
                <h4>Shell Programming</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skill_details-icon'/>
              <div>
                <h4>Adobe Illustrator</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skill_details-icon'/>
              <div>
                <h4>Adobe Photoshop</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>






    </div>
    </section>
  )
}

export default Skills