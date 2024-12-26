import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ReviewsComment = () => {
    const {user} = useAuth()
    const navigate = useNavigate();
    const {id} = useParams();


    const handleReviews =(e)=>{
        e.preventDefault();
        const comment = e.target.comment.value;
        const userReview = {
            reviewUserPhotoURL: user.photoURL,
            name: user.displayName,
            email: user.email,
            comment
        } 
        console.log(userReview, id);
        axios.patch(`http://localhost:5000/api/tutorials/user-review/${id}`,userReview)
            .then(res => {
            console.log(res)
                 
        })
        navigate(-1);
    }
   



    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[60%]">
                <h2 className="text-lg font-semibold mb-4">Enter Review</h2>
                <form onSubmit={handleReviews} className="space-y-4">
                    <div>
                    <textarea className="textarea textarea-bordered w-full" placeholder="comment about tutor and tutorial" name='comment'></textarea>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                            onClick={() => navigate(-1)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewsComment;