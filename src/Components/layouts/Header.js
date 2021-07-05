import React from 'react';
import Banner from './Banner';
import Navs from './Navs';

const Header = () => {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <Banner />
            <Navs />
        </header>
    );
};

export default Header;