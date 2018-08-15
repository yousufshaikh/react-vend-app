import React from 'react'
import SocialMedia from './SocialMedia';

const HomeCategories = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <h1>Categories</h1>
                </div>
                <div className="col-lg-5 pull-right">
                    <SocialMedia/>
                </div>
            </div>
        </div>
    );
}

export default HomeCategories;