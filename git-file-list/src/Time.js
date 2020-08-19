import React from 'react';
import moment from 'moment';

export default function Time( {time}) {
    return(
        <td className="time">
            {moment(time).fromNow()};
        </td>
    )
}
