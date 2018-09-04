import React, {Component} from 'react';
import '../styles/register-user.css';

class RegisterUser extends Component{

    render(){
        return(
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
                                                    <input type="text" className="input-box"/>
                                                </div>
                                        </div>
                                        <div>
                                            <label className="pull-left label-form">Password</label>
                                                <div className="input-box-div">
                                                    <input type="password" className="input-box"/>
                                                </div>
                                        </div>
                                        <div className="login-btn-div">
                                            <input type="button" value="Log in" className="btn btn-lg btn-primary login-btn"/>
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
                                                    <input type="text" className="input-box"/>
                                                </div>
                                        </div>
                                        <div>
                                            <label className="pull-left label-form">Last Name</label>
                                                <div className="input-box-div">
                                                    <input type="text" className="input-box"/>
                                                </div>
                                        </div>
                                        <div>
                                            <label className="pull-left label-form">Email</label>
                                                <div className="input-box-div">
                                                    <input type="text" className="input-box"/>
                                                </div>
                                        </div>
                                        <div>
                                            <label className="pull-left label-form">Password</label>
                                                <div className="input-box-div">
                                                    <input type="password" className="input-box"/>
                                                </div>
                                        </div>
                                        <div className="signup-btn-div">
                                            <input type="button" value="Create Account" className="btn btn-lg btn-primary signup-btn"/>
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

export default RegisterUser;