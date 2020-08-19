import React from 'react'

export default function FileName({name,type}) {
    let icon='fa-file-text-o';
    if(type==='folder')
    icon='fa-folder';
    return (
        <>
            <td className="file-icon">
                <i className={`fa ${icon}`}></i>
            </td>
            <td className="file-name">{name}</td>   
            
        </>
    )
}
