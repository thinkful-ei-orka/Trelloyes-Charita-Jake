import React from 'react';
import logo from './logo.svg';
import store from './store';
import List from './List';
import './App.css';

function App(props) {
  //for each list in store.list we need to generate a 
  //list of cards from store.list.cardIds
  // const html = [];
  // store.list.forEach(element => {

  // })

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
      </div>

    </main>
  );
}

export default App;
