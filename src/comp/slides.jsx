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
import eyecat from "../img/cateye.svg"
import suncat from "../img/suncateye.svg"
// slide 3
import Anim from '../comp/animate.jsx'
// slide 4
import sizes from "../img/sizes.webp"
// slide 5
import darkshade from "../img/darkshade.svg"
import liteshade from "../img/liteshade.svg"
import transitioningshade from "../img/transitioningshade.svg"
// slide 6
import ovalmen1 from "../img/ovalmen1.svg"
import roundmen from "../img/roundmen.svg"
import ovalmen2 from "../img/ovalmen2.svg"

import ovalwomen from "../img/ovalwomen.svg"
import roundwomen from "../img/roundwomen.svg"
import roundwomen2 from "../img/roundwomen2.svg"

import twofaces1 from "../img/twofaces1.svg"
import twofaces2 from "../img/twofaces2.svg"
import twofaces3 from "../img/twofaces3.svg"
// slide 11
import gift from "../img/gift.svg"

const Slides = function({slide, nextSlide, chooseParam, params}){
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
                    <p className="bottomText" onClick={() => chooseParam(null)}>I'd like to see both</p>
                </div>
            );
        case 2:
            if(Math.random() > 0.5){
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
                        <p className="bottomText" onClick={() => chooseParam(null)}>I want to see both</p>
                    </div>
                );
            }else{
                return ( 
                    <div className="slide-2">
                        <p className="thirdAttention">What type of glasses are you looking for?</p>
                        <div className="card" onClick={() => chooseParam(210)}>
                            <img src={eyecat} alt=''/>
                            <p className="secondAttention">Eyeglasses</p>
                        </div>
                        <div className="card" onClick={() => chooseParam(211)}>
                            <img src={suncat} alt=''/>
                            <p className="secondAttention">Sunglasses</p>
                        </div>
                        <p className="bottomText" onClick={() => chooseParam(null)}>I want to see both</p>
                    </div>
                );
            }
            
        case 3:
            function changeSlide3(){
                if (slide !== 3) return;
                if (document.getElementsByClassName("slideS").length)
                    document.getElementsByClassName("slideS")[0].classList.remove("d-none");
                if (document.getElementsByClassName("slideF").length)
                    document.getElementsByClassName("slideF")[0].classList.add("d-none");
            }
            setTimeout(function(){
                if (slide !== 3) return;
                if (document.getElementsByClassName("anim").length)
                    document.getElementsByClassName("anim")[0].classList.add("d-none");
                if (document.getElementsByClassName("slideF").length)
                    document.getElementsByClassName("slideF")[0].classList.remove("d-none")
            }, 2000);

            if (document.getElementsByClassName("anim").length)
                    document.getElementsByClassName("anim")[0].classList.remove("d-none");
            if (document.getElementsByClassName("slideF").length)
                    document.getElementsByClassName("slideF")[0].classList.add("d-none");
            if (document.getElementsByClassName("slideS").length)
                document.getElementsByClassName("slideS")[0].classList.add("d-none");
            
            return ( 
                <div className="slide-3">
                    <Anim text="Let's get to know you!"/>

                    <div className="slideF d-none">
                        <p className="thirdAttention">Do you need vision correction?</p>
                        <div className="card" onClick={changeSlide3}>
                            <p className="secondAttention">Yes</p>
                        </div>
                        <div className="card" onClick={() => chooseParam(null)}>
                            <p className="secondAttention">No</p>
                        </div>
                        <p className="bottomText" onClick={() => chooseParam(null)}>Skip</p>
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
                        <p className="bottomText" onClick={() => chooseParam(null)}>Skip</p>
                    </div>
                </div>
            );
        case 4:
            function changeSlide41(){
                if (slide !== 4) return;
                if (document.getElementsByClassName("anim").length)
                    document.getElementsByClassName("anim")[0].classList.remove("d-none");
                if (document.getElementsByClassName("slideF").length)
                    document.getElementsByClassName("slideF")[0].classList.add("d-none");
                setTimeout(function(){
                    if (slide !== 4) return;
                    document.getElementsByClassName("anim")[0].classList.add("d-none");
                    document.getElementsByClassName("slideS")[0].classList.remove("d-none")
                }, 2000)
            }
            function changeSlide42(){
                if (slide !== 4) return;
                if (document.getElementsByClassName("slideS").length)
                    document.getElementsByClassName("slideS")[0].classList.remove("d-none");
                if (document.getElementsByClassName("slideF").length)
                    document.getElementsByClassName("slideF")[0].classList.add("d-none");
            }
            if (document.getElementsByClassName("slideF").length)
                document.getElementsByClassName("slideF")[0].classList.remove("d-none");
            if (document.getElementsByClassName("anim").length)
                document.getElementsByClassName("anim")[0].classList.add("d-none");
            if (document.getElementsByClassName("slideS").length)
                document.getElementsByClassName("slideS")[0].classList.add("d-none");
            
            return ( 
                <div className="slide-4">
                    <div className="slideF">
                        <p className="thirdAttention">What’s your current frame size?</p>
                        <img src={sizes} alt=""></img>
                        <div className="card" onClick={function(event){chooseParam(66, false);changeSlide41();}}>
                            <p className="name">Small</p>
                            <p className="mm">42-48 mm</p>
                        </div>
                        <div className="card" onClick={function(event){chooseParam(67, false);changeSlide41();}}>
                            <p className="name">Medium</p>
                            <p className="mm">49-53 mm</p>
                        </div>
                        <div className="card" onClick={function(event){chooseParam(66, false);changeSlide41();}}>
                            <p className="name">Large</p>
                            <p className="mm">54-58 mm</p>
                        </div>
                        <p className="bottomText" onClick={changeSlide42}>I don’t know</p>
                    </div>

                    <Anim classN="d-none" text="No worries, we’ve got you!"/>

                    <div className="slideS d-none">
                        <p className="thirdAttention">How wide would you say your face is?</p>
                        <div className="card" onClick={() => chooseParam(66)}>
                            <p className="secondAttention">Wider Than Average</p>
                        </div>
                        <div className="card" onClick={() => chooseParam(67)}>
                            <p className="secondAttention">Average</p>
                        </div>
                        <div className="card" onClick={() => chooseParam(68)}>
                            <p className="secondAttention">Narrower Than Average</p>
                        </div>
                        <p className="bottomText" onClick={() => chooseParam(null)}>Skip</p>
                    </div>
                </div>
            );
        case 5:
            function changeSlide5(){
                if (slide !== 5) return;
                if (document.getElementsByClassName("slideS").length)
                    document.getElementsByClassName("slideS")[0].classList.remove("d-none");
                if (document.getElementsByClassName("slideF").length)
                    document.getElementsByClassName("slideF")[0].classList.add("d-none");
            }

            if (params[1][0] === 211){
                if (document.getElementsByClassName("slideS").length)
                    document.getElementsByClassName("slideS")[0].classList.remove("d-none");
                return ( 
                    <div className="slide-5">
                        <div className="slideS">
                                <p className="thirdAttention">When you’re out and about, which shade of lenses do you prefer?</p>
                                <div className="card" onClick={() => chooseParam("dark")}>
                                    <img src={darkshade} alt=""></img>
                                    <span></span>
                                    <p className="secondAttention">Dark Shade</p>
                                </div>
                                <div className="card" onClick={() => chooseParam("light")}>
                                    <img src={liteshade} alt=""></img>
                                    <span></span>
                                    <p className="secondAttention">Light Shade</p>
                                </div>
                                <div className="card" onClick={() => chooseParam("transition")}>
                                    <img src={transitioningshade} alt=""></img>
                                    <span></span>
                                    <p className="secondAttention">Transitioning Shade</p>
                                </div>
                            </div>
                    </div>
                );
            }else if(params[1][0] === 210){
                if (document.getElementsByClassName("slideF").length)
                    document.getElementsByClassName("slideF")[0].classList.remove("d-none");
                return ( 
                    <div className="slide-5">
                        <div className="slideF">
                            <p className="thirdAttention">Would you like to protect your eyes from light emanating from screens?</p>
                            <div className="card" onClick={() => chooseParam(true)}>
                                <p className="secondAttention">Yes</p>
                            </div>
                            <div className="card" onClick={() => chooseParam(false)}>
                                <p className="secondAttention">No</p>
                            </div>
                        </div>
                    </div>
                );
            }else{
                if (document.getElementsByClassName("slideS").length)
                    document.getElementsByClassName("slideF")[0].classList.remove("d-none");
                if (document.getElementsByClassName("slideS").length)
                    document.getElementsByClassName("slideS")[0].classList.add("d-none");
                return ( 
                    <div className="slide-5">
                        <div className="slideF">
                            <p className="thirdAttention">Would you like to protect your eyes from light emanating from screens?</p>
                            <div className="card" onClick={function(event){chooseParam(true, false);changeSlide5();}}>
                                <p className="secondAttention">Yes</p>
                            </div>
                            <div className="card" onClick={function(event){chooseParam(false, false);changeSlide5();}}>
                                <p className="secondAttention">No</p>
                            </div>
                        </div>

                        <div className="slideS d-none">
                            <p className="thirdAttention">When you’re out and about, which shade of lenses do you prefer?</p>
                            <div className="card" onClick={() => chooseParam("dark")}>
                                <img src={darkshade} alt=""></img>
                                <span></span>
                                <p className="secondAttention">Dark Shade</p>
                            </div>
                            <div className="card" onClick={() => chooseParam("light")}>
                                <img src={liteshade} alt=""></img>
                                <span></span>
                                <p className="secondAttention">Light Shade</p>
                            </div>
                            <div className="card" onClick={() => chooseParam("transition")}>
                                <img src={transitioningshade} alt=""></img>
                                <span></span>
                                <p className="secondAttention">Transitioning Shade</p>
                            </div>
                        </div>
                    </div>
                );
            }
            case 6:    
                if (params[0][0] === 5){
                    return ( 
                        <div className="slide-6">
                            <p className="thirdAttention">Every face shape has a perfect fit. What’s yours?</p>
                            <div className="card" onClick={() => chooseParam("long")}>
                                <img src={ovalmen1} className="one" alt=""></img>
                                <span></span>
                                <p className="secondAttention">I have a long face</p>
                            </div>
                            <div className="card" onClick={() => chooseParam("round")}>
                                <img src={roundmen} className="one" alt=""></img>
                                <span></span>
                                <p className="secondAttention">I have a round face</p>
                            </div>
                            <div className="card" onClick={() => chooseParam("between")}>
                                <img src={ovalmen2} className="one" alt=""></img>
                                <span></span>
                                <p className="secondAttention">In between</p>
                            </div>
                            <p className="bottomText" onClick={() => chooseParam(null)}>I don’t know</p>
                        </div>
                    );
                }else if(params[0][0] === 4){
                    return ( 
                        <div className="slide-6">
                            <p className="thirdAttention">Every face shape has a perfect fit. What’s yours?</p>
                            <div className="card" onClick={() => chooseParam("long")}>
                                <img src={ovalwomen} className="one" alt=""></img>
                                <span></span>
                                <p className="secondAttention">I have a long face</p>
                            </div>
                            <div className="card" onClick={() => chooseParam("round")}>
                                <img src={roundwomen} className="one" alt=""></img>
                                <span></span>
                                <p className="secondAttention">I have a round face</p>
                            </div>
                            <div className="card" onClick={() => chooseParam("between")}>
                                <img src={roundwomen2} className="one" alt=""></img>
                                <span></span>
                                <p className="secondAttention">In between</p>
                            </div>
                            <p className="bottomText" onClick={() => chooseParam(null)}>I don’t know</p>
                        </div>
                    );
                }else{
                    return ( 
                        <div className="slide-6">
                            <p className="thirdAttention">Every face shape has a perfect fit. What’s yours?</p>
                            <div className="card" onClick={() => chooseParam("long")}>
                                <img src={twofaces1} className="two" alt=""></img>
                                <span></span>
                                <p className="secondAttention">I have a long face</p>
                            </div>
                            <div className="card" onClick={() => chooseParam("round")}>
                                <img src={twofaces2} className="two" alt=""></img>
                                <span></span>
                                <p className="secondAttention">I have a round face</p>
                            </div>
                            <div className="card" onClick={() => chooseParam("between")}>
                                <img src={twofaces3} className="two" alt=""></img>
                                <span></span>
                                <p className="secondAttention">In between</p>
                            </div>
                            <p className="bottomText" onClick={() => chooseParam(null)}>I don’t know</p>
                        </div>
                    );
                }
        case 7:
            return(
                <div className="slide-7">
                    <p className="thirdAttention">How would you define your facial features?</p>
                    <div className="card" onClick={() => chooseParam("sharp")}>
                        <p className="secondAttention">Sharp</p>
                    </div>
                    <div className="card" onClick={() => chooseParam("rounded")}>
                        <p className="secondAttention">Rounded</p>
                    </div>
                    <div className="card" onClick={() => chooseParam("between")}>
                        <p className="secondAttention">In between</p>
                    </div>
                    <p className="bottomText" onClick={() => chooseParam(null)}>I don’t know</p>
                </div>
            );

        case 8:
            return(
                <div className="slide-7">
                    <p className="thirdAttention">How would you define your facial features?</p>
                    <div className="card" onClick={() => chooseParam("sharp")}>
                        <p className="secondAttention">Sharp</p>
                    </div>
                    <div className="card" onClick={() => chooseParam("rounded")}>
                        <p className="secondAttention">Rounded</p>
                    </div>
                    <div className="card" onClick={() => chooseParam("between")}>
                        <p className="secondAttention">In between</p>
                    </div>
                    <p className="bottomText" onClick={() => chooseParam(null)}>I don’t know</p>
                </div>
            );
        case 9:
            return(
                <div className="slide-9">
                    <p className="thirdAttention">Are you looking for any particular eyewear brands?</p>
                    <div className="card" onClick={nextSlide}>
                        <p className="secondAttention">Yes, I have some in mind</p>
                    </div>
                    <div className="card" onClick={() => nextSlide(2)}>
                        <p className="secondAttention">No, brand isn't important</p>
                    </div>
                </div>
            );
        case 10:
            return(
                <div className="slide-7">
                    <p className="thirdAttention">How would you define your facial features?</p>
                    <div className="card" onClick={() => chooseParam("sharp")}>
                        <p className="secondAttention">Sharp</p>
                    </div>
                    <div className="card" onClick={() => chooseParam("rounded")}>
                        <p className="secondAttention">Rounded</p>
                    </div>
                    <div className="card" onClick={() => chooseParam("between")}>
                        <p className="secondAttention">In between</p>
                    </div>
                    <p className="bottomText" onClick={() => chooseParam(null)}>I don’t know</p>
                </div>
            );

        case 11:
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