import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Samarth and Anas on Netflix Clone</h1>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending now" fetchURL = {requests.fetchTrending}/>



    </div>
  );
}

export default App;
