import React from 'react';
import {testFiles} from './FileData';
import FileListitems from './FileListitems';


export default function FileList() {
    return (
        <table className="file-list">
            <tbody>
                {testFiles.map((file) => (
                    <tr key={file.id}>
                        <FileListitems file={file}></FileListitems>
                    </tr>
                )

                )
                }
            </tbody>
        </table>
    )
}
