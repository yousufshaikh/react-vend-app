
// ViewAds.js file show all the ads list

import React, {Component} from 'react';
import '../styles/view-ads.css';
import img from '../images/download.jpeg'

class ViewAds extends Component{

    // state = {
    //     isLoading: true,
    //     ads: []
    // }

    // componentDidMount(){
    //     this.fetchData();
    // }
    
    // fetchData(){
    //     console.log("fetching Data function");

    //     fetch('http://localhost:3001/adverts/ads')
    //     .then(response => response.json())
    //     .then(parsedJSON => parsedJSON.results.map(ad => (
    //         {
    //             title: `${ad.title}`
    //         }
    //     )))
    //     .then(ads => this.setState({
    //         ads,
    //         isLoading: false
    //     }))
    //     // console.log("josn", josn)
    //     .catch(error => console.log("parsing fails", error))
    // }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="">
                                <h2>View Ads</h2>
                                <h4>We found {18} ads</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 back-view-ad">
                            <div className="col-lg-3 single-img-container">
                                <a href=""><img className="img-fluid" src={img} alt="car"/></a>
                            </div>
                            <div className="col-lg-9">
                                <div className="item-title">
                                    <h3><a href=""><h3>Ford car</h3></a></h3>
                                    <p><strong>Category: Car</strong></p>
                                    <div className="pull-left">
                                        <p className="price">Rs: 400000</p>
                                    </div>
                                    <div className="pull-right">
                                        <button className="btn btn-primary">
                                            <i class="fa fa-heart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center" >
                        <p>Ads are loading ....</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewAds;
