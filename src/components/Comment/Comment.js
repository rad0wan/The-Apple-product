import React, { useContext } from 'react';
import { CommentContext } from '../Home/Home';
import { StarIcon } from '@heroicons/react/solid'

const Comment = ({ comment }) => {
    const { name, img, details, rating } = comment;
    return (
        <div className='text-center border shadow-md p-5 hover:shadow-xl'>
            <div className='flex justify-center my-3'>
                <img className='w-[60px] h-[60px] rounded-full' src={img} alt="" />
            </div>
            <h1 className='text-xl'>{name}</h1>
            <div className='flex justify-center items-center my-2'>
                <StarIcon className='w-5 h-5 text-orange-500'></StarIcon>
                <StarIcon className='w-5 h-5 text-orange-500'></StarIcon>
                <StarIcon className='w-5 h-5 text-orange-500'></StarIcon>
                <StarIcon className='w-5 h-5 text-orange-500'></StarIcon>
                <StarIcon className='w-5 h-5 text-orange-500 mr-2'></StarIcon>
                <span className='text-md text-orange-300 '> {rating}star</span>
            </div>
            <p className='text-gray-400'>{details}</p>
        </div>
    );
};

export default Comment;