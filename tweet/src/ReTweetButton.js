import React from 'react'



export default function ReTweetButton({count}) {
    return (
        <span className="retweet-button">
    <i className="fa fa-retweet"></i>
    <span className="retweet-count">
    {count ? count : null }
    </span>
    </span>
    );
}
