import React from 'react';
import '../styles/social-media.css'

const SocialMedia = () => {
    return(
        <div className="olx-social-media">
            <p>Follow On</p>
            <ul className="uol-social-media">
                <li><i class="fa fa-2x fa-facebook" aria-hidden="true"></i></li>
                <li><i class="fa fa-2x fa-youtube-play" aria-hidden="true"></i></li>
                <li><i class="fa fa-2x fa-phone" aria-hidden="true"></i></li>
            </ul>
        </div>
    );
}

export default SocialMedia