import React, { createContext } from 'react';
import useReview from '../hooks/useReview/useReview';
import Comment from '../Comment/Comment';

const Reviews = () => {

    const [comments, setComments] = useReview();

    return (
        <div>
            <h1 className='text-center text-4xl text-teal-500 my-10' >Our Customer Reviews</h1>
            <div className='grid lg:grid-cols-3 gap-5 my-10 mx-10'>
                {
                    comments.map(comment =>
                        <Comment
                            key={comment.id}
                            comment={comment}
                        ></Comment>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;