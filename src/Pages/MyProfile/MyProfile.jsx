import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


import './MyProfile.css'

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Profile from './profile';
import AboutMe from './AboutMe';
import useAuth from '../../hooks/useAuth';



const MyProfile = () => {
    const {user} = useAuth();


return (
  <div className="min-h-screen bg-gray-50">
    
    <Helmet>
      <title>Profile page</title>
    </Helmet>

    <div className="lg:w-[90%] w-[95%] mx-auto py-10">
      
              <div className="flex items-center justify-center space-x-6">
                <img
                  src={user?.photoURL}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border border-gray-300"
                />
                <div>
                  <h1 className='text-3xl font-bold'>{user?.displayName}</h1>
                </div>
                
              </div>

      
      <Tabs className="lg:flex bg-white shadow-lg rounded-lg overflow-hidden">
        
        <TabList className="lg:w-1/4 bg-gray-100 border-r">
          <Tab className="py-4 px-6 text-lg font-medium text-gray-800 border-b hover:bg-gray-200 focus:outline-none focus:bg-gray-300">
            My Profile
          </Tab>
          <Tab className="py-4 px-6 text-lg font-medium text-gray-800 border-b hover:bg-gray-200 focus:outline-none focus:bg-gray-300">
            About Me
          </Tab>
        </TabList>

      
        <div className="lg:w-3/4 p-6 bg-gray-50">
          <TabPanel>
            <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
            
            <Profile></Profile>            
          </TabPanel>
          <TabPanel>
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <AboutMe></AboutMe>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  </div>
);

};

export default MyProfile;