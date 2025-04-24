import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const InProgressBookedTutorials = () => {

  const axiosInstance = useAxiosSecure();

    const {user} = useAuth()
    const navigate = useNavigate();
    
    const[tutorials, setTutorials] = useState([])

    
    useEffect(() => {

      axiosInstance.get(`/tutorials/student-all-booked/booked?userBooked.email=${user?.email}&userBooked.isCompleted=false`)
      .then(res => {
        setTutorials(res.data.data);
    })

    }, []);


    const handleMyBookedTutorialDelete=(id)=>{

      axiosInstance.patch(`/tutorials/student-booked-delete/${id}`,{email: user?.email})
      .then(res => {
        const newBookedData = tutorials.filter(data => data._id != id)
        setTutorials(newBookedData);
        toast.success('You successfully left the tutorial');
    })
            
      
    }

    const handleMyBookedTutorialComplete=(id)=>{


      axiosInstance.patch(`/tutorials/student-booked-complete/${id}`, {email: user?.email})
      .then(res => {
        
        const newBookedData = tutorials.filter(data => data._id != id)
        setTutorials(newBookedData);
        toast.success('You successfully completed the tutorial');
      })
      
            
        
            
    }



    return (
        <div className="bg-gray-50 py-5">
        <div className="lg:w-[90%] w-[95%] mx-auto space-y-6">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial._id}
              className="bg-white border rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6"
            >
              {/* Left Section - Image and Details */}
              <div className="flex items-center gap-6 w-[30%] md:w-2/3">
                {/* Tutorial Image */}
                <img
                  src={tutorial.userImageURL}
                  alt={tutorial.name}
                  className="rounded-lg w-24 h-24 object-cover"
                />
      
                {/* Tutorial Information */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{tutorial.name}</h3>
                  <p className="text-gray-400 font-bold">{tutorial.title}</p>
                  <p className="text-gray-600">{tutorial.language}</p>
                  
                </div>
              </div>

              <p className="text-sm text-gray-500">
                  <strong>Price:</strong> {tutorial.price}
                </p>
              <p className="text-sm text-gray-500">
                  <strong>Review:</strong> {tutorial.review}
                </p>

            
              <div className="flex flex-col gap-4 w-[55%]">
                {/* Days */}
                <div className="flex flex-wrap gap-2">
                  {tutorial.days.map((day, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {day}
                    </span>
                  ))}
                </div>
      
            
                <p className="text-sm text-gray-500">
                  <strong>Time:</strong> {tutorial.time}
                </p>
    
              </div>


              <div className="flex flex-col gap-y-5 items-center justify-between">
              <button
                    className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm hover:bg-red-200 transition"
                    onClick={() => handleMyBookedTutorialDelete(tutorial._id)}
                  >
                    Leave
                  </button>
                  <button
                      className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm hover:bg-green-200 transition"
                      onClick={() => handleMyBookedTutorialComplete(tutorial._id)}
                    >
                      Complete
                    </button>
                  <button
                    className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm hover:bg-green-200 transition"
                    onClick={() => navigate(`/reviews_comments/${tutorial._id}`)}
                  >
                    Review
                  </button>
                  
                </div>




            </div>
          ))}
        </div>
      </div>
      
    );
};

export default InProgressBookedTutorials;