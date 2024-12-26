

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, signOutUser, role } = useAuth();

  const handleNavField = () => {
    setOpen(!open);
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch(() => {
        toast.error("Failed to log out. Please try again.");
      });
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md text-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      
        <h1 className="text-2xl font-extrabold tracking-wider">Sportanicals</h1>

      
        <div className="hidden lg:flex space-x-6 items-center">
          <NavLink
            to="/"
            className="transition duration-300 hover:text-yellow-300"
            activeclassname="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/find_tutors/All"
            className="transition duration-300 hover:text-yellow-300"
            activeclassname="active"
          >
            Find Tutors
          </NavLink>
          {user && role === "tutor" && (
            <>
              <NavLink
                to="/add_tutorials"
                className="transition duration-300 hover:text-yellow-300"
                activeclassname="active"
              >
                Add Tutorial
              </NavLink>
              <NavLink
                to="/my_tutorials"
                className="transition duration-300 hover:text-yellow-300"
                activeclassname="active"
              >
                My Tutorials
              </NavLink>
            </>
          )}
          {user && role === "student" && (
            <>
              <NavLink
                to="/my_booked"
                className="transition duration-300 hover:text-yellow-300"
                activeclassname="active"
              >
                My Booked Tutors
              </NavLink>
            </>
          )}
          {user && (
            <NavLink
              to="/profile"
              className="transition duration-300 hover:text-yellow-300"
              activeclassname="active"
            >
              My Profile
            </NavLink>
          )}
        </div>

    
        <div className="hidden lg:flex items-center space-x-4">
          {user ? (
            <>
              <div className="relative">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="User"
                  onClick={toggleDropdown}
                  className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-48">
                    <div className="px-4 py-2">
                      <p className="font-semibold">{user.displayName || "User"}</p>
                      <p className="text-sm text-gray-500">{role}</p>
                    </div>
                    <hr />
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <NavLink
                to="/register"
                className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full transition duration-300"
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full transition duration-300"
              >
                Login
              </NavLink>
            </>
          )}
        </div>

        
        <button className="lg:hidden text-2xl" onClick={handleNavField}>
          {open ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>

      
      <div
        className={`lg:hidden bg-white text-black fixed inset-0 transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button className="text-2xl mb-4" onClick={handleNavField}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="space-y-4">
            <NavLink
              to="/"
              className="block text-lg hover:text-indigo-500"
              activeclassname="active"
              onClick={handleNavField}
            >
              Home
            </NavLink>
            <NavLink
              to="/find_tutors"
              className="block text-lg hover:text-indigo-500"
              activeclassname="active"
              onClick={handleNavField}
            >
              Find Tutors
            </NavLink>
            {role === "tutor" && (
              <>
                <NavLink
                  to="/add_tutorials"
                  className="block text-lg hover:text-indigo-500"
                  activeclassname="active"
                  onClick={handleNavField}
                >
                  Add Tutorial
                </NavLink>
                <NavLink
                  to="/my_tutorials"
                  className="block text-lg hover:text-indigo-500"
                  activeclassname="active"
                  onClick={handleNavField}
                >
                  My Tutorials
                </NavLink>
              </>
            )}
            {role === "student" && (
              <NavLink
                to="/my_booked"
                className="block text-lg hover:text-indigo-500"
                activeclassname="active"
                onClick={handleNavField}
              >
                My Booked Tutorials
              </NavLink>
            )}
            {user && (
              <NavLink
                to="/profile"
                className="block text-lg hover:text-indigo-500"
                activeclassname="active"
                onClick={handleNavField}
              >
                My Profile
              </NavLink>
            )}
            {user && (
              <button
                onClick={handleSignOut}
                className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-100"
              >
                Logout
              </button>
            )}
            {!user && (
              <>
                <NavLink
                  to="/register"
                  className="block text-lg hover:text-indigo-500"
                  activeclassname="active"
                  onClick={handleNavField}
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="block text-lg hover:text-indigo-500"
                  activeclassname="active"
                  onClick={handleNavField}
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
