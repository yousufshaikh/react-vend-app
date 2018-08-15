import React from 'react'
import SocialMedia from './SocialMedia';
import ClassifiedList from './ClassifiedList';

const HomeCategories = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <ClassifiedList/>
                </div>
                <div className="col-lg-5">
                    <SocialMedia/>
                </div>
            </div>
        </div>
    );
}

export default HomeCategories;