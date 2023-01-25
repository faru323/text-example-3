import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './examples.scss'





const Example = () => {
   



    const images = [
        "https://wallpaperaccess.com/full/2862101.jpg",
        "https://wallpaperaccess.com/full/2862101.jpg",
        "https://wallpaperaccess.com/full/2862101.jpg"
    ]       

    return (

      

        <Slide>
        
            <div className="each-slide-effect">
            
                <div className='sliderImage' style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <p className='sliderText'>Get Your <span>Education</span> Today!</p>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='sliderImage' style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <p className='sliderText'>Get Your <span>Education</span> Today!</p>
                </div>
            </div>
            <div  className="each-slide-effect">
                <div className='sliderImage' style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <p className='sliderText'>Get Your <span>Education</span> Today!</p>
                </div>
            </div>
        </Slide>
    );
};

export default Example;


