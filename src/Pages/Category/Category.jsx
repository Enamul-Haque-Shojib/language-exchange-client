import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    // const {_id, title} = category;

    return (
        <div
        
          className="p-1 bg-white border rounded-lg shadow-sm cursor-pointer hover:shadow-md transition"
        >
          <Link to={`/find_tutors/${category}`}><h3 className=" text-gray-800 font-medium">{category}</h3></Link> 
        </div>
      );
};

export default Category;