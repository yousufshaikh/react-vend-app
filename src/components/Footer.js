import React from 'react'

const Footer = (props) => {
    const footerContainer ={
        borderTop: '2px solid #eee'
    }
    return(
        <div style={footerContainer}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="pull-left">
                            <h1>Heading One</h1>
                        </div>
                        <div className="pull-right">
                            <h1>Heading One</h1>
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