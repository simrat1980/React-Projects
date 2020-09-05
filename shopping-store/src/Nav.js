import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        
            <ul className="App-nav">
                <li>
                    <NavLink 
                    className="App-nav-button" 
                    activeClassName="App-nav-item" 
                    to="/items"
                    >
                    Items
                    </NavLink>  
                </li>
                <li>
                    <NavLink 
                    className="App-nav-button" 
                    activeClassName="App-nav-item" 
                    to="/cart"
                    >
                    Cart
                    </NavLink>
                </li>
            </ul>
        
    )
}
