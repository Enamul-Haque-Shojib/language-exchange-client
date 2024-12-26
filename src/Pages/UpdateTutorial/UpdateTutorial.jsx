import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import { toast } from 'react-toastify';

const UpdateTutorial = () => {
    const {user, categories, loading} = useAuth();

    const navigate = useNavigate();

    const loadData = useLoaderData();

    const {_id, userImageURL, tutorialImageURL, days, description,title, language, price, time} = loadData.data;


    const [copyCategories, setCopyCategories] = useState([]);

    useEffect(() => {
        if (categories && categories.length > 0) {
            setCopyCategories(categories);
        }
    }, [categories]);

    const [selectedValue, setSelectedValue] = useState(language);
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
                console.log('Please give a valid language')
            }
        }else{
            console.log('the name of Language has already selection option, please select ')
            setLogoURL_open(false)
        }
    };




const isValid12HourTime = (time) => {
        const regex = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i; 
        
        return regex.test(time);
    
}


    
    const handleUpdateTutorial = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const selectedDays = formData.getAll('days');
        initialData.days = selectedDays;
        initialData.price = parseInt(initialData.price);

        
        if(isValid12HourTime(initialData.time)){
        
                fetch(`https://language-exchange-server-mu.vercel.app/api/tutorials/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(initialData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                          toast.success('Your tutorial has been updated')
                            navigate(-1)
                        
                    })
                    
            }else{
                toast.error('Time format is not correct')
            }
        
       
    }

    const AllDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
    Update Tutorial
  </h2>
  <form onSubmit={handleUpdateTutorial} className="space-y-6">
    
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

    
    <div className="form-control">
      <label className="label font-semibold text-gray-700">
        <span>User Image URL</span>
      </label>
      <input
        type="text"
        name="userImageURL"
        placeholder="User Image URL"
        className="input input-bordered w-full"
        defaultValue={userImageURL}
        required
      />
    </div>

    
    <div className="form-control">
      <label className="label font-semibold text-gray-700">
        <span>Tutorial Image URL</span>
      </label>
      <input
        type="text"
        name="tutorialImageURL"
        placeholder="Tutorial Image URL"
        className="input input-bordered w-full"
        defaultValue={tutorialImageURL}
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
        placeholder="Title"
        className="input input-bordered w-full"
        defaultValue={title}
        required
      />
    </div>

    
    <div className="form-control">
      <label className="label font-semibold text-gray-700">
        <span>Language</span>
      </label>
      <div className="bg-gray-100 p-4 rounded shadow">
        <label className="block mb-2 text-gray-700 font-semibold">
          Select or Type:
        </label>
        <select
          value={selectedValue || "custom"}
          onChange={handleSelectChange}
          className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="language"
          defaultValue={language}
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
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              value={customValue}
              onChange={handleCustomInputChange}
              placeholder="Type custom value"
              className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddCustomOption}
              className="p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>
        )}
        <p className="text-gray-700">
          <strong>Selected Value:</strong>{" "}
          {selectedValue || customValue || "None"}
        </p>
      </div>
    </div>

    
    <div className="form-control">
      <label className="label font-semibold text-gray-700">
        <span>Days</span>
      </label>
      <select
        className="select select-bordered w-full"
        name="days"
        multiple
        defaultValue={days}
      >
        {AllDays.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
    </div>

    
    <div className="form-control">
      <label className="label font-semibold text-gray-700">
        <span>Time</span>
      </label>
      <input
        type="text"
        name="time"
        placeholder="HH:MM PM / HH:MM AM"
        className="input input-bordered w-full"
        required
        defaultValue={time}
      />
    </div>

    
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
        defaultValue={price}
      />
    </div>

    
    <div className="form-control">
      <label className="label font-semibold text-gray-700">
        <span>Description</span>
      </label>
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Description"
        name="description"
        defaultValue={description}
        required
      ></textarea>
    </div>

    
    <div className="form-control mt-6">
      <button className="btn btn-primary w-full">Update Tutorial</button>
    </div>
  </form>
</div>

    );
};

export default UpdateTutorial;