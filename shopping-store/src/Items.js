import React from 'react';
import { itemData } from './ItemData';
import ItemList from './ItemList';

export default function Items() {
    return (
        <ul>
            {itemData.map((item) => (
                <li key={item.id}>
                    
                    <ItemList item={item}></ItemList>

                </li>
            )
            )
            };
            
        
            
        </ul>
    )
}
