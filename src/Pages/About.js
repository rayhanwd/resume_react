import React from 'react';
import AboutMe from '../Components/layouts/AboutMe';
import Footer from '../Components/layouts/Footer';
import Navs from '../Components/layouts/Navs';
import DevSkill from './../Components/layouts/DevSkill';
import Experiences from './../Components/layouts/Experiences';
import Responsibilities from './../Components/layouts/Responsibilities';
import ContactForm from './../Components/layouts/ContactForm';

const About = () => {
    return (
        <>
           <Navs/>
           <AboutMe/>
           <DevSkill/>
           <Experiences/>
           <Responsibilities/>
           <ContactForm/>
           <Footer/> 
        </>
    );
};

export default About;