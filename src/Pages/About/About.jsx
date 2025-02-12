import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-base-200 py-12 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src="https://media.istockphoto.com/id/1288092444/photo/student-using-laptop-having-online-class-with-teacher.jpg?s=612x612&w=0&k=20&c=hI_apluBFBOEzizTYeXzFd26r9Z6QyawI8_Ta9-_sDM="
                alt="language exchange"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
    
            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Welcome to Language Exchange Haven</h2>
              <p className="text-lg">
                Our platform connects language learners and tutors worldwide, creating a vibrant community where students
                can enhance their skills through immersive conversations and interactive lessons. Whether you're a tutor
                eager to share your expertise or a student looking to master a new language, we provide the perfect
                environment for meaningful learning experiences.
              </p>
    
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="text-lg">
                Our mission is to break language barriers and bring people together through education. By offering
                high-quality tutoring services and fostering cultural exchange, we aim to make language learning engaging,
                accessible, and inspiring for everyone.
              </p>
              <blockquote className="text-gray-500 italic">
                "Connecting tutors and students worldwide for a seamless language learning experience."
              </blockquote>
    
              <div className="divider"></div>
    
              <Link to="/find_tutors/All">
                <button className="btn btn-primary flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L4.2 5M7 13l-1.5 7h12l-1.5-7M7 13H4.5m9 0h4.5"
                    />
                  </svg>
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
};

export default About;