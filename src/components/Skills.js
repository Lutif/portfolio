import React from 'react';
import html from '../images/html5.svg';
import css from '../images/css.svg';
import js from '../images/javascript.svg';
import react from '../images/react.svg';
import mongo from '../images/mongodb.svg';
import node from '../images/nodejs.svg';
import git from '../images/github.svg';
import heroku from '../images/heroku.svg';

export default function Skills()
{
const stack=[ html, css, js, react, node, mongo, git, heroku]

    return (
        <div id="skills" className='dark contianer skills'>
            <h2>My Toolkit</h2>
            
            <div className='skillsList'>
                {stack.map(logo => <div className='skillslogo'>
                    <img src={logo} alt=''>
                    </img></div>
                )}
                </div>
                
        </div>
    )
}