import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='flex justify-between px-10 items-center bg-gradient-to-r from-blue-700 to-blue-400 py-4 shadow-lg rounded-b-xl mb-2'>
            <div className='flex items-center gap-3'>
                <img width="60px" src="https://www.pngkit.com/png/full/1-11300_amazon-png-logo-png.png" alt="Logo" className='rounded-full shadow-md' />
                <span className='text-3xl font-extrabold text-white tracking-tight drop-shadow'>ProductsApp</span>
            </div>
            <nav>
                <ul className='flex gap-8 text-xl font-semibold'>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-300 underline' : 'text-white hover:text-yellow-200 transition'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={({ isActive }) => isActive ? 'text-yellow-300 underline' : 'text-white hover:text-yellow-200 transition'}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-yellow-300 underline' : 'text-white hover:text-yellow-200 transition'}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header