import React from 'react'

export default function ItemList({item}) {
    return (
        <div>
            <img src="" width="60"></img>
           {item.name} 
           {item.description}
           {item.price}
        </div>
    )
}
