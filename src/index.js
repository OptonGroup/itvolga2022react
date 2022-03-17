import React, {useState} from 'react';
import Header from './comp/header.jsx'
import Slides from './comp/slides.jsx'
import ReactDOM from 'react-dom';
import './styles/widget.css'


function Widget(){
    const [slide, setSlide] = useState(0);

    function nextSlide(){
        setSlide(slide+1);
    }

    function previousSlide(){
        setSlide(slide-1);
    }

    function zeroSlide(){
        setSlide(slide-slide);
    }

    return(
        <div className="widget">
            <Header slide={slide} nextSlide={nextSlide}  previousSlide={previousSlide}  zeroSlide={zeroSlide}/>
            <Slides slide={slide} nextSlide={nextSlide}/>
        </div>
    )
}



ReactDOM.render(
    Widget(),
    document.getElementById('glasses-quiz-widget')
);