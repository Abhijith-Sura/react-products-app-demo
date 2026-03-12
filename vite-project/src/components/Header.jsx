import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="flex justify-between items-center px-6 py-3 bg-blue-600 shadow text-white mb-4">
            <div className="flex items-center gap-2">
                <img width="40" src="https://www.pngkit.com/png/full/1-11300_amazon-png-logo-png.png" alt="Logo" className="rounded shadow" />
                <span className="text-xl font-bold">ProductsApp</span>
            </div>
            <nav>
                <ul className="flex gap-6 text-base font-medium">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline' : 'hover:underline'}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header