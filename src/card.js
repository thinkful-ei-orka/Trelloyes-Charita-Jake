import React from 'react';
import List from './List';

function Cards (props) {
    return (
        <div className="Card">
            <button type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

export default {
Cards
};

