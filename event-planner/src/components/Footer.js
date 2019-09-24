import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
library.add(faTwitter, faFacebook, faInstagram);

function Footer() {

    return (
        <div className="footer">
            <h4 className="follow-us">Follow us...</h4>
            <div className="social-div">
                <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                <Link to="#"><FontAwesomeIcon icon={faFacebook} className="fb" /></Link>
                <Link to="#"><FontAwesomeIcon icon={faInstagram} className="ig" /></Link>
            </div>
            <p className="copyright">Copyright 2019, LambdaTeam</p>

        </div>
    )
}


export default Footer;