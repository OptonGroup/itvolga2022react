import React from "react";
import '../styles/animate.css'
import like from "../img/like.svg"

const Animate = function({text, classes=""}){
    classes += " anim"
    return (
        <div className={classes}>
            <div className='circle'>
                <img src={like} alt=''></img>
            </div>
            <p className="firstAttention">{text}</p>
        </div>
    )
}

export default Animate;