import React from 'react';
import { Link } from 'react-router-dom';

const Tutor = ({tutor}) => {
    const {_id, userImageURL, name, price, language, title, review,  }  = tutor;
    

    return (
        <div className="my-6">
        <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row items-center p-4 lg:p-6 gap-4">
        
            <img
              src={userImageURL}
              alt={name}
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full shadow-lg object-cover"
            />
            <div className="flex-1">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800">{name}</h1>
              <p className="text-gray-600 text-md lg:text-lg mt-2">{title}</p>
              <p className="text-gray-500 mt-1">Language: <span className="font-medium">{language}</span></p>
              </div>
              <div className="flex-1">
              <p className="text-gray-500 mt-1">Price: <span className="font-semibold text-green-600">${price}</span></p>
              <p className="text-gray-500 mt-1">Review: <span className="font-medium text-blue-600">{review}</span></p>
            </div>
      
          
            <div>
              <Link to={`/tutor_details/${_id}`}>
                <button className="bg-blue-600 text-white font-bold px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Tutor;