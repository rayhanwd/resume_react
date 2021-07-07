import React from 'react';
import Footer from '../Components/layouts/Footer';
import Navs from '../Components/layouts/Navs';
import ContactForm from '../Components/layouts/ContactForm';

const Contact = () => {
    return (
        <>
          <Navs/>
          <ContactForm top={'4rem'}/>
          <Footer/>  
        </>
    );
};

export default Contact;