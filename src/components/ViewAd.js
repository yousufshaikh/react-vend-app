import React, {Component} from 'react';
import '../styles/view-ad.css';
import car from '../images/car.jpg';

class ViewAd extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="add-container">
                            <div className="pull-left">
                                <div>
                                    <h2>Ford Car</h2>
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><i className="fa fa-map-pin"></i> Karachi</li>
                                        <li className="list-inline-item">|</li>
                                        <li className="list-inline-item"><i className="fa fa-clock-o"></i> added on August 18, 2018 6:04am</li>
                                        <li className="list-inline-item">Ad ID: 89753</li>
                                    </ul>
                                </div>
                                <div className="divider"></div>
                                <div>
                                    <img className="img-fluid" src={car} alt="ford-car"/>
                                </div>
                                <div className="divider"></div>
                                <div><h1>Hello This is me</h1></div>
                                <div className="divider"></div>
                                <div className="single-item-detail">
                                    <div className="single-item-metadata"></div>
                                    <div className="single-item-description"></div>
                                </div>
                            </div>
                            <div className="pull-right">
                                <h1>Hello Two</h1>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewAd;