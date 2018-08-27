import React from 'react';
import '../styles/social-media.css'

const SocialMedia = () => {
    const followMrg ={
        margin: '0 10px'
    }
    return(
        <div className="olx-social-media pull-right">
            <p style={followMrg}>Follow</p>
            <ul className="uol-social-media">
                <li><i className="fa fa-2x fa-facebook" aria-hidden="true"></i></li>
                <li><i className="fa fa-2x fa-youtube-play" aria-hidden="true"></i></li>
                <li><i className="fa fa-2x fa-phone" aria-hidden="true"></i></li>
            </ul>
        </div>
    );
}

export default SocialMedia