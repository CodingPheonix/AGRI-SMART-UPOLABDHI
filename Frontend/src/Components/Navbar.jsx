import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-4 m-4 w-[95%] max-w-7xl mx-auto 
                  rounded-2xl absolute z-50 bg-white/10 backdrop-blur-md border border-white/20 shadow-md">

            {/* Website Logo */}
            <img
                src="/logo.png" // replace with actual logo path
                alt="website logo"
                className="h-10 w-10 object-contain border border-white rounded-lg bg-white/20 p-1"
            />

            {/* Navigation Links */}
            <section>
                <ul className="flex justify-center items-center gap-6 text-white font-medium">
                    {["Home", "Get your Map", "Dashboard", "Crop Disease", "Nearby Market"].map((item, index) => (
                        <li
                            key={index}
                            className="relative transition-all duration-200 ease-in-out hover:-translate-y-1
                       hover:text-green-400 hover:cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[3px]
                       after:w-full after:rounded-full after:bg-green-500 after:opacity-0 hover:after:opacity-100"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Auth Buttons */}
            <section className="flex gap-4">
                <button className="px-4 py-2 text-white border border-white rounded-xl transition
                         hover:bg-white hover:text-green-700 hover:scale-105">
                    Log in
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-xl transition
                         hover:bg-green-600 hover:scale-105">
                    Sign up
                </button>
            </section>
        </nav>
    );

}

export default Navbar
