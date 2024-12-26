import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
const SimilarTutorials = ({language, id}) => {
  const navigate = useNavigate();
    const[similarTutorials, setSimilarTutorials] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/tutorials?language=${language}`)
            .then(res => {
        
            setSimilarTutorials(res.data.data);
        })
    },[])
    return (
        <div>
            

            <Swiper slidesPerView={4} spaceBetween={10}>
            {similarTutorials.map(tutorial => (
              <SwiperSlide key={tutorial._id}>
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border" onClick={()=>{navigate(`/tutor_details/${tutorial._id}`)}}>
                  <div className="relative">
                    <img
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkEQZDzsYImwLosQHL9jGjds7t1qP30ZwgA&s'
                      alt="Teacher background"
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-28 left-4 w-16 h-16 bg-white rounded-full border-2 border-gray-200">
                      <img
                        src='https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'
                        alt="User"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-8 text-center px-4">
                    <h2 className="text-xl font-semibold text-gray-800">{tutorial.name}</h2>
                    <p className=" text-gray-600">{tutorial.title}</p>
                    <div className='flex justify-between items-center my-6'>
                  
                    <p className="font-medium text-blue-600 ">{tutorial.language}</p>
                    <p className="font-medium text-blue-600 ">${tutorial.price}</p>
                    </div>
                    
                  </div>
                </div>
              </SwiperSlide>
            ))} 
          </Swiper>

        </div>
    );
};

export default SimilarTutorials;