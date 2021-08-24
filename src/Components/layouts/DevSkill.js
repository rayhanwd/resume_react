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
          <p className="lg:w-1/2 w-full leading-relaxed text-white text-opacity-90">
            Front-end development deals primarily with how users see and interact with a website. As a front-end developer, skills in layout and code are at the forefront of what you will use to perform your duties. Front-end developers are usually part of a team, and soft skills are also a necessity.</p>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-4">
          {
            skill_json.map(data =>
              <div className="p-4 md:w-1/6 text-center">
                <CircleProgress percentage={data.parsent} width={90} primaryColor={['#4344f1', '#4344f1']} secondaryColor='white' strokeWidth={4} />
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