import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TutorMoreLessons = ({id, email}) => {
    

    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/tutorials?email=${email}`)
                    .then(res => {
                        console.log(res.data.data)
                        const lessonsData = res?.data?.data.filter(lesson => lesson._id !=id)
                        setLessons(lessonsData);
                })
    },[])

    
    return (
        <div className="space-y-6">
      
        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson._id}
              to={`/tutor_details/${lesson._id}`}
              className="block"
            >
              <div className="border rounded-lg p-4 cursor-pointer hover:shadow-lg hover:border-blue-500 transition flex justify-between items-center">
                <div className="flex items-center gap-4">
            
                  <img
                    src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_16_9_1200x675/public/field_blog_entry_teaser_image/2020-01/language.jpg?itok=p2lBvqbD"
                    className="w-16 h-16 rounded-md object-cover"
                    alt="Lesson Thumbnail"
                  />
              
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {lesson.title}
                    </h4>
                    <p className="text-gray-500">{lesson.language}</p>
                  </div>
                </div>
            
                <p className="text-blue-600 font-bold text-lg">${lesson.price}</p>
              </div>
            </Link>
          ))}
        </div>
        </div>
    );
};

export default TutorMoreLessons;