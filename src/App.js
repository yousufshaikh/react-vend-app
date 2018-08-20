import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import HomeCategories from './components/HomeCategories';
import Footer from './components/Footer';
import SearchMain from './components/SearchMain';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchMain/>
        <HomeCategories/>
        <Footer/>
        <LoginForm/>
      </div>
    );
  }
}

export default App;
