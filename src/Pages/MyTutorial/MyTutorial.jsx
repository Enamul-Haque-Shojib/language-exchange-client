import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MyTutorial = ({tutorial}) => {
    const {_id, tutorialImageURL, title, days, time, language}  = tutorial;

   

    return (
      <tr className="hover:bg-gray-50 transition">
      {/* Tutorials */}
      <td className="p-4">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={tutorialImageURL}
                alt="Tutorial"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-800 text-lg">{title}</div>
            <div className="text-sm text-gray-500">{language}</div>
          </div>
        </div>
      </td>
    
      {/* Days */}
      <td className="p-4 text-center">
        <div className="flex flex-wrap justify-center gap-2">
          {days.map((day, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 font-medium px-3 py-1 rounded-full text-sm"
            >
              {day}
            </span>
          ))}
        </div>
      </td>
    
      {/* Time */}
      <td className="p-4 text-center">
        <span className="font-semibold text-gray-700">{time}</span>
      </td>
    
      {/* Booked */}
      <td className="p-4 text-center">
        <Link to={`/student_booked/${_id}`}>
          <button className="btn btn-primary text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
            View Students
          </button>
        </Link>
      </td>
    
      {/* Action */}
      <td className="p-4 text-center">
        <Link to={`/update_tutorial/${_id}`}>
          <button className="btn btn-success text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
            Update
          </button>
        </Link>
      </td>
    </tr>
    
    );
};

export default MyTutorial;