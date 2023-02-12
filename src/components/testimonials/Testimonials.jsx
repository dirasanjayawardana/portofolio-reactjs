import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    avatar: AVTR1,
    name: "Dira Sanjaya",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, fuga id reprehenderit voluptas ipsum non aspernatur consequuntur amet mollitia dolores ratione molestias repellat quaerat dignissimos sapiente a quasi, iste nemo.",
  },
  {
    avatar: AVTR2,
    name: "Dira Sanjaya",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, fuga id reprehenderit voluptas ipsum non aspernatur consequuntur amet mollitia dolores ratione molestias repellat quaerat dignissimos sapiente a quasi, iste nemo.",
  },
  {
    avatar: AVTR3,
    name: "Dira Sanjaya",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, fuga id reprehenderit voluptas ipsum non aspernatur consequuntur amet mollitia dolores ratione molestias repellat quaerat dignissimos sapiente a quasi, iste nemo.",
  },
  {
    avatar: AVTR4,
    name: "Dira Sanjaya",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, fuga id reprehenderit voluptas ipsum non aspernatur consequuntur amet mollitia dolores ratione molestias repellat quaerat dignissimos sapiente a quasi, iste nemo.",
  },
]


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {
          data.map((item) => {
            return (
              <SwiperSlide className="testimonials">
                <div className="client-avatar">
                  <img src={item.avatar} alt="avatar1" />
                </div>
                <h5 className="client_name">{item.name}</h5>
                <small className="client_review">
                  {item.review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
