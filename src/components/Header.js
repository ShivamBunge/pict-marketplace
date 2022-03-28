import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Carousel from './Carousel';
function Header(){
    return (
        <div>
            <Navbar/>
            <Carousel/>
            {/* https://bootsnipp.com/snippets/eK8AK */}
        </div>
    );
}

export default Header;