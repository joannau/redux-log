import React from 'react';

function CommentList({comments}) {
    return (
        <ul>
            {comments.map((entry, i) => (
                <li key={i}>
                    <p>{entry.name}</p>
                    <p>{entry.content}</p>
                </li>
            ))}
        </ul>
    )

}

export default CommentList;