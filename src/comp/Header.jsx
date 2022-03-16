import React from "react";
import logo from '../img/logo.svg';
import next from '../img/next.svg';

const Counter = function(){
    return (
        <header>
            <img src={logo} className="logo"/>
            <img src={next} className="next"/>
        </header>
    )
}

export default Counter;