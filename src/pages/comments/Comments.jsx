import React from 'react';
import Comment from './Comment';

import './Comments.css';

import { comments } from './Comments.json';

function Comments() {
    // const [userComments, setUserComments] = useState(Comments);
    console.count('Eu sou o Comments')

    return (
        <div className="comments__container">
            <div className="comments__container__title">
                <h2>Comentários dos Usuários</h2>
            </div>
            {comments.map((comment) => (
                <Comment 
                    userIcon={comment.icon} 
                    userName={comment.name} 
                    message={comment.message}
                    key={comment.name}
                />
            ))}
        </div>
    );
}

export default Comments;