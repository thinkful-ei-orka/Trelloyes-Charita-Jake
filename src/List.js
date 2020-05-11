import React from 'react';
import Card from './card.js';
import './List.css';


export default function List(props) {

    const listOfCards = props.cards.map(card => (
      <Card key={card.id} title={card.title} content={card.content} />
    ));
    console.log(Card);
    return (
        <section className="List">
            <header className="List-header">
             <h3>{props.header}</h3>
            </header>
            <div className="List-cards">
             {listOfCards}
            </div>
    </section>  

    );
  }


