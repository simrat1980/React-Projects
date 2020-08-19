import React from 'react'

export default function LikeButton({count}) {
    return (
        <span className="like-button">
            <i className="fa fa-heart"></i>
          <span className="like-count">
              {count ? count : null }
          </span>
        </span>
    
    );
}
