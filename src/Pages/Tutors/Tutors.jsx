import React from 'react';
import Tutor from '../Tutor/Tutor';

const Tutors = ({tutors}) => {

    

    return(
            <div className="w-full bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4 mb-4">
                List
            </h2>
            <div className=''>
                
                        {tutors.map((tutor) => (
                            <Tutor key={tutor._id} tutor={tutor} />
                        ))}
                   
            </div>
        </div>
    );
};

export default Tutors;