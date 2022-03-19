import React from "react";
import '../styles/slides.css'
// slide 0
import pick from "../img/pick0.webp"
// slide 1
import womStyle from "../img/womenStyle.svg"
import menStyle from "../img/menStyle.svg"
// slide 2
import eyeglasses from "../img/eyeglasses.svg"
import sunglasses from "../img/sunglasses.svg"
// slide 3
import Anim from './comp/animate.jsx'
// slide 11
import gift from "../img/gift.svg"

function changeSlide(){
    document.getElementsByClassName("slideS")[0].classList.remove("d-none");
    document.getElementsByClassName("slideF")[0].classList.add("d-none");
}


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
                <div className="slide-3">
                    <Anim text="Let's get to know you!"/>

                    <div className="slideF">
                        <p className="thirdAttention">Do you need vision correction?</p>
                        <div className="card" onClick={changeSlide}>
                            <p className="secondAttention">Yes</p>
                        </div>
                        <div className="card" onClick={nextSlide}>
                            <p className="secondAttention">No</p>
                        </div>
                        <p className="bottomText" onClick={nextSlide}>Skip</p>
                    </div>
                    <div className="slideS d-none">
                        <p className="thirdAttention">What do you need your glasses for?</p>
                        <div className="card" onClick={() => chooseParam(6)}>
                            <p className="secondAttention">Near Vision</p>
                        </div>
                        <div className="card" onClick={() => chooseParam(6)}>
                            <p className="secondAttention">Distance Vision</p>
                        </div>
                        <div className="card" onClick={() => chooseParam(7)}>
                            <p className="secondAttention">Multifocal / Progressive</p>
                        </div>
                        <p className="bottomText" onClick={nextSlide}>Skip</p>
                    </div>
                </div>
                
            );
        case 4:
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