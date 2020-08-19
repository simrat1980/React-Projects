import React from 'react';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';


export default function FileListitems( {file} ) {
    return (
        <>
            <FileName name={file.name} type={file.type}/>
            <CommitMessage msg={file.latestCommit.message}></CommitMessage>
            <Time time={file.updated_at}></Time>
        </>
    )
}
