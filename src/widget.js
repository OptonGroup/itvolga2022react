import React, {useState} from 'react';
import Header from './comp/header.jsx'
import Slides from './comp/slides.jsx'
import './styles/widget.css'

var link = document.getElementById("glasses-quiz-widget").dataset.source;
var params = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
var paramsName = ['gender', 'eyewear_type', 'lenstype', 'frame_size', ['blue_light', 'shade'], 'face_shape', 'facial_features', 'shape', 'brand'];

function Widget() {
    const [slide, setSlide] = useState(0);

    function send(){
        var new_link = link;
        if (new_link[new_link.length-1] !== '/') new_link += '/';
        new_link += '?';
        params.forEach(function(param, ind){
            if (param !== undefined){
                
                switch (ind){
                    case 4:
                        if (param[0] !== undefined)
                            new_link += paramsName[ind][0] + '=' + String(param[0]) + '&';
                        if (param[1] !== undefined)
                            new_link += paramsName[ind][1] + '=' + String(param[1]) + '&';

                        break;
                    case 7:
                    case 8:
                        new_link += paramsName[ind];
                        param.forEach(function(val){
                            new_link += val + ',';
                        })
                        new_link = new_link.slice(0, -1);
                        new_link += '&';
                        break;
                    default:
                        new_link += paramsName[ind] + '=' + String(param) + '&';
                        break;
                }

            }
           console.log(paramsName[ind], param);
        })
        new_link = new_link.slice(0, -1);
        console.log(new_link);
        console.log('\n');
    }

    function chooseParam(param, next=true){
        if (slide === 5){
            if (typeof param === 'string')
                params[slide-1][0] = param;
            else
                params[slide-1][1] = param;
            }
        params[slide-1] = param;
        if (next)
            nextSlide();
    }

    function nextSlide(){
        setSlide(slide+1);
        if(slide >= 5){
            send();
            zeroSlide();
        }
    }

    function previousSlide(){
        setSlide(slide-1);
    }

    function zeroSlide(){
        setSlide(slide-slide);
        params = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    }

    return ( 
        <div className="widget">
            <Header slide={slide} nextSlide={nextSlide} previousSlide={previousSlide}  zeroSlide={zeroSlide}/>
            <Slides slide={slide} nextSlide={nextSlide} chooseParam={chooseParam} params={params}/>
        </div>
    );
}

export default Widget;