import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentListContainer from './CommentListContainer';


// ========================================

ReactDOM.render(
    <CommentListContainer comments={fetch('./comments.json')} />,
    document.getElementById('root')
);
