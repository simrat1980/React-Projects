import React from 'react'
import Avatar from './Avatar'
import Author from './Author'
import Message from './Message'
import Time from './Time'
import ReplyButton from './ReplyButton'
import ReTweetButton from './ReTweetButton'
import LikeButton from './LikeButton'
import MoreOptionsButton from './MoreOptionsButton'


export default function Tweet() {
    const testTweet={
        message:"Something about the cars",
        gravatar:"xyz",
        author:{
            name:"SIMRAT",
            handle:"fan of cars"
        },
        likes:2,
        retweets: 10,
        timestamp: "2019-01-30 21:24:37"
    };
    return (
        <div className="tweet">
           <Avatar hash={testTweet.gravatar}></Avatar>
           <div className="content">
                <Author 
                name={testTweet.author.name} 
                handle={testTweet.author.handle}>
                </Author><Time times={testTweet.timestamp}></Time>
                <Message
                msg={testTweet.message}>
                </Message>
                <div className="buttons">
                    <ReplyButton></ReplyButton>
                    <ReTweetButton count={testTweet.retweets}></ReTweetButton>
                    <LikeButton count={testTweet.likes}></LikeButton>
                    <MoreOptionsButton></MoreOptionsButton>
                </div>
           </div>
        </div>
    )
}
