import React from 'react';
import logo from './logo.svg';
import './App.css';
import Providers from './Providers';
import { Digimon } from './components/Digimon';
import { ListDigimons } from './components/ListDigimons';
import {ListFavorites} from './components/ListFavorites'

function App() {
  return (
    <Providers>
      <div className="App">
          <h1>hello</h1>
          <ListFavorites />
          <ListDigimons/>
          
      </div>
    </Providers>
  );
}

export default App;
