import React from 'react'
import moment from 'moment'

export default function time({times}) {
    const timeString=moment(times).fromNow();
return <span className="time">{timeString}</span>
}
