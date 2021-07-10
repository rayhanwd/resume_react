import React from 'react';
import { CircleProgress } from 'react-gradient-progress';
import { skill_json } from '../../utils/Database';

const DevSkill = () => {
  return (
    <section id="skill" className="text-gray-700 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Development Skill</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-700 text-opacity-90">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-4">
          {
            skill_json.map(data =>
              <div className="p-4 md:w-1/6 text-center">
                <CircleProgress  percentage={data.parsent} width={90} primaryColor={['#4344f1', '#4344f1']} secondaryColor='white' strokeWidth={4} />
                <h2 className="text-white">{data.title}</h2>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default DevSkill;