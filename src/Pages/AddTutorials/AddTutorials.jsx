import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import ISO6391 from 'iso-639-1';
import { toast } from 'react-toastify';

const AddTutorials = () => {
    const { user, categories, loading } = useAuth();
    const [copyCategories, setCopyCategories] = useState([]);

    useEffect(() => {
        if (categories && categories.length > 0) {
            setCopyCategories(categories);
        }
    }, [categories]);

    const [selectedValue, setSelectedValue] = useState("");
    const [customValue, setCustomValue] = useState("");

    const handleSelectChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        if (value === "custom") {
            setSelectedValue("");
        } else {
            setSelectedValue(value);
            setCustomValue("");
        }
    };

    const handleCustomInputChange = (e) => {
        e.preventDefault();
        setCustomValue(e.target.value);
        setSelectedValue("");
    };

    const handleAddCustomOption = (e) => {
        e.preventDefault();

        if (customValue && !copyCategories.includes(customValue)) {
            const languageName = customValue.trim().toLowerCase();
            if(ISO6391.getCode(languageName)){
                const capLanguage = languageName.charAt(0).toUpperCase() + languageName.slice(1).toLowerCase();
                setCopyCategories([...copyCategories, capLanguage]);
                setSelectedValue(capLanguage);
                setCustomValue("");
                
            }else{
                toast.warning('Please give a valid language')
            }
        }else{
          toast.warning('the name of Language has already selection option, please select ')
            setLogoURL_open(false)
        }
    };

  


const isValid12HourTime = (time) => {
        const regex = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i; 
        
        return regex.test(time);
    
}


    
    const handleAddTutorial = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const selectedDays = formData.getAll('days');
        initialData.days = selectedDays;
        initialData.price = parseInt(initialData.price)

        
        if(isValid12HourTime(initialData.time)){
            
                fetch('http://localhost:5000/api/tutorials/create-tutorial', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(initialData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        toast.success('Your Tutorial successfully created')
                        
                    })
                    
            }else{
                toast.error('Time format not Correct')
            }
        

       
    }

    const days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Post a Tutorial</h2>
        <form onSubmit={handleAddTutorial} className="space-y-6">
          
          {/* Name */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              <span>Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full"
              defaultValue={user?.displayName}
              readOnly
              required
            />
          </div>
      
          {/* Email */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              defaultValue={user?.email}
              readOnly
              required
            />
          </div>
      
          {/* User Image URL */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              <span>User Image URL</span>
            </label>
            <input
              type="text"
              name="userImageURL"
              placeholder="User Image URL"
              className="input input-bordered w-full"
              defaultValue={user?.photoURL}
              required
            />
          </div>
      
          {/* Tutorial Image URL */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              <span>Tutorial Image URL</span>
            </label>
            <input
              type="text"
              name="tutorialImageURL"
              placeholder="Tutorial Image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
      
        
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              <span>Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Tutorial Title"
              className="input input-bordered w-full"
              required
            />
          </div>
      
    
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              <span>Language</span>
            </label>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <select
                value={selectedValue || "custom"}
                onChange={handleSelectChange}
                className="select select-bordered w-full"
                name="language"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {copyCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
                <option value="custom">Add custom value</option>
              </select>
              {selectedValue === "" && (
                <div className="mt-3 flex gap-3">
                  <input
                    type="text"
                    value={customValue}
                    onChange={handleCustomInputChange}
                    placeholder="Type custom value"
                    className="input input-bordered flex-grow"
                  />
                  <button
                    onClick={handleAddCustomOption}
                    className="btn btn-primary"
                  >
                    Add
                  </button>
                </div>
              )}
              <p className="mt-2 text-sm text-gray-600">
                <strong>Selected Value:</strong> {selectedValue || customValue || "None"}
              </p>
            </div>
          </div>
      
          {/* Days */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              <span>Days</span>
            </label>
            <select
              className="select select-bordered w-full"
              name="days"
              multiple
            >
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
      
          {/* Time */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              <span>Time</span>
            </label>
            <input
              type="text"
              name="time"
              placeholder="HH:MM PM / HH:MM AM, e.g = 12:30 AM"
              className="input input-bordered w-full"
              required
            />
          </div>
      
          {/* Price */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              <span>Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
          </div>
      
          {/* Description */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              <span>Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Description"
              name="description"
              required
            ></textarea>
          </div>
      
          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Submit</button>
          </div>
        </form>
      </div>
      
    );
};

export default AddTutorials;