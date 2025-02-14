import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Slider = () => {
    return (
        <div className="lg:w-[90%] w-[95%] mx-auto rounded-2xl overflow-hidden shadow-lg">
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          className="mySwiper relative"
        >
          <SwiperSlide>
            <div
              className="hero min-h-screen flex items-center justify-center"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://d33xpen3f57qeo.cloudfront.net/wp-content/uploads/sites/2/2015/03/17154827/study-help-finding-an-online-language-tutor.jpg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="hero-content text-center text-white">
                <div className="max-w-md">
                  <h1 className="text-5xl font-extrabold mb-4">Welcome to Learning</h1>
                  <p className="text-lg leading-relaxed mb-6">
                    Explore endless possibilities with personalized education. Join a community of learners and achieve your goals.
                  </p>
                  <Link to='/find_tutors/All'>
                  <button className="btn btn-primary px-8 py-3 text-lg rounded-full shadow-md hover:bg-blue-600 transition">
                    Get Started
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen flex items-center justify-center"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://oasesonline.com/wp-content/uploads/2017/01/AdobeStock_99777536-1024x683-1.jpeg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="hero-content text-center text-white">
                <div className="max-w-md">
                  <h1 className="text-5xl font-extrabold mb-4">Personalized Tutoring</h1>
                  <p className="text-lg leading-relaxed mb-6">
                    Achieve your academic and personal goals with tailored tutoring designed just for you.
                  </p>
                  <Link to='/find_tutors/All'>
                  <button className="btn btn-primary px-8 py-3 text-lg rounded-full shadow-md hover:bg-blue-600 transition">
                    Learn More
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen flex items-center justify-center"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://cdn.prod.website-files.com/650355070f73b7b0891ec935/6595826f27305f540ef6e5cc_6504bb16851001e8456c8989_63c8423c983faf514e3e5ec8_prepare.jpeg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="hero-content text-center text-white">
                <div className="max-w-md">
                  <h1 className="text-5xl font-extrabold mb-4">Prepare for Success</h1>
                  <p className="text-lg leading-relaxed mb-6">
                    Get the tools and support you need to excel in your studies and beyond.
                  </p>
                  <Link to='/find_tutors/All'>
                  <button className="btn btn-primary px-8 py-3 text-lg rounded-full shadow-md hover:bg-blue-600 transition">
                    Join Now
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-button-next text-white !text-3xl !font-bold"></div>
          <div className="swiper-button-prev text-white !text-3xl !font-bold"></div>
        </Swiper>
      </div>
      
    );
};

export default Slider;