import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const LanguageCategories = () => {

    const [teachersNumber, setTeachersNumber] = useState([]);

    
        useEffect(() =>{
            const fetchData = async () => {
                const response = await fetch(`http://localhost:5000/api/number_fields/teachers`);
    
                const data = await response.json();
    
                setTeachersNumber(data.data); 
        };
    
        fetchData();
        },[]);

        // const mappedArray = Object.entries(teachersNumber).map(([language, count]) => {
        //     return {title : language, count : count};
        //   });
          
          
    
    return (
        <div className='lg:w-[90%] w-[95%] mx-auto'>
            <div className='grid grid-cols-3 gap-7'>
            {
                teachersNumber?.map((category, index) =><div 
                key={index} 
                className=" bg-base-100 w-96 border">
                        <Link to={`/find_tutors/${category.title}`}>
                        
                        <div className="card-body" >
                    <div className='flex justify-between items-center'>
                        <div>
                        <h2 className="card-title">{category.title} tutors</h2>
                        <p>{category.count} teachers</p>
                        </div>
                    <i className="fa-solid fa-chevron-right"></i>
                    </div>
                 
                  
                </div>
                        </Link>  
              </div>)
            }
        </div>
        </div>
        
    );
};

export default LanguageCategories;