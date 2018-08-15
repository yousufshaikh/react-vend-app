import React from 'react'
import '../styles/classified-list.css'

const ClassifiedList = () => {
    return(
        <ul className="olx-category-list">
            <li><a href=""><i class="fa fa-4x fa-home" aria-hidden="true"></i>Property for Sale</a></li>
            <li><a href=""><i class="fa fa-4x fa-building" aria-hidden="true"></i>Property for Rent</a></li>
            <li><a href=""><i class="fa fa-4x fa-car" aria-hidden="true"></i>Vehicles</a></li>
            <li><a href=""><i class="fa fa-4x fa-motorcycle" aria-hidden="true"></i>Bikes</a></li>
        </ul>
    );
}

export default ClassifiedList