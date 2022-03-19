import React from "react";
import '../styles/animate.css'
import like from "../img/like.svg"

const Animate = function({text}){
    return (
        <div className="anim">
            <div className='circle'>
                <img src={like} alt=''></img>
            </div>
            <p className="firstAttention">{text}</p>
        </div>
    )
}

export default Animate;