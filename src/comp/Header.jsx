import React from "react";
import logo from '../img/logo.svg';
import next from '../img/next.svg';
import exit from '../img/exit.svg';
import back from '../img/back.svg';

import '../styles/header.css'


const Header = function({slide, nextSlide, previousSlide, zeroSlide}){
    var slideClass = 'slide'+String(slide) + ' progressBar';
    if (slide === 0){
        return (
            <header className='startHeader'>
                <img src={logo} className='logo' alt=''/>
                <img src={next} className='next' alt='' onClick={nextSlide}/>
            </header>
        )
    } else if(slide === 11){
        return(
            <header className='defineHeader'>
            <img src={logo} className='logo' alt=''/>
            <img src={exit} className='exit' alt='' onClick={zeroSlide}/>
            <span className={slideClass}></span>
        </header>
        );
    }
    else{
        return (
            <header className='defineHeader'>
                <img src={back} className='before' alt='' onClick={previousSlide}/>
                <p>{slide}/10</p>
                <img src={exit} className='exit' alt='' onClick={zeroSlide}/>
                <span className={slideClass}></span>
            </header>
        )
    }
}

export default Header;