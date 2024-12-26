import axios from 'axios';
import React, { useEffect, useState } from 'react';


import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const FeedBack = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users/feedback`)
            .then(res => {
        
                setFeedbacks(res.data.data);
        })
    },[])
    return (
        <div className='my-[100px]'>
            <h1 className='text-center text-4xl font-bold mb-5'>FeedBack</h1>
             <Swiper
                modules={[Virtual, Navigation, Pagination]}
                spaceBetween={50}
               
                navigation={true}
                virtual
                breakpoints={{ 
                    640: {
                    slidesPerView: 2,
                    },
            
                    768: {
                    slidesPerView: 3,
                    },
        
                    1024: {
                    slidesPerView: 3,
                    },
                }}
            >
        
        {
            feedbacks.map(feedback => (
                <SwiperSlide key={feedback._id}>
                    <div className="hero ">
                            <div className="hero-content flex-col justify-center items-center border" >
                                <img
                                src={feedback.feedbackUserPhoto}
                                className="w-[80px] h-[80px] rounded-full shadow-2xl " />
                                
                                <h1 className="text-xl font-bold">{feedback.name}</h1>
                                <p className=''>{feedback.lifeStyle}</p>
                                <p className="">
                                    {feedback.feedBack}
                                </p>
                        
                                
                            </div>
                        </div>
                </SwiperSlide> 
            ))
        }

           
         
    
      </Swiper>
        </div>
    );
};

export default FeedBack;