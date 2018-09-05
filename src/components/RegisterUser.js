import React, {Component} from 'react';
import '../styles/register-user.css';
import {getFromStorage, setInStorage} from '../utils/storage'

class RegisterUser extends Component{
    state = {
        isLoading: true,
        token: '',
        signUpError: '',
        signInError: '',
        signInEmail: '',
        signInPassword: '',
        signUpFirstName: '',
        signUpLastName: '',
        signUpEmail: '',
        signUpPassword: ''
    }

    onChangeTextBoxSignInEmail = this.onChangeTextBoxSignInEmail.bind(this)
    onChangeTextBoxSignInPassword = this.onChangeTextBoxSignInPassword.bind(this)
    onChangeTextBoxSignUpEmail = this.onChangeTextBoxSignUpEmail.bind(this)
    onChangeTextBoxSignUpFirstName = this.onChangeTextBoxSignUpFirstName.bind(this)
    onChangeTextBoxSignUpLastName = this.onChangeTextBoxSignUpLastName.bind(this)
    onChangeTextBoxSignUpPassword = this.onChangeTextBoxSignUpPassword.bind(this)

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

    onChangeTextBoxSignInEmail(event){
        this.setState({
            signInEmail : event.target.value,
        });
    }

    onChangeTextBoxSignInPassword(event){
        this.setState({
            signInPassword: event.target.value,
        });
    }

    onChangeTextBoxSignUpFirstName(event){
        this.setState({
            signUpFirstName: event.target.value,
        });
    }

    onChangeTextBoxSignUpLastName(event){
        this.setState({
            signUpLastName: event.target.value,
        });
    }

    onChangeTextBoxSignUpEmail(event){
        this.setState({
            signUpEmail : event.target.value,
        });
    }

    onChangeTextBoxSignUpPassword(event){
        this.setState({
            signUpPassword: event.target.value,
        })
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
                                {
                                    (this.state.signInError) ? (
                                        <p>{this.state.signInError}</p>
                                    ) : (null)
                                }
                                <h2 className="login-style"><strong>Log In</strong></h2>
                                <div className="login-box">
                                    <div className="login-form-inner">
                                        <form>
                                            <div>
                                                <label className="pull-left label-form">Your Email</label>
                                                    <div className="input-box-div">
                                                        <input type="text" className="input-box" placeholder="Your Email" value={this.state.signInEmail} onChange={this.onChangeTextBoxSignInEmail}/>
                                                    </div>
                                            </div>
                                            <div>
                                                <label className="pull-left label-form">Password</label>
                                                    <div className="input-box-div">
                                                        <input type="password" className="input-box" placeholder="Password" value={this.state.signInPassword}/>
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
                                                        <input type="text" className="input-box" placeholder="First Name" value={this.state.signUpFirstName}/>
                                                    </div>
                                            </div>
                                            <div>
                                                <label className="pull-left label-form">Last Name</label>
                                                    <div className="input-box-div">
                                                        <input type="text" className="input-box" placeholder="Last Name" value={this.state.signUpLastName}/>
                                                    </div>
                                            </div>
                                            <div>
                                                <label className="pull-left label-form">Email</label>
                                                    <div className="input-box-div">
                                                        <input type="text" className="input-box" placeholder="Your Email" value={this.state.signUpEmail}/>
                                                    </div>
                                            </div>
                                            <div>
                                                <label className="pull-left label-form">Password</label>
                                                    <div className="input-box-div">
                                                        <input type="password" className="input-box" placeholder="Password" value={this.state.signUpPassword}/>
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