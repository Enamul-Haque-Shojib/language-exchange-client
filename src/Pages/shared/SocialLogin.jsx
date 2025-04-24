import React from 'react';


import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const SocialLogin = ({roleSignUp, userStatus}) => {
    const axiosInstance = useAxiosSecure();
    const {signInWithGoogle} = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {

                const socialUser = result.user;
                const userData = {user:{name:socialUser.displayName, email:socialUser.email, photoURL:socialUser.photoURL, role:roleSignUp}};

                let url = '';

                if(userStatus === 'Registration'){
                    
                    url='/users/register-user'

                }else if(userStatus==='Login'){
                    
                    url='/users/login-user'

                }


                axiosInstance.post(url, userData)
                .then(res => {
                //  console.log(res.data);
                })


                toast.success(`${userStatus} successfully!`);
                navigate('/');
            })
            .catch(error => {
                // console.log(error.message)
            })
    }
    return (
        <div className='m-4'>
              <div className="divider">OR</div>

            <button onClick={handleGoogleSignIn} className='btn w-full'><i className="fa-brands fa-google"></i>Sign in with Google</button>
        </div>
    );
};

export default SocialLogin;