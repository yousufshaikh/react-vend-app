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
import AdPosting from './components/AdPosting';
// import {getFromStorage, setInStorage} from './utils/storage'

class App extends Component {
  state = {
    isLoading: false,
    name: "John",
    token: '', 
    signUpError: '', 
    signInError: ''
  }

  // componentDidMount(){
  //   const token = getFromStorage('the_main_app');
  //   if(token){
  //     fetch('/account/verify')
  //     .then(res => res.json())
  //     .then(json => {
  //       if(json.success){
  //         this.setState({
  //           token: token,
  //           isLoading: false
  //         });    
  //       }
  //       else{
  //         this.setState({
  //           isLoading: false
  //         })
  //       }
  //     })
  //   }else{
  //     this.setState({
  //       isLoading: false,
  //     });
  //   }
  // }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Header/>
          <Switch>
            <Route path="/" exact render={props => 
                <div>
                  <SearchMain/>
                  <HomeCategories myName={this.state.name} loading={this.state.isLoading}/>
                </div>
                }>
            </Route>
            <Route path="/user-register" render={props => <div><SignupForm/></div>}></Route>
            <Route path='/user-login' render={props => <div><LoginForm/></div>}></Route>
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
