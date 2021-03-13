import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import API from "./components/API";
import SearchBar from "./components/SearchBar"

function App() {
  return (
    <div className="App">
      <header className="">
        <h1>Employee Directory</h1>
        <p>Use the search box to narrow results</p>
      </header>
      <div>
        <SearchBar 
        // search = "fill in props " handleChange = "Fill in props"
        ></SearchBar>
      </div>
    </div>
  );
}

export default App;
