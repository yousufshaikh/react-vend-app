import React from 'react'
import logo from '../images/olx-logo.png'
import {Link} from 'react-router-dom'


const Header = (props) => {
    const logoStyle = {
        width: '92px',
        height: '92px'
    }
    const plm = {
        fontSize: '18px',
        fontWeight: 'bold',
        position: 'absolute',
        top: '34px',
        left: '125px'
    }
    const navbarBtnsMargin={
        margin: '24px 0'
    }
    const lstItmMrg = {
        margin: '5px'
    }
    const homeBtn = {
        fontSize: '18px'
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="pull-left">
                        <div className="pull-left">
                            <a title="Market Place - Sell and Buy on Market Place" href="/"><img src={logo} style={logoStyle} alt="market place logo"/></a>
                        </div>
                        <span className="pull-right" style={plm}>Pakistan's Largest Marketplace</span>
                    </div>
                    <div className="pull-right" style={navbarBtnsMargin}>
                        <ul className="nav navbar-nav">
                            <li className="nav-item" style={lstItmMrg}><Link to="/user-account" className="btn btn-default" style={homeBtn}><i className="fa fa-user"></i> <strong>My Account</strong></Link></li>
                            <li className="nav-item" style={lstItmMrg}><Link to="/user-account" className="btn btn-warning" style={homeBtn}><strong>Submit an Ad</strong></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;