import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import HomeCategories from './components/HomeCategories';
import Footer from './components/Footer';
import SearchMain from './components/SearchMain';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import NotFound from './components/NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header/>
          <Switch>
            <Route path="/" exact render={props => 
                <div>
                  <SearchMain/>
                  <HomeCategories/>
                </div>
                }>
            </Route>
            <Route path="/user-register" component={SignupForm}></Route>
            <Route path='/user-login' component={LoginForm}></Route>
            <Route component={NotFound}></Route>
          </Switch>
          <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
