import React from "react";
import '../styles/slides.css'
import pick from "../img/pick0.png"
import womStyle from "../img/womenStyle.svg"
import menStyle from "../img/menStyle.svg"


const Slides = function({slide, nextSlide}){
    switch (slide){
        case 0:
            return ( 
                <div className="slide-0">
                    <img src={pick} className='glasses' alt=''/>
                    <p className="firstAttention">Let’s find your perfect pair!</p>
                    <p className="secondAttention">Take the quiz to easily discover your perfect fit from thousands of styles</p>
                    <span className="confirm" onClick={nextSlide}>
                        <p className="buttonText">Start Now</p>
                    </span>
                </div>
            );
        default:
            return ( 
                <div className="slide-1">
                    <p className="thirdAttention">You are looking for</p>
                    <div className="card">
                        <img src={womStyle} className='glasses' alt=''/>
                        <p className="secondAttention">Women's Styles</p>
                    </div>
                    <div className="card">
                        <img src={menStyle} className='glasses' alt=''/>
                        <p className="secondAttention">Men's Styles</p>
                    </div>
                    <p className="bottomText">I'd like to see both</p>
                </div>
            );
    }
}

export default Slides;