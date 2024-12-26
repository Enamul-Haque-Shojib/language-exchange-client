import React, { useEffect, useState } from 'react';

import axios from 'axios';

const TutorDetailsReviews = ({id}) => {
    const[reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => {
        axios.get(`http://localhost:5000/api/tutorials/${id}`)
            .then(res => {
            setReviews(res.data.data.userReview);
        })
    },[])
    return (
        
  
  <div className="space-y-6">
    {reviews.map((review, index) => (
      <div
        key={index}
        className="border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300"
      >
        
        <div className="flex items-center space-x-4 mb-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe9NZZk7nUE_anJir2Scf7tsqMHRdEpCbJg&s"
            alt="User"
            className="w-14 h-14 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h4 className="text-lg font-semibold text-gray-800">{review.name}</h4>
            <p className="text-sm text-gray-500">Student</p>
          </div>
        </div>

      
        <p className="text-gray-700 mb-3">{review.comment}</p>

    
        <p className="text-sm text-gray-500">Reviewed on: 12/24/2024</p>
      </div>
    ))}
  </div>

    );
};

export default TutorDetailsReviews;