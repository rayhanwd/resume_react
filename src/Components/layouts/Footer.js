import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  const [visibility, setVisibility] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 })

  const handleCLick = () => {
    setPosition({ ...position, position: { top: 0, left: 0 } })
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      e.preventDefault()
      if (window.scrollY > 200) {
        setVisibility(true)
      }
      else {
        setVisibility(false)
      }

    })
  })

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                <a className="text-indigo-400">rayhanbd4400@gmail.com</a>
                <p className="leading-normal my-5">Jhenaidah
                  <br />Dhaka, Bangladesh
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500" href="https://www.facebook.com/KR.RAYHAN70/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                  <a className="ml-4 text-gray-500" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a className="ml-4 text-gray-500" href="https://www.linkedin.com/in/rayhanwd/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a className="ml-4 text-gray-500" href="http://https://github.com/rayhanwd" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <span onClick={() => handleCLick()}
        className=
        {`${visibility ? 'right-0 bottom-0.5 fixed' : ''}`}
      >
        <span class="animate-ping absolute inline-flex w-10 h-10 mx-auto rounded-full bg-purple-400 opacity-75"></span>
        <svg xmlns="http://www.w3.org/2000/svg" className="relative w-10 h-10 text-white p-2 bg-indigo-500 rounded-full mr-5 mb-5 shadow-lg cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
      </span>
    </>

  );
};

export default Footer;