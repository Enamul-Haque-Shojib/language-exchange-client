import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import useAxiosSecure from '../../hooks/useAxiosSecure';



const LatestTutor = () => {
    const axiosInstance = useAxiosSecure();
    const [images, setImages] = useState([]);

    console.log(images)
   
    useEffect(() =>{


        axiosInstance.get(`/users/img-tutor`)
        .then(res => {
          setImages(res.data.data);
      })
    
      
    },[]);



    return (
        <div className='border w-full my-20'>
                 
        <Marquee className='' autoFill={true}>
        {images.map((img) => (
                     <div key={img._id}
                     className="w-[400px] h-[300px] border flex justify-center items-center"
                     style={{ backgroundImage:`url(${img.tutorImage})`, backgroundPosition:`center`, backgroundRepeat:`no-repeat`, backgroundSize:'cover' }}
                 >
                 </div>
                ))
              }
          </Marquee>
    </div>
    );
};

export default LatestTutor;