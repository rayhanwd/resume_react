import React from 'react';
import { P_Data } from '../../utils/Database';

const Portfolio = () => {
  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Work samples</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Frasnce you probably haven't heard of them man bun deep jambing selfies heirloom prism food truck ugh squid celiac humblebees.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Display All items */}
          {
            P_Data.map(data =>
              <div className="xl:w-1/1 md:w-1/1 p-4">
                <div className="md:flex  bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                  <a href="/" target="_blank" rel="noopener noreferrer" className="md:mr-5"><img className="h-72 rounded w-full object-cover object-center md:mb-2 mb-5" src={data.img} alt="content" /></a>
                  <div className="md:ml-5">
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">{data.title}</h3>
                    {/* <p className="leading-relaxed text-base">{data.desc}</p> */}
                    <p className="mt-5">
                      {
                        data.technology.map(tech => 
                          <button className="text-white mr-5 mb-5  px-2 py-1 bg-indigo-500">{tech}</button>
                        )
                      }
                    </p>
                    <div className="link__share flex">
                      <span class="mt-5 animate-ping absolute inline-flex h-6 w-6 mx-auto rounded-full bg-purple-400 opacity-75"></span>
                      <a target="_blank" href={data.live_link}><svg xmlns="http://www.w3.org/2000/svg" className="text-white p-1 rounded-full bg-indigo-500 mt-5 relative h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg></a>
                      <>
                        <span class="mt-5 animate-ping absolute inline-flex h-6 w-6 ml-14  rounded-full bg-purple-400 opacity-75"></span>
                        <a target="_blank" href={data.git_link}><svg xmlns="http://www.w3.org/2000/svg" className="rounded-full bg-indigo-500 text-white p-1 mt-5 relative h-6 w-6 ml-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg></a>
                      </>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
