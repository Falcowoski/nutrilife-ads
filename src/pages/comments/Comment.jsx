import React from 'react';
import icon from '../../images/whiteGuy.png';

function Comment({ userIcon, userName, message }) {
    return (
        <div className="comment__wrapper">
            <img src={icon} />
            <h4>{userName}</h4>
            <p>{message}</p>
        </div>
    );
}

export default Comment;