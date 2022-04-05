import React from 'react';

const Blogs = () => {
    return (
        <div className='my-20 mx-40'>
            <div>
                <h1 className='text-3xl '>What is Context API?</h1>
                <p className='my-5 text-gray-500'>একটি সাধারণ React  অ্যাপ্লিকেশনে, props মাধ্যমে ডেটা টপ-ডাউন (parent to child কাছে) পাস করা হয়, কিন্তু এই ধরনের ব্যবহার নির্দিষ্ট ধরণের  props  জন্য কষ্টকর হতে পারে (যেমন locale preference, UI থিম) যা একটি application মধ্যে অনেক  components জন্য প্রয়োজন। Context গাছের প্রতিটি স্তরের মধ্য দিয়ে স্পষ্টভাবে একটি prop পাস না করে components  মধ্যে এই জাতীয় মানগুলি ভাগ করার একটি উপায় সরবরাহ করে।</p>
            </div>
            <div>
                <h1 className='text-3xl '>What are Semantic Elements?</h1>
                <p className='my-5 text-gray-500'>একটি semantic element মূল বৈশিষ্ট্য হল যে এটি developer  এবং browser উভয়ের কাছে স্পষ্টভাবে এর অর্থ যোগাযোগ করে। এই elements স্পষ্টভাবে এর বিষয়বস্তু সংজ্ঞায়িত করে।
                    non-semantic  elements উদাহরণ: div এবং span - এর content সম্পর্কে কিছুই বলে না।
                    semantic  elements উদাহরণ: form, table, এবং article - স্পষ্টভাবে এর content সংজ্ঞায়িত করে।
                    কিছু  semantic  elements:
                    article, aside, details, figcaption, figure, footer, header, main, mark, nav, section, summary,time.
                </p>
            </div>
            <div>
                <h1 className='text-3xl '>Difference between block elements and inline elements?</h1>
                <p className='my-5 text-gray-500'>Inline Elements :
                    Inline Elements  শুধুমাত্র প্রয়োজনীয় width দখল করে।
                    Inline Elements  একটি নতুন লাইনে শুরু হয় না।
                    Inline Elements  অন্যান্য Elements এর  পিছনে বসতে অনুমতি দেয়.
                </p>
                <p className=' text-gray-500'>
                    Block Elements:
                    Block Elements তাদের পর্যাপ্ততা নির্বিশেষে full width দখল করে।
                    Block Elements সবসময় একটি লাইনে শুরু হয়।
                    Block Elements অন্যান্য Elements পিছনে বসতে অনুমতি দেয় না.
                    Block Elements উপরে এবং নীচের margin আছে।
                </p>
            </div>
        </div>
    );
};

export default Blogs;