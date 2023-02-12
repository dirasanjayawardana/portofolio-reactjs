import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience_conatiner">
        <div className="experience1">
          <h3>Familiar With</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div className="">
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div className="">
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div className="">
                <h4>Java Script</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div className="">
                <h4>TailwindCSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div className="">
                <h4>ReactJs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experience2">
          <h3>Porificient in</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div className="">
                <h4>Power Electronics</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div className="">
                <h4>Internet of Things</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div className="">
                <h4>System Control</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div className="">
                <h4>Microsoft Office</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div className="">
                <h4>AutoCAD</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div className="">
                <h4>Matlab</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div className="">
                <h4>PLC</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div className="">
                <h4>Microcontroller</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
