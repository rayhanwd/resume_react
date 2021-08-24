import React from 'react';

const AboutMe = () => {
    return (
        <div id="about" className="container text-gray-400 px-5 py-10 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="title-font mt-4 text-white text-lg BebasNeue-font">Kazi Rayhan</h2>
                            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                            <p className="text-left text-base text-gray-400">Hi 👋, I'm Kazi Rayhan
                                A passionate frontend developer from Bangladesh</p>
                        </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
                        <p className="leading-relaxed text-lg mb-4">Assalamu-Alaikum, My name's Kazi Rayhan. I am a dedicated and hardworking person who believes in honesty and good working relation. Though I am new at this sector of job, but I have certain qualities which make me good at this.
                            I would like to inform you that I am highly skilled ReactJs, Redux, Javascript, Sass, Bootstrap,Tailwindcss, and more as I have handsome experience in it. Still, I am always eager to learn anew and make my skill sharper whenever I get a chance</p>
                        <div className="md:flex block">
                            <button className="md:flex block  mt-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="https://www.linkedin.com/in/rayhanwd/" rel="noreferrer" target="_blank">HIRE ME</a></button>
                            <button className="md:flex block md:ml-10 mt-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="https://drive.google.com/uc?export=download&amp;id=1vQblI0v8I4V8PDCO08J4aiU9Ksuy9tfV" download="" target="blank_">DOWNLOAD RESUME</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;