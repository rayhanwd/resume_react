import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navs = () => {

    const [addColor, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 800) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);

    return (
        <div style={addColor ? { position: 'fixed', top: '0', left: '0', width: '100%', backgroundColor: '#111827',zIndex:'1' } : {}}>
            <div className="border-b-2 border-gray-800">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-600 body-font">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span class="animate-ping absolute inline-flex w-10 h-10 mx-auto rounded-full bg-purple-400 opacity-75"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="relative w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <span className="ml-3 text-xl text-white">RAYHAN</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-12 flex flex-wrap items-center text-base justify-center">
                        <Link to='/about' className="border-b-2 border-gray-900 hover:border-purple-500 mr-10 text-white semibold uppercase hover:text-white-900">About</Link>
                        <Link to='/project' className="border-b-2 border-gray-900 hover:border-purple-500 mr-10 text-white semibold uppercase hover:text-white-900">Project</Link>
                        <Link to='/blog' className="border-b-2 border-gray-900 hover:border-purple-500 mr-10 text-white semibold uppercase hover:text-white-900">Blog</Link>
                        <Link to='/contact' className="border-b-2 border-gray-900 hover:border-purple-500 text-white semibold uppercase hover:text-white-900">Contact</Link>
                    </nav>
                    <a href="https://drive.google.com/uc?export=download&amp;id=1vQblI0v8I4V8PDCO08J4aiU9Ksuy9tfV" download="" target="blank_" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Download resume
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navs;