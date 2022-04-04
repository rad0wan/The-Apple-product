import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between mx-20 my-5'>
            <div>
                <h1>MacBook Pro</h1>
            </div>
            <div>
                <NavLink to={'/home'} className={({ isActive }) => isActive ? 'mx-6 text-red-700  border-4 border-white border-b-red-700' : ' text-gray-600 mx-6 hover:text-red-500'}>HOME</NavLink>
                <NavLink to={'/reviews'} className={({ isActive }) => isActive ? 'mx-6 text-red-700' : ' text-gray-600 mx-6 hover:text-red-500'}>REVIEWS </NavLink>
                <NavLink to={'/DashBoard'} className={({ isActive }) => isActive ? 'mx-6 text-red-700' : ' text-gray-600 mx-6 hover:text-red-500'}>DASHBOARD</NavLink>
                <NavLink to={'/blogs'} className={({ isActive }) => isActive ? 'mx-6 text-red-700' : ' text-gray-600 mx-6 hover:text-red-500'}>BLOGS</NavLink>
                <NavLink to={'/about'} className={({ isActive }) => isActive ? 'mx-6 text-red-700' : ' text-gray-600 mx-6 hover:text-red-500'}>ABOUT</NavLink>
            </div>
        </nav>
    );
};

export default Header;