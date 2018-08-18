import React from 'react';
import '../styles/search-main.css';

const SearchMain = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <form action="" className="search-main">
                        <fieldset>
                            <div className="pull-left"><input className="city-field" placeholder="Pakistan" type="text"/></div>
                            <div className="pull-left"><input className="query-field" placeholder="36,31,933 Ads near you" type="text"/></div>
                            <div className="pull-right"><button>Search</button></div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchMain