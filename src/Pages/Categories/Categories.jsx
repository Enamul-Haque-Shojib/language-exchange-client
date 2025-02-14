import React from 'react';

import Category from '../Category/Category';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Categories = () => {
    const {categories} = useAuth();

    return (
        <div className="bg-gray-100 p-5 rounded-lg shadow-lg lg:w-[20%] w-full sticky top-20">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Categories</h2>
          <div className="flex flex-col gap-4">
            
              <div
              
                  className="p-1 bg-white border rounded-lg shadow-sm cursor-pointer hover:shadow-md transition "
                >
                 <Link to='/find_tutors/All'><h3 className="text-gray-800 font-medium">All</h3></Link> 
                </div>
            {categories.map((category, index) => (
              <Category
                key={index}
                category={category}
              
              />
            ))}
          </div>
        </div>
      );
};

export default Categories;