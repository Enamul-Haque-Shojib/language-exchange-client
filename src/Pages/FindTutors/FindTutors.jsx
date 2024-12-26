import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Tutors from '../Tutors/Tutors';
import axios from 'axios';


const FindTutors = () => {
    const loadTutorsData = useLoaderData();

   const {category} = useParams();
    
  
    const [tutors, setTutors] = useState([]);
    

    useEffect(()=>{
        setTutors(loadTutorsData.data)
    },[])

    
        let filterCategory;

        if(category !== 'All') 
            filterCategory = tutors.filter(tutor => tutor.language == category)

    const handleSearchLanguage=(e)=>{
        
        e.preventDefault();
        const languageName = e.target.name.value;
        
console.log(languageName)
        axios.get(`http://localhost:5000/api/tutorials?language=${languageName}`)
        .then(res => {
            console.log(res.data)
            setTutors(res.data.data);
            e.target.name.value='';
    })
    }


        
        

    return (
        <div>
            <Helmet>
                <title>Find Tutors</title>
            </Helmet>
            <div className="py-6 lg:w-[85%] w-[95%] mx-auto">
            <h1 className="text-3xl font-bold text-center pb-8">ALL Tutors</h1>
            
            <div className="mb-4">
            
            <form className="card-body" onSubmit={handleSearchLanguage}>
                    <div className="w-[50%] mx-auto flex">
                    <input type="text" placeholder="Language Name" className="input input-bordered w-[80%]" name='name' required />
                    <div className="w-[20%]">
                    <button className="btn btn-primary w-full ml-3">Search</button>
                    </div>
                    </div>
        
      </form>
              </div>
            
            
            <div className="flex lg:flex-row flex-col lg:justify-center lg:items-start gap-x-5">
                <Categories/> 

                {
                    category ==='All' ? <Tutors tutors={tutors} /> : <Tutors tutors={filterCategory} />
                }
                
            </div> 
        </div>
        </div>
        
    );
};

export default FindTutors;