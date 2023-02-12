import React from 'react'
import './about.css'
import Me from "../../assets/me3.png"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5 className=''>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5 className=''>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5 className=''>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>
             My Name is Dira Sanjaya Wardana. I am graduated in electrical engineering with a concentration in Electrical Power Engineering. I am proficiant with power electronics, energy conversion, microcontroller programing, and electronic system design. I never limiting my self to learn other things, such as telecomunications, programing, data processing, and controlling. I have good leadership, great time management and excited with challenging job.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
