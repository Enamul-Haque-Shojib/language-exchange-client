import React, { useState } from 'react';

const AboutMe = () => {
  
    const [aboutMe, setAboutMe] = useState('');
    const handleAboutMe = (e)=>{
        e.preventDefault();
        const aboutMe = e.target.aboutMe.value;
        setAboutMe(aboutMe);
        e.target.reset()
    }
    return (
        <div>
            <p>{aboutMe}</p>
        <form className="card-body" onSubmit={handleAboutMe}>
        <div className="form-control">
         
          <textarea className="textarea textarea-bordered" name='aboutMe' placeholder="Bio"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
        </form>
            
        </div>
    );
};

export default AboutMe;