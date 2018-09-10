import React, {Component} from 'react';
import 



class ViewAds extends Component{

    state = {
        isLoading: true,
        ads: []
    }

    componentDidMount(){
        this.fetchData();
    }
    
    fetchData(){
        console.log("fetching Data function");

        fetch('http://localhost:3001/adverts/ads')
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.results.map(ad => (
            {
                title: `${ad.title}`
            }
        )))
        .then(ads => this.setState({
            ads,
            isLoading: false
        }))
        console.log("josn", josn)
        .catch(error => console.log("parsing fails", error))
    }

    render(){
        const {isLoading, ads} = this.state;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {
                            !isLoading && ads.length > 0 ? ads.map(ad => {
                                <ul className="list-group" key={ad.index}>
                                    <li className="list-group-item">{ad.title}</li>
                                </ul> 
                            }) : null
                        }
                    </div>
                </div>
                <div className="text-center" >
                    <p>Ads are loading ....</p>
                </div>
            </div>
        );
    }
}

export default ViewAds;
