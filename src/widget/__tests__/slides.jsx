import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Slide from '../comp/slides/slides.jsx';
import '@testing-library/jest-dom'

var slide = 0;

function chooseParam(param){
    slide += 1;
}

describe("slides tests", () => {
    it('slide 3.1: click YES', () => {
        // click "Yes" on 3.1 slide, then we must go on 3.2 slide
        slide = 3;
        render(<Slide slide={slide}/>);
        var buttonYes3_1 = screen.getByText("Yes");
        expect(buttonYes3_1).toBeInTheDocument();
        fireEvent.click(buttonYes3_1);
        expect(screen.getByTestId("slideF").classList.contains("d-none")).toBe(true);
        expect(screen.getByTestId("slideS").classList.contains("d-none")).toBe(false);
    });
    it('slide 3.1: click NO or SKIP', () => {
        // click "No" on 3.1 slide, then we must go on 4 slide
        slide = 3;
        render(<Slide slide={slide} chooseParam={chooseParam}/>);
        var buttonNo3_1 = screen.getByText("No");
        expect(buttonNo3_1).toBeInTheDocument();
        fireEvent.click(buttonNo3_1);
        expect(slide - 4).toBe(0);
    });
    it('slide 4.1: click answer', async () => {
        render(<Slide slide={4} chooseParam={chooseParam}/>);
        var buttonAnswer4_1 = screen.getByText("Small");
        expect(buttonAnswer4_1).toBeInTheDocument();
        fireEvent.click(buttonAnswer4_1);
        expect(screen.getByTestId("slideF").classList.contains("d-none")).toBe(true);
        expect(screen.getByTestId("anim").classList.contains("d-none")).toBe(false);        
    });
    it('slide 4.1: click I DONT KNOW', () => {
        render(<Slide slide={4} chooseParam={chooseParam}/>);
        var buttonDontKnow4_1 = screen.getByText("I don’t know");
        expect(buttonDontKnow4_1).toBeInTheDocument();
        fireEvent.click(buttonDontKnow4_1);
        expect(screen.getByTestId("anim").classList.contains("d-none")).toBe(true);
        expect(screen.getByTestId("slideS").classList.contains("d-none")).toBe(false);     
    });
    it('slide 5', () => {
        var paramsE = [[0], ["eyeglasses"]] // search eyeglasses
        var paramsS = [[0], ["sunglasses"]] // search sunglasses
        render(<Slide slide={5} params={paramsE}/>);
        render(<Slide slide={5} params={paramsS}/>);
        
    });
    it('slide 6', () => {
        var paramsM = [[5]] // men style
        var paramsW = [[4]] // women style
        render(<Slide slide={6} params={paramsM}/>);
        render(<Slide slide={6} params={paramsW}/>);
    });
    it('slide 9', () => {
        render(<Slide slide={9}/>);
        
    });
})
