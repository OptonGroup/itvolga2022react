import React from "react";
import logo from '../img/logo.svg';
import next from '../img/next.svg';
import exit from '../img/exit.svg';
import back from '../img/back.svg';

import '../styles/header.css'


const Header = function({slide, nextSlide, previousSlide, zeroSlide}){
    if (slide === 0 || slide === 11){
        return (
            <header>
                <img src={logo} className='logo' alt=''/>
                <img src={next} className='next' alt='' onClick={nextSlide}/>
            </header>
        )
    } else{
        return (
            <header>
                <img src={back} className='before' alt='' onClick={previousSlide}/>
                <p>{slide}/10</p>
                <img src={exit} className='exit' alt='' onClick={zeroSlide}/>
            </header>
        )
    }
}

export default Header;