import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import HomeCategories from './components/HomeCategories';
import Footer from './components/Footer';
import SearchMain from './components/SearchMain';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchMain/>
        <HomeCategories/>
        <Footer/>
      </div>
    );
  }
}

export default App;
