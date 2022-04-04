import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className=''>
                    <h1 className='text-6xl my-4'>Love The Power</h1>
                    <h2 className='text-6xl my-4'>Love The Price</h2>
                    <p className='text-lg w-[576px] my-4 text-gray-400'>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. </p>
                    <button className='bg-green-500 py-2 px-3 rounded-md text-white hover:bg-green-700'>Live Demo</button>
                </div>
                <div>
                    <img className='w-[1210px] h-[740px]' src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg" alt="" />
                </div>
            </div>
            <div className='text-center text-4xl'>
                <h1>Customer Review</h1>
                
            </div>
        </div>
    );
};

export default Home;