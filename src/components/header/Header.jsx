import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Me from '../../assets/me.png'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Dira Sanjaya Wardana</h1>
        <h5 className="text-light">Electrical Engineering</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <div className="me-image">
            <img src={Me} alt="Me" />
            </div>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
