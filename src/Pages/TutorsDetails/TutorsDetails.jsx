import React, { useState } from 'react';

import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData, useParams } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TutorMoreLessons from './TutorMoreLessons';

import TutorDetailsStats from './TutorDetailsStats';
import SimilarTutorials from './SimilarTutorials';
import { toast } from 'react-toastify';
import axios from 'axios';
import TutorDetailsReviews from './TutorDetailsReviews';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const TutorsDetails = () => {
  const axiosInstance = useAxiosSecure();

  const {user, role} = useAuth();

  
  const dayss = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [isBooked, setIsBooked] = useState(false)
  

  const [dayOffset, setDayOffset] = useState(0);

  const getDate = (offset) => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return date.toLocaleDateString("en-US", {year: "numeric", month: "short", day: "numeric" });
  };

  const handlePrev = () => {
    if (dayOffset > 0) {
      setDayOffset((prev) => prev - 7);
    }
  };

  const handleNext = () => {
    setDayOffset((prev) => prev + 7);
  };


    const tutorDetailsData = useLoaderData();


    
    const {_id, email, tutorialImageURL,userImageURL, name, description, price,title, review, days,time,language, userBooked } = tutorDetailsData.data;

    

  const emailToSearch = user?.email;
const studentEntry = userBooked.find(student => student.email === emailToSearch);


 
    const handleBooked=()=>{
      axiosInstance.patch(`/tutorials/user-booked/${_id}`, {email:user.email})
      .then(res => {
      //  console.log(res.data);
       setIsBooked(true);
          toast.success('Booked successfully')
      })



    }
    

return (
    <div className="min-h-screen bg-white flex">
    
      <div className="w-[70%] p-6">
        
        <div className="bg-white rounded-lg p-6 mb-6 flex flex-col md:flex-row items-center gap-6 md:gap-8">
        
          <div className="flex-shrink-0">
            <img
              src={userImageURL}
              alt="Tutor"
              className="w-32 h-32 rounded-full shadow-lg"
            />
          </div>

          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Languages taught:</span> English, Spanish
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Languages spoken:</span> English, Spanish, French
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Native language:</span> English
            </p>
          </div>
        </div>


        <div className="bg-white rounded-lg p-6 mb-6">
        <Tabs className="flex flex-col">
          {/* Tab List */}
          <TabList className="flex justify-center md:justify-start border-b mb-4">
            <Tab className="px-6 py-2 text-gray-800 font-semibold cursor-pointer border-b-2 border-transparent hover:border-blue-500 transition focus:outline-none">
              About Me
            </Tab>
            <Tab className="px-6 py-2 text-gray-800 font-semibold cursor-pointer border-b-2 border-transparent hover:border-blue-500 transition focus:outline-none">
              About Lesson
            </Tab>
          </TabList>

    
            <div className="p-4 md:p-6 bg-gray-50 rounded-lg">
              <TabPanel>
                <h2 className="text-lg text-gray-700 leading-relaxed">
                  I’m a curious individual with a passion for learning and exploring new things in life. I enjoy spending my time outdoors, connecting with nature, and capturing the beauty of the world through photography. I’m always on the lookout for opportunities to expand my skills and embrace new experiences.
                </h2>
              </TabPanel>
              <TabPanel>
                <h2 className="text-lg text-gray-700 leading-relaxed">{description}</h2>
              </TabPanel>
            </div>
          </Tabs>
        </div>

        <div className="bg-white rounded-lg p-6 mb-6">
        <TutorDetailsStats email={email}></TutorDetailsStats>
        </div>

        <div className="bg-white rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">My More Tutorials</h3>
         <TutorMoreLessons id={_id} email={email}></TutorMoreLessons>
        </div>

          
        <div className="bg-white rounded-lg border p-6 mb-6">
  
  <h3 className="text-xl font-semibold text-gray-800 mb-4">Availability</h3>
  
  
  <div className="flex justify-between items-center mb-6">
    <button
      onClick={handlePrev}
      className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
    >
      &larr; Previous
    </button>
    <p className="text-lg font-semibold text-gray-700">{getDate(dayOffset)}</p>
    <button
      onClick={handleNext}
      className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
    >
      Next &rarr;
    </button>
  </div>
  
  
  <div className="overflow-x-auto">
    <div className="grid grid-cols-8 min-w-[600px] border border-gray-300 rounded-md">
      
      <div className="bg-blue-100 text-blue-900 font-bold p-3 text-center">Time</div>
      {dayss.map((day, index) => (
        <div key={index} className="bg-blue-100 text-blue-900 font-bold p-3 text-center">
          <p>{day}</p>
          <p className="text-sm text-gray-600">{getDate(dayOffset + index)}</p>
        </div>
      ))}
      
      
      <React.Fragment>
        <div className="p-3 font-bold text-gray-700 border-t border-gray-300"> {time} </div>
        {dayss.map((day, colIndex) => {
          const isAvailable = days.includes(day);
          return (
            <div
              key={colIndex}
              className={`p-3 text-center border-t border-l cursor-pointer ${
                isAvailable
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-500"
              } hover:bg-gray-200 transition`}
            >
              {isAvailable ? "Available" : ""}
            </div>
          );
        })}
      </React.Fragment>
    </div>
  </div>
</div>

    
        <div className="bg-white rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Reviews</h3>
          <TutorDetailsReviews id={_id} />
        </div>

        {
          user && (
            <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Similar Tutorials</h3>
          <SimilarTutorials language={language} id={_id}></SimilarTutorials>
          <div className='flex justify-center'>
          <Link to='/find_tutors/All'><button className="mt-4 w-full p-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600">
            Find More Tutors
          </button></Link>
          </div>
          
        </div>
          )
        }
        </div>
      <div className="w-[30%]  p-6 ">
        <div className="bg-white rounded-lg p-6 sticky top-20 shadow-md">
          <img
            src={tutorialImageURL}
            alt="Tutorial"
            className="rounded-md mb-4"
          />
          <h4 className="font-semibold text-lg">{title}</h4>
          <div className='flex justify-between items-center'>
          <p className="text-gray-600 mb-4">{language}</p>
          <p className="text-gray-600 mb-4">Review: {review}</p>
          </div>
          
          <p className="text-gray-600 mb-4">${price}</p>
          {
            role==='student'  && (
              <>
                  {
                    !(studentEntry && !studentEntry?.isDeleted) && <>
                    

                    {
                      isBooked ?  <></> : <> <button className="w-full py-2 mb-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600" onClick={handleBooked} >
                      Book Lesson
                        </button>

                        <button className="w-full py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300">
                        Save to Wishlist
                        </button>

                        </>
                    }
                    
                    
                    
                    
                    </>
                  }
              </>)
              }
         
        </div>
      </div>
    </div>
  );







};

export default TutorsDetails;