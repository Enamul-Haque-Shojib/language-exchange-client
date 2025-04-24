import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import SocialLogin from '../shared/SocialLogin';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Register = () => {
  const axiosInstance = useAxiosSecure();
    const { createUser, updateUserProfile,  setRole} = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false); 
    const [roleSignUp, setRoleSignUp] = useState('student');

    const handleRoleSignUp = (roleName) =>{
        setRoleSignUp(roleName);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const role = roleSignUp;

        const userData = {user:{name:displayName, email, photoURL, role}}
        
        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must contain at least 6 characters, including an uppercase letter and a lowercase letter."
            );
            return;
        }

        createUser(email, password)
            .then((result) => {
                const newUser = result.user;
                
                updateUserProfile(newUser, displayName, photoURL)
                    .then(() => {

                      axiosInstance.post(`/users/register-user`,userData)
                      .then(res => {
                        // console.log(res.data)
                    })

                        toast.success("Registration successful!");
                        setRole(role)
                        e.target.reset();
                        navigate('/');
                    })
                    .catch((error) => {
                        // console.error("Error updating profile:", error.message);
                        toast.error(error.message);
                    });
            })
            .catch((error) => {
                console.error("Error creating user:", error.message);
                toast.error(`${error.message},Failed to register. Please try again.`);
            });
    };

    return (
      <div>
        <Helmet>
        <title>Register Page</title>
      </Helmet>
         <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
       
          <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
            <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
              Create an Account
            </h1>
            <p className="text-gray-500 text-center mb-8">
              Sign up for <span className='cursor-pointer underline text-xl font-bold text-green-600' onClick={()=>{handleRoleSignUp('tutor')}}>Tutor</span> or <span className='cursor-pointer text-xl underline font-bold text-blue-600' onClick={()=>{handleRoleSignUp('student')}}>Student</span>
            </p>

            {
                roleSignUp === 'student' ? <h1 className='text-3xl text-center my-6 font-bold text-blue-600'>Student</h1> : <h1 className='text-3xl text-center my-6 font-bold text-green-600'>Tutor</h1>
            }

            <form onSubmit={handleRegister}>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>
    
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>
    
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo URL (Optional)
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Profile picture URL"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
    
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none pr-10"
                    required
                  />
                  <span
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                  </span>
                </div>
              </div>
    
              
              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              >
                Register
              </button>
            </form>
    
            
            <p className="text-center mt-6 text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
            <SocialLogin roleSignUp={roleSignUp} userStatus='Registration'></SocialLogin>
          </div>
        </div>
      </div>
      );
};

export default Register;