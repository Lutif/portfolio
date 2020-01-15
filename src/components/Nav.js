import React from 'react';
import './styles.css'

export default function Nav(props)
{
    const navitems = [
        {
            label: 'Projects',
            id: 'projects'
        },
        {
            label: 'Skills',
            id: 'skills'
        },
        {
            label: 'Contact',
            id: 'contact'
        }
    ]
    return (
        <div className="navbar">
            <div className="logo">
                Lutif Ali
            </div>
                <ul className="nav">
                    {navitems.map(item =>
                        <li key={item.id} className='navitem'>
                            <a className='navlink' href={`#${item.id}`} > {item.label} 
                            </a>
                        </li>
                    )}
                </ul>
        </div>
    )
}