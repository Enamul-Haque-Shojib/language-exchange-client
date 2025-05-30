import axios from 'axios';
import React, { useEffect, useState } from 'react';


import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const FeedBack = () => {
  const axiosInstance = useAxiosSecure();
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {

      axiosInstance.get(`/users/feedback`)
      .then(res => {
        setFeedbacks(res.data.data);
    })



    },[])
    return (
        
        <div className="my-[100px] lg:w-[90%] mx-auto">
        <h1 className="text-center text-4xl font-bold mb-10 text-gray-800">Feedback</h1>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          virtual
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {feedbacks.map((feedback) => (
            <SwiperSlide key={feedback._id}>
              <div className="flex flex-col items-center justify-evenly w-full h-[350px] p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white">
                <img
                  src={feedback.feedbackUserPhoto}
                  alt={`${feedback.name}'s photo`}
                  className="w-[80px] h-[80px] rounded-full shadow-md"
                />
                <h2 className="text-xl font-semibold text-gray-700 text-center">{feedback.name}</h2>
                <p className="text-sm text-blue-600 italic text-center">{feedback.lifeStyle}</p>
                <p className="text-gray-600 text-center">{feedback.feedBack}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      
      
    );
};

export default FeedBack;