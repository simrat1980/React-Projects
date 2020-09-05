import React from 'react';
import ItemList from './ItemList';

export default function Items({addItemsToCart,items}) {
    return (
        <ul className="item-list">
            {items.map((item) => (
                <li key={item.id}>
                    <ItemList 
                    item={item}>
                    <button onClick={()=>addItemsToCart(item)}>Add to Cart</button>
                    </ItemList>
                </li>
            )
            )
            }
            
        
            
        </ul>
    )
}
