import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
library.add(faTwitter, faFacebook, faInstagram);

function Footer() {

    return (
        <div className="footer">
            <h4>Follow us...</h4>
            <div className="social-div">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebook} className="fb" />
                <FontAwesomeIcon icon={faInstagram} className="ig" />
            </div>
            <p className="copyright">Copyright 2019, LambdaTeam</p>

        </div>
    )
}


export default Footer;