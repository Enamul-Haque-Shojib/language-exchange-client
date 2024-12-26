import React, { useEffect, useState } from 'react';

const Stats = () => {
    const [statsNumber, setStatsNumber] = useState({});

    useEffect(() =>{
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/api/number_fields/stats`);

            const data = await response.json();

            setStatsNumber(data?.data); 
    };

    fetchData();
    },[]);
    return (
        
        <div className='lg:w-[90%] w-[95%] mx-auto'>
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
            <div className="stat">
                <div className="stat-title text-center">Tutors</div>
                <div className="stat-value text-center">{statsNumber?.tutors}+</div>
                <div className="stat-desc text-center">Experienced tutors</div>
            </div>

            <div className="stat">
                <div className="stat-title text-center">Reviews</div>
                <div className="stat-value text-center">{statsNumber?.reviews}+</div>
                <div className="stat-desc text-center">5-star tutor reviews</div>
            </div>

            <div className="stat">
                <div className="stat-title text-center">Languages</div>
                <div className="stat-value text-center">{statsNumber?.languages}+</div>
                <div className="stat-desc text-center">Tutor nationalities</div>
            </div>

            <div className="stat">
                <div className="stat-title text-center">Students</div>
                <div className="stat-value text-center">{statsNumber?.students}+</div>
                <div className="stat-desc text-center">Students joined</div>
            </div>
        </div>
        </div>
        
    );
};

export default Stats;