import React from 'react';
import './App.css';
import Header from './Componetns/Header/index';
import MovieCard from './Componetns/Card/index';
import SubHeader from './Componetns/SubHeader/index'

//import store from './store/store';
//import { Provider } from 'react';

function App() {
  return (
    <div className="App">
     <Header />
     <SubHeader name="New Movies" />
     <MovieCard/>
    </div>
  );
}

export default App;
