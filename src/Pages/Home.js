import React, { Fragment } from 'react';
import Header from './../Components/layouts/Header';
import DevSkill from './../Components/layouts/DevSkill';
import Responsibilities from './../Components/layouts/Responsibilities';
import Experiences from './../Components/layouts/Experiences';
import Portfolio from './../Components/layouts/Portfolio';
import Feedback from './../Components/layouts/Feedback';
import Blog from './../Components/layouts/Blog';
import Contact from './../Components/layouts/ContactForm';
import Footer from './../Components/layouts/Footer';
const Home = () => {
    return (
        <Fragment>
        <Header/>
        <DevSkill/>
        <Responsibilities/>
        <Experiences/>
        <Portfolio/>
        <Feedback/>
        <Blog/>
        <Contact/>
        <Footer/>
        </Fragment>
    );
};

export default Home;