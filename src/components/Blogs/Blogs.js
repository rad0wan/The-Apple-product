import React from 'react';

const Blogs = () => {
    return (
        <div className='my-20 mx-40'>
            <h1 className='text-3xl '>What is Context API?</h1>
            <p className='my-5 text-gray-500'>একটি সাধারণ React  অ্যাপ্লিকেশনে, props মাধ্যমে ডেটা টপ-ডাউন (parent to child কাছে) পাস করা হয়, কিন্তু এই ধরনের ব্যবহার নির্দিষ্ট ধরণের  props  জন্য কষ্টকর হতে পারে (যেমন locale preference, UI থিম) যা একটি application মধ্যে অনেক  components জন্য প্রয়োজন। Context গাছের প্রতিটি স্তরের মধ্য দিয়ে স্পষ্টভাবে একটি prop পাস না করে components  মধ্যে এই জাতীয় মানগুলি ভাগ করার একটি উপায় সরবরাহ করে।</p>
        </div>
    );
};

export default Blogs;