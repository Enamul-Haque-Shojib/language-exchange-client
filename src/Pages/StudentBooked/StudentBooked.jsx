import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const StudentBooked = () => {

  const axiosInstance = useAxiosSecure();
  const{user} = useAuth();
    const[students, setStudents] = useState([]);

    const loaderData = useLoaderData();
    const navigate = useNavigate();
    

    const {_id,tutorialImageURL, language,userBooked, title, price} = loaderData.data;

    useEffect(()=>{
      setStudents(userBooked);
    },[]);


  const hasDeletedFalse = students.some(student => student.isDeleted === false);

  const isButtonDisabled = hasDeletedFalse;
  

    const handleMyStudentDelete=(email)=>{

      axiosInstance.patch(`/tutorials/teacher-student-delete/${_id}`, {email})
      .then(res => {
      //  console.log(res.data);
      const newStudentData = students.filter(data => data.email != email)
      setStudents(newStudentData);
      toast.success('Your student deleted from the tutorial successfully');
      })

            
      
  }
    const handleDeleteTutorial=(id)=>{

      axiosInstance.delete(`/tutorials/${_id}`)
      .then(res => {
      //  console.log(res.data);
      toast.success('Your Tutorial deleted successfully');
      navigate(-1)
      })
            
    
  }


    return (
      <div className="space-y-12 lg:w-[95%] mx-auto p-10">
  
  <div className="flex flex-wrap justify-center items-center bg-gray-50 rounded-lg shadow-md p-6 gap-6">
        
        <div className="w-72 rounded-lg overflow-hidden shadow-lg">
          <img
            src={tutorialImageURL}
            alt="Tutorial"
          />
        </div>
    
  
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
          <h2 className="text-xl font-semibold text-gray-600 mb-1">Language: {language}</h2>
          <h3 className="text-2xl font-semibold text-blue-500">${price}</h3>
        </div>
      </div>

  
  <div className="bg-white rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold text-gray-800 border-b pb-4 mb-6">
      Students Booked
    </h2>
    <p className="text-lg text-red-600 font-medium mb-6">
      You can only delete a student if they have left the tutorial.
    </p>

    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <tr>
            <th className="p-4 text-sm uppercase tracking-wide">Student</th>
            <th className="p-4 text-sm uppercase tracking-wide text-center">Status</th>
            <th className="p-4 text-sm uppercase tracking-wide text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition border-b last:border-0"
            >
              <td className="p-4 text-gray-800 text-center text-xl">{student.email}</td>

          
              <td className="p-4 text-center">
                {student.isCompleted ? (
                  <p className="text-green-600 text-lg font-semibold">Completed</p>
                ) : (
                  <p className="text-yellow-500 text-lg font-semibold">
                    In Progress
                  </p>
                )}
                {student.isDeleted && (
                  <p className="text-red-500 text-lg font-semibold">
                    Left from Tutorial
                  </p>
                )}
              </td>

        
              <td className="p-4 flex justify-center">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={!student.isDeleted}
                  onClick={() => handleMyStudentDelete(student.email)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  <div className="flex flex-col items-center space-y-4">
    <p className="text-lg text-red-500 text-center max-w-lg">
      If at least one student is still in progress, you cannot delete your
      tutorial. If they leave than you can delete
    </p>
    <button
      className="bg-red-500 text-white px-6 py-3 text-lg rounded-lg hover:bg-red-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      disabled={isButtonDisabled}
      onClick={() => handleDeleteTutorial(_id)}
    >
      Delete Tutorial
    </button>
  </div>
</div>
   
    );
};

export default StudentBooked;