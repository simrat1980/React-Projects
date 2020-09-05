import React from 'react';
import ItemList from './ItemList';

export default function Cart({cartItem}) {
    console.log(cartItem);
    return (
        <ul className="item-list">
            {cartItem.map((item) =>(
                <li key={item.id}>
                    <ItemList item={item}>
                        {item.quantity}
                    </ItemList>
                    

                </li>
            )
            )}
        </ul>
    )
}
