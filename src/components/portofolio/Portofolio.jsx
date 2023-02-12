import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: "This is a portofolio item title",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "This is a portofolio item title",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "This is a portofolio item title",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "This is a portofolio item title",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "This is a portofolio item title",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "This is a portofolio item title",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
]


const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio_container">
        {
          data.map((item) => {
            return (
              <article className='portofolio_item'>
                <div className="portofolio_image">
                  <img src={item.image} alt="" />
                </div>
                <h3>{item.title}</h3>
                <div className="potofolio_cta">
                  <a href={item.github} className='btn' target='_blank'>Github</a>
                  <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portofolio
