import React from 'react';


import InProgressBookedTutorials from './InProgressBookedTutorials';
import CompletedBookedTutorials from './CompletedBookedTutorials';
import { Helmet } from 'react-helmet-async';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useAuth from '../../hooks/useAuth';


const MyBookedTutors = () => {
    const {user} = useAuth();

    return (
      
<div className="min-h-screen bg-gray-50">
  {/* Page Title */}
  <Helmet>
    <title>My Booked Page</title>
  </Helmet>

  <div className="lg:w-[90%] w-[95%] mx-auto py-10">
    {/* Header Section */}
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold text-gray-800">My Booked Tutorials</h1>
      <p className="text-gray-600 mt-2 text-lg">Manage your learning journey effortlessly.</p>
    </div>

    {/* Tabs Section */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Tabs className="flex flex-col lg:flex-row">
        {/* Tab List */}
        <TabList className="bg-gray-100 lg:w-1/4 border-r">
          <Tab className="py-4 px-6 text-lg font-medium text-gray-800 border-b hover:bg-gray-200 focus:bg-blue-500 focus:text-white transition">
            In Progress
          </Tab>
          <Tab className="py-4 px-6 text-lg font-medium text-gray-800 border-b hover:bg-gray-200 focus:bg-blue-500 focus:text-white transition">
            Completed
          </Tab>
        </TabList>

        {/* Tab Panels */}
        <div className="lg:w-3/4 p-6 bg-gray-50">
          <TabPanel>
            <h2 className="text-2xl font-semibold mb-6">In Progress Tutorials</h2>
            <InProgressBookedTutorials />
          </TabPanel>
          <TabPanel>
            <h2 className="text-2xl font-semibold mb-6">Completed Tutorials</h2>
            <CompletedBookedTutorials />
          </TabPanel>
        </div>
      </Tabs>
    </div>
    </div>
    </div>
    );
};

export default MyBookedTutors;