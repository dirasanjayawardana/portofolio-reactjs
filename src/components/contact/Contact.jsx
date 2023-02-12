import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cbyx6tf', 'template_3k0pa3w', form.current, 'fRSprSPDFGcvEsSf0')
      .then((result) => {
        alert("Message has been sent");
      }, (error) => {
        alert("Message not sent, try again");
      });
    e.target.reset();
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_group">
          <article className="contact_option">
            <MdOutlineEmail className='contact_icon' />
            <h4>Email</h4>
            <h5>dirawardana.dw@gmail.com</h5>
            <a href="mailto:dirawardana.dw@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_icon' />
            <h4>Messenger</h4>
            <h5>dirasanjayawardana</h5>
            <a href="mailto:dirawardana.dw@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_icon' />
            <h4>WhatsApp</h4>
            <h5>+6285277638079</h5>
            <a href="https://api.whatsapp.com/send?phone=6285277638079" target="_blank">Send a message</a>
          </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
