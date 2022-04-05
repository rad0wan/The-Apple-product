import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../hooks/useReview/useReview';
import Comment from '../Comment/Comment';
import { ChevronDoubleRightIcon, EyeIcon, ShieldExclamationIcon } from '@heroicons/react/solid';

const Home = () => {

    const navigate = useNavigate();

    const [comments, setComments] = useReview();

    return (
        <div>
            <div className='flex flex-col-reverse lg:flex lg:flex-row lg:justify-center lg:items-center '>
                <div className='lg:mx-0 mx-10 lg:mb-0 mb-8'>
                    <h1 className='text-4xl lg:text-6xl my-4'>Love The Power</h1>
                    <h2 className='text-4xl lg:text-6xl my-4'>Love The Price</h2>
                    <p className='text-base lg:text-xl lg:w-[576px] my-4 text-gray-400'>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. </p>
                    <button className='bg-green-500 py-2 px-3 rounded-md text-white hover:bg-green-700 flex items-center lg:mx-0 mx-auto'>Live Demo <EyeIcon className='w-6 h-6 ml-1'></EyeIcon></button>
                </div>
                <div>
                    <img className='lg:w-[1210px] lg:h-[740px] h-[400px]' src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg" alt="" />
                </div>
            </div>

            <div className=''>
                <h1 className='text-center text-3xl lg:text-4xl text-teal-500 '>Customer Review</h1>
                <div className='grid lg:grid-cols-3 gap-5 my-10 mx-10'>
                    {
                        comments.slice(0, 3).map(comment =>
                            <Comment key={comment.id}
                                comment={comment}
                            ></Comment>
                        )
                    }
                </div>
                <div className='flex justify-center my-10'>
                    <button onClick={() => navigate('/reviews')} className=' bg-teal-500 py-2 px-10 rounded-md text-white hover:bg-teal-700 flex items-center' >See All Reviews <ChevronDoubleRightIcon className='h-6 w-6'></ChevronDoubleRightIcon> </button>
                </div>
            </div>
        </div>
    );
};

export default Home;