import React from 'react';
import Footer from '../Components/layouts/Footer';
import BlogItem from '../Components/layouts/Blog';
import Navs from './../Components/layouts/Navs';
const Blog = () => {
    return (
        <>
            <Navs />
            <BlogItem />
            <Footer />
        </>
    );
};

export default Blog;