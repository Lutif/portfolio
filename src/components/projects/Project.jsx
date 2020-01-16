import React from 'react';

export default function Project(props)
{

const image=require(`${props.content.image}`)
    return <div className='projectContainer'  >
        <div className='projectImage'>
            <img className='projectImage' src={image} alt ='' />
        </div>
        <div className='light projectDescription'>
            <h4>{props.content.name}</h4>
            <p>{props.content.intro}</p>
            <p>{`Technologies: ${props.content.tech}`}</p>
            <div className="projectDetails">
                <p>{props.content.discription}</p>
                <button><a href={props.content.url}> Demo</a></button>
            </div>
        </div>
    </div>
}


