import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TutorDetailsStats = ({email}) => {

    
    const [countTutorDetails, setCountTutorDetails] = useState({})

    useEffect(() => {
        axios.get(`https://language-exchange-server-mu.vercel.app/api/number_fields/teacher_details/${email}`)
        .then(res => {
            setCountTutorDetails(res.data.data)
        })
    },[])

    
    return (
        <div>
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
        <div className="stat">
            <div className="stat-title text-center">Reviews</div>
            <div className="stat-value text-center">{countTutorDetails.countReviews}</div>
            <div className="stat-desc text-center">My Average Reviews</div>
        </div>

        <div className="stat">
            <div className="stat-title text-center">Students</div>
            <div className="stat-value text-center">{countTutorDetails.countStudents}</div>
            <div className="stat-desc text-center">My Tutorials Student</div>
        </div>

        <div className="stat">
            <div className="stat-title text-center">Lesson</div>
            <div className="stat-value text-center">{countTutorDetails.lessonsNumber}</div>
            <div className="stat-desc text-center">My Lessons</div>
        </div>
        <div className="stat">
            <div className="stat-title text-center">Languages</div>
            <div className="stat-value text-center">{countTutorDetails.countLanguages}</div>
            <div className="stat-desc text-center">My Languages</div>
        </div>

        
    </div>
    </div>
    );
};

export default TutorDetailsStats;