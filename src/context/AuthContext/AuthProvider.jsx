

import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { auth } from '../../Firebase/firebase.init';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

     console.log('------->>>>>>>>>>>>>',user)

    const [categories, setCategories] = useState([]);
    const [tutors, setTutors] = useState([]);

    
    useEffect(() => {
        const fetchData = async()=>{
        //   const response = await fetch(`https://language-exchange-server-mu.vercel.app/api/categories`);
          const response = await fetch(`http://localhost:5000/api/categories`);
          const data = await response.json();
          setCategories(data.data.map(item => item.title));
        
      }
      fetchData();
      const fetchData2 = async () => {
        // const response = await fetch('https://language-exchange-server-mu.vercel.app/api/tutorials/');
        const response = await fetch('http://localhost:5000/api/tutorials/');
        const data = await response.json();
        setTutors(data.data);
    };
    fetchData2();
      },[])



    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const passwordReset = (email) =>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }
    const updateUserProfile = (newUser,displayName=null, photoURL=null) =>{
            return updateProfile(newUser, {displayName, photoURL});
    }
    const deleteUserProfile = () =>{
        
            return deleteUser(auth.currentUser);
    }

    const signInWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser =()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            
            setUser(currentUser);
    

            if (currentUser?.email) {
                const user = { email: currentUser.email, role};

                

                axios.post(
                    // 'https://language-exchange-server-mu.vercel.app/api/token_access/jwt',
                    'http://localhost:5000/api/token_access/jwt',
                     user, { withCredentials: true })
                    .then(res => {
                        
                        setRole(res.data.data.role)
                        setLoading(false);
                })

            }
            else {
                axios.post(
                    // 'https://language-exchange-server-mu.vercel.app/api/token_access/logout',
                    'http://localhost:5000/api/token_access/logout',
                     {}, {
                    withCredentials: true
                })
                .then(res => {
                   
                    setRole(null)
                    setLoading(false);
                })
            }
        });
        return ()=>{
            unSubscribe();
        }
    },[]);

    
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        passwordReset,
        updateUserProfile,
        signInWithGoogle,
        signOutUser,
        deleteUserProfile,
        tutors,
        setTutors,
        categories,
        setCategories,
        role,
        setRole, 
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;