import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import HomeCategories from './components/HomeCategories';
import Footer from './components/Footer';
import SearchMain from './components/SearchMain';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import NotFound from './components/NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AdPosting from './components/AdPosting';
import RegisterUser from './components/RegisterUser';
// import {getFromStorage, setInStorage} from './utils/storage'

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
            <Route path='/user-account' render={props => <div><RegisterUser/></div>}></Route>
            <Route component={NotFound}></Route>
          </Switch>
          <Footer/>
          <AdPosting/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
