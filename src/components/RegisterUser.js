import React, {Component} from 'react';
import '../styles/register-user.css';
import {getFromStorage, setInStorage} from '../utils/storage'

class RegisterUser extends Component{
    state = {
        isLoading: true,
        token: '',
        signUpError: '',
        signInError: ''
    }

    componentDidMount(){
        const token = getFromStorage('the_main_app');
        if(token){
            // verify
            fetch('/account/verify?token=' + token)
            .then(res => res.json())
            .then(json => {
                if(json.success){
                    this.setState({
                        token,
                        isLoading: false
                    });
                }
                else{
                    this.setState({
                        isLoading: false
                    });
                }
            });
        }
        else{
            this.setState({ isLoading: false })
        }
    }

    render(){
        if (this.state.isLoading) {
            return(
                <div><p>Lodaing ...</p></div>
            );
        }

        if(!this.state.token){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login-form-grid">
                                <h2 className="login-style"><strong>Log In</strong></h2>
                                <div className="login-box">
                                    <div className="login-form-inner">
                                        
                                        <form>
                                            <div>
                                                <label className="pull-left label-form">Your Email</label>
                                                    <div className="input-box-div">
                                                        <input type="text" className="input-box" placeholder="Your Email"/>
                                                    </div>
                                            </div>
                                            <div>
                                                <label className="pull-left label-form">Password</label>
                                                    <div className="input-box-div">
                                                        <input type="password" className="input-box" placeholder="Password"/>
                                                    </div>
                                            </div>
                                            <div className="login-btn-div">
                                                <button className="btn btn-lg btn-primary login-btn">Log In</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="signup-form-grid">
                                <h2 className="signup-style"><strong>Create an account</strong></h2>
                                <div className="signup-box">
                                    <div className="signup-form-inner">
                                        <form>
                                            <div>
                                                <label className="pull-left label-form">First Name</label>
                                                    <div className="input-box-div">
                                                        <input type="text" className="input-box" placeholder="First Name"/>
                                                    </div>
                                            </div>
                                            <div>
                                                <label className="pull-left label-form">Last Name</label>
                                                    <div className="input-box-div">
                                                        <input type="text" className="input-box" placeholder="Last Name"/>
                                                    </div>
                                            </div>
                                            <div>
                                                <label className="pull-left label-form">Email</label>
                                                    <div className="input-box-div">
                                                        <input type="text" className="input-box" placeholder="Your Email"/>
                                                    </div>
                                            </div>
                                            <div>
                                                <label className="pull-left label-form">Password</label>
                                                    <div className="input-box-div">
                                                        <input type="password" className="input-box" placeholder="Password"/>
                                                    </div>
                                            </div>
                                            <div className="signup-btn-div">
                                                <button className="btn btn-lg btn-primary signup-btn">Create Account</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
            );
        }
    }
}

export default RegisterUser;