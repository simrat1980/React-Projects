import React from 'react'

export default function Nav({onTabChange}) {
    return (
        <nav className="App-nav">
            <ul>
                <li className="App-nav-item">
                    <button onClick={()=>onTabChange('item')}>Item</button>    
                </li>
                <li className="App-nav-item">
                    <button onClick={()=>onTabChange('cart')}>Cart</button>
                </li>
            </ul>
        </nav>
    )
}
