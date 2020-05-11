import React from 'react';

import STORE from './store';
import List from './List';
import './App.css';

export default function App() {
  //for each list in store.list we need to generate a 
  //list of cards from store.list.cardIds
  // const html = [];
  // store.list.forEach(element => {
    //console.log(store.lists.length);
  let holdList = STORE.lists
  console.log(holdList);
  let arrayList = [];
 for (let i = 0; i < STORE.lists.length; i++) {
  let myList = [];
  let list = STORE.lists[i]
   for (let e = 0; e < list.cardIds.length; e++){
    let cardId = list.cardIds[e];
    myList.push(STORE.allCards[cardId]);
   }
  
    // <List />
    arrayList.push(<List header = {list.header} cards = {myList} />)

  // })

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {arrayList}
      </div>

    </main>
  );
}
}

