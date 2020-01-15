import React from 'react';
import image from '../images/main.svg' ;

export default function Main(props) {
    return (
        <div className='contianer' >
            <div className='text'>
                <h1>Hi, I am <span>Lutif Ali</span> </h1>
                <p>a web developer</p>
            </div>
            <img className='main-image' src={image} alt=''/>
        </div>
    )
}