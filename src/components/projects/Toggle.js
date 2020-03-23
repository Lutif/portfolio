import React from 'react';

export default function Toggle(props){
  
    return (<div className='togglerContainer'><input className='toggler' type='checkbox' onClick={props.toggle}/> </div>)
}