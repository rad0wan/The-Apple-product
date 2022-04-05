import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=' block  lg:flex lg:justify-between lg:mx-20 lg:my-5'>
            <div className='flex items-center'>
                <Link to={'/'}><img className='h-8 w-8' src={'https://cdn.icon-icons.com/icons2/2157/PNG/512/apple_logo_icon_132879.png'} alt="" /> </Link>
                <Link to={'/'}><h1 className='text-gray-500 text-xl'>Apple</h1></Link>

            </div>
            <nav className=''>
                <NavLink to={'/home'} className={({ isActive }) => isActive ? 'lg:lg:mx-6 text-red-700  border-4 border-white border-b-red-700' : ' text-gray-600 lg:lg:mx-6 border-4 border-white border-b-gray-600 hover:text-red-500'}>HOME</NavLink>
                <NavLink to={'/reviews'} className={({ isActive }) => isActive ? 'lg:mx-6 text-red-700  border-4 border-white border-b-red-700' : ' text-gray-600 lg:mx-6 border-4 border-white border-b-gray-600 hover:text-red-500'}>REVIEWS </NavLink>
                <NavLink to={'/DashBoard'} className={({ isActive }) => isActive ? 'lg:mx-6 text-red-700  border-4 border-white border-b-red-700' : ' text-gray-600 lg:mx-6 border-4 border-white border-b-gray-600 hover:text-red-500'}>DASHBOARD</NavLink>
                <NavLink to={'/blogs'} className={({ isActive }) => isActive ? 'lg:mx-6 text-red-700  border-4 border-white border-b-red-700' : ' text-gray-600 lg:mx-6 border-4 border-white border-b-gray-600 hover:text-red-500'}>BLOGS</NavLink>
                <NavLink to={'/about'} className={({ isActive }) => isActive ? 'lg:mx-6 text-red-700  border-4 border-white border-b-red-700' : ' text-gray-600 lg:mx-6 border-4 border-white border-b-gray-600 hover:text-red-500'}>ABOUT</NavLink>
            </nav>
        </nav>
    );
};

export default Header;