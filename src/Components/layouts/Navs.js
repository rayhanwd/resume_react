import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navs = () => {

    const [addColor, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 700) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);

    return (
        <div style={addColor?{ position: 'fixed', top: '0', left: '0', width: '100%', backgroundColor: '#111827' }:{}}>
            <div className="border-b-2 border-gray-800">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-600 body-font">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl text-white">RAYHAN</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to='/' className="mr-10 text-white semibold uppercase hover:text-white-900">About</Link>
                        <Link to='/' className="mr-10 text-white semibold uppercase hover:text-white-900">Project</Link>
                        <Link to='/' className="mr-10 text-white semibold uppercase hover:text-white-900">Blog</Link>
                        <Link to='/' className="text-white semibold uppercase hover:text-white-900">Contact</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Download resume
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navs;