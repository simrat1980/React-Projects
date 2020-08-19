import React from 'react'

export default function Avatar({hash}) {
    console.log(hash);
    const url=`https://www.gravatar.com/avatar/${hash}`
    return (
     <img  
     className="avatar" 
     src={url} 
     alt="Avatar">
     </img>
  
    )
}
