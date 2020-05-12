import React from 'react';
import './card.css';


export default function Cards (props) {
    return (
        <div className="Card">
            <button type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            
        </div>
    );
}


