import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending now" fetchURL = {requests.fetchTrending}/>
      <Row title="TopRated" fetchURL = {requests.fetchTopRated}/>
      <Row title="Popular" fetchURL = {requests.fetchPopular}/>
      <Row title="Horror Movies" fetchURL = {requests.fetchHorrorMovies}/>



    </div>
  );
}

export default App;
