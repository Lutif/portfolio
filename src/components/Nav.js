import React from 'react';

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
        },{
            label: 'Contact',
            id: 'contact'
        }
    ]
    return (
        <div className="Navbar">
            <div className="logo">
            </div>
            <div className="menu">
                <ul>
                    {navitems.map(item =>
                        <li className='navitem'>
                            <a className='navlink' href={`#${item.id}`} > {item.label} 
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}