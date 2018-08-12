import React from 'react'
import logo from '../images/olx-logo.png'


const Header = () => {
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
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-sm-6">
                    <div className="pull-left">
                        <div className="pull-left">
                            <a title="Market Place - Sell and Buy on Market Place"><img src={logo} style={logoStyle} alt="market place logo"/></a>
                        </div>
                        <span className="pull-right" style={plm}>Pakistan's Largest Marketplace</span> 
                    </div>
                    <div className="pull-right" style={navbarBtnsMargin}>
                        <ul className="nav navbar-nav">
                            <li className="nav-item"><button className="btn btn-default"><i class="fa fa-user"></i> My Account</button></li>
                            <li className="nav-item"><button className="btn btn-warning">Submit an Ad</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;