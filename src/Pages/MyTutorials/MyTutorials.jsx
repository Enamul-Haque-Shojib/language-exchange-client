import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyTutorial from '../MyTutorial/MyTutorial';

const MyTutorials = () => {
    const {user, loading} = useAuth();
    
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
                const response = await fetch(`http://localhost:5000/api/tutorials?email=${user?.email}`);

                const data = await response.json();
    
                setTutorials(data.data);
            
        };
    
        if(user?.email) fetchData();
    }, [user?.email]);
    
  
    
   

    return (
        <div className="w-full bg-white shadow-lg rounded-lg p-10">
        <h2 className="text-3xl font-bold text-gray-800 border-b pb-4 mb-6 text-center">
          Tutorial List
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left">
            <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
              <tr>
                <th className="p-4 text-sm uppercase tracking-wide">Tutorials</th>
                <th className="p-4 text-sm uppercase tracking-wide text-center">Days</th>
                <th className="p-4 text-sm uppercase tracking-wide text-center">Time</th>
                <th className="p-4 text-sm uppercase tracking-wide text-center">Booked</th>
                <th className="p-4 text-sm uppercase tracking-wide text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {tutorials.map((tutorial) => (
                <MyTutorial key={tutorial._id} tutorial={tutorial} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    );
};

export default MyTutorials;