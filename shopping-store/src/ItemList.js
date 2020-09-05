import React from 'react'

export default function ItemList(props) {
    return (
        <div className="item">
            <img width="50" height="50"></img>
            <div className="item-middle">
                <div className="item-name">{props.item.name} </div>
                {props.item.description}
            </div>
            <div className="item-end">
                <div>${props.item.price}</div>
                {props.children}
           </div>
        </div>
    )
}
