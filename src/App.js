import React from 'react';
import logo from './logo.svg';
import store from './store';
import List from './List';
import './App.css';

function App() {
  //for each list in store.list we need to generate a 
  //list of cards from store.list.cardIds
  // const html = [];
  // store.list.forEach(element => {
  let arrayList = [];
 for (i = 0; i < store.lists.length; i++) {
  let myList = [];
  let list = store.lists[i]
   for (e = 0; e < list.cardIds.length; e++){
    let cardId = list.cardIds[e];
    myList.push(store.allCards[cardId]);
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

export default App;
