import React from 'react';
import useAuth from '../../hooks/useAuth';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SocialLogin = ({roleSignUp, userStatus}) => {
    const {signInWithGoogle} = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {

                const socialUser = result.user;
                const userData = {user:{name:socialUser.displayName, email:socialUser.email, photoURL:socialUser.photoURL, role:roleSignUp}};

                let url = '';

                if(userStatus === 'Registration'){
                    
                    url='http://localhost:5000/api/users/register-user'

                }else if(userStatus==='Login'){
                    
                    url='http://localhost:5000/api/users/login-user'

                }

                const fetchData = async()=>{
                    const response = await fetch(url,{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json', 
                        },
                        body: JSON.stringify(userData),
                       });
                    const data = await response.json();
                        console.log(data)
                }
                fetchData();

                toast.success(`${userStatus} successfully!`);
                navigate('/');
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className='m-4'>
              <div className="divider">OR</div>

            <button onClick={handleGoogleSignIn} className='btn'>Google</button>
        </div>
    );
};

export default SocialLogin;