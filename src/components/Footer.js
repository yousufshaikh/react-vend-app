import React from 'react'
import logo from '../images/olx-logo.png'

const Footer = (props) => {
    const footerContainer ={
        borderTop: '2px solid #eee'
    }
    const logoStyle = {
        width: '92px',
        height: '92px'
    }
    const containerWrapper = {
        marginTop: '30px'
    }
    const unOrderList = {
        listStyle: 'none'
    }
    return(
        <div style={footerContainer}>
            <div className="container" style={containerWrapper}>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="pull-left">
                            <img src={logo} style={logoStyle} alt="OLX.com.pk - OLX Pakistan"/>
                        </div>
                        <div className="pull-left">
                            <ul className="unOrderList">
                                <li>Local Map</li>
                                <li>Popular Searches</li>
                                <li>Archive</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                        <div className="pull-left">
                            <ul className="unOrderList">
                                <li>Terms of Use</li>
                                <li>Help & Contact Us</li>
                            </ul>
                        </div>
                        <div className="pull-left">
                            <ul className="unOrderList">
                                <li>Who We Are</li>
                                <li>Join OLX</li>
                                <li>Happy OLXers</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h1>Hello Two</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;