import React from 'react';
import {CircleProgress} from 'react-gradient-progress'
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
          <div className="p-4 md:w-1/6 text-center">
          <CircleProgress percentage={89} width={90} primaryColor={['#4344f1','#4344f1']} secondaryColor='#fff' strokeWidth={4} />
          <h2 className="text-white">Javascript</h2>
          </div>
          <div className="p-4 md:w-1/6 text-center">
          <CircleProgress percentage={90} width={90} primaryColor={['#4344f1','#4344f1']} secondaryColor='#fff' strokeWidth={4} />
          <h2 className="text-white">React react-native</h2>
          </div>
          <div className="p-4 md:w-1/6 text-center">
          <CircleProgress percentage={83} width={90} primaryColor={['#4344f1','#4344f1']} secondaryColor='#fff' strokeWidth={4} />
          <h2 className="text-white">Redux</h2>
          </div>
          <div className="p-4 md:w-1/6 text-center">
          <CircleProgress percentage={82} width={90} primaryColor={['#4344f1','#4344f1']} secondaryColor='#fff' strokeWidth={4} />
          <h2 className="text-white">Node JS</h2>
          </div>
          <div className="p-4 md:w-1/6 text-center">
          <CircleProgress percentage={84} width={90} primaryColor={['#4344f1','#4344f1']} secondaryColor='#fff' strokeWidth={4} />
          <h2 className="text-white">MongoDB</h2>
          </div>
          <div className="p-4 md:w-1/6 text-center">
          <CircleProgress percentage={89} width={90} primaryColor={['#4344f1','#4344f1']} secondaryColor='#fff' strokeWidth={4} />
          <h2 className="text-white">Express</h2>
          </div>
          <div className="p-4 md:w-1/6 text-center">
          <CircleProgress percentage={85} width={90} primaryColor={['#4344f1','#4344f1']} secondaryColor='#fff' strokeWidth={4} />
          <h2 className="text-white">Scss</h2>
          </div>
          <div className="p-4 md:w-1/6 text-center">
          <CircleProgress percentage={85} width={90} primaryColor={['#4344f1','#4344f1']} secondaryColor='#fff' strokeWidth={4} />
          <h2 className="text-white">Bootstrap</h2>
          </div>
          <div className="p-4 md:w-1/6 text-center">
          <CircleProgress percentage={85} width={90} primaryColor={['#4344f1','#4344f1']} secondaryColor='#fff' strokeWidth={4} />
          <h2 className="text-white">Tailwind</h2>
          </div>
          <div className="p-4 md:w-1/6 text-center">
          <CircleProgress percentage={87} width={90} primaryColor={['#4344f1','#4344f1']} secondaryColor='#fff' strokeWidth={4} />
          <h2 className="text-white">Css</h2>
          </div>
          <div className="p-4 md:w-1/6 text-center">
          <CircleProgress percentage={88} width={90} primaryColor={['#4344f1','#4344f1']} secondaryColor='#fff' strokeWidth={4} />
          <h2 className="text-white">HTML</h2>
          </div>
          <div className="p-4 md:w-1/6 text-center">
          <CircleProgress percentage={83} width={90} primaryColor={['#4344f1','#4344f1']} secondaryColor='#fff' strokeWidth={4} />
          <h2 className="text-white">Git</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevSkill;