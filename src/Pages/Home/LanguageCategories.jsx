import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const LanguageCategories = () => {

    const [teachersNumber, setTeachersNumber] = useState([]);

    
        useEffect(() =>{
            const fetchData = async () => {
                const response = await fetch(`https://language-exchange-server-mu.vercel.app/api/number_fields/teachers`);
    
                const data = await response.json();
    
                setTeachersNumber(data.data); 
        };
    
        fetchData();
        },[]);

        // const mappedArray = Object.entries(teachersNumber).map(([language, count]) => {
        //     return {title : language, count : count};
        //   });
          
          
    
    return (
        <div className="lg:w-[90%] w-[95%] mx-auto my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teachersNumber?.map((category, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <Link to={`/find_tutors/${category.title}`} className="block h-full">
                <div className="card-body p-6 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {category.title} Tutors
                      </h2>
                      <p className="text-gray-500">{category.count} Teachers</p>
                    </div>
                    <i className="fa-solid fa-chevron-right text-gray-400 text-xl"></i>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
        
    );
};

export default LanguageCategories;