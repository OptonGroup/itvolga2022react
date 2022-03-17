import React from "react";
import '../styles/slides.css'
import pick from "../img/pick0.png"
import womStyle from "../img/womenStyle.svg"
import menStyle from "../img/menStyle.svg"
import eyeglasses from "../img/eyeglasses.svg"
import sunglasses from "../img/eyeglasses.svg"
import gift from "../img/gift.svg"


const Slides = function({slide, nextSlide, chooseParam}){
    switch (slide){
        case 0:
        default:
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
        case 1:
            return ( 
                <div className="slide-1">
                    <p className="thirdAttention">You are looking for</p>
                    <div className="card" onClick={() => chooseParam(4)}>
                        <img src={womStyle} alt=''/>
                        <p className="secondAttention">Women's Styles</p>
                    </div>
                    <div className="card" onClick={() => chooseParam(5)}>
                        <img src={menStyle} alt=''/>
                        <p className="secondAttention">Men's Styles</p>
                    </div>
                    <p className="bottomText" onClick={nextSlide}>I'd like to see both</p>
                </div>
            );
        case 2:
            return ( 
                <div className="slide-2">
                    <p className="thirdAttention">What type of glasses are you looking for?</p>
                    <div className="card" onClick={() => chooseParam(210)}>
                        <img src={eyeglasses} alt=''/>
                        <p className="secondAttention">Eyeglasses</p>
                    </div>
                    <div className="card" onClick={() => chooseParam(211)}>
                        <img src={sunglasses} alt=''/>
                        <p className="secondAttention">Sunglasses</p>
                    </div>
                    <p className="bottomText" onClick={nextSlide}>I want to see both</p>
                </div>
            );
        case 3:
            return ( 
                <div className="slide-11">
                    <div className='circle'>
                        <img src={gift} alt=''></img>
                    </div>
                    <p className="firstAttention">We've found some awesome frames for you!</p>
                    <p className="secondAttention">Send the results to your email to receive special discounts.</p>
                    <span className="confirm" onClick={nextSlide}>
                        <p className="buttonText">Send</p>
                    </span>
                    <p className="termsOfUse">By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and receiving promotion emails</p>
                </div>
            );
    }
}

export default Slides;