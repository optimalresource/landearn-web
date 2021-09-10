import React from 'react'
import Facebook from "../../../assets/images/mobile/fb.png";
import Google from "../../../assets/images/mobile/google.png";
import Linkedin from "../../../assets/images/mobile/linkedin.png";

const SocialButtons = () => {
    return (
      <div className="social-buttons">
        <div className="social-button">
          <img
            src={Facebook}
            alt="Continue with Facebook"
            className="social-button-icon"
          />
          <div className="social-button-text axiforma-regular-normal-santas-gray-14px">
            Continue with Facebook
          </div>
        </div>
        <div className="social-button">
          <img
            src={Google}
            alt="Continue with Google"
            className="social-button-icon"
          />
          <div className="social-button-text axiforma-regular-normal-santas-gray-14px">
            Continue with Google
          </div>
        </div>
        <div className="social-button">
          <img
            src={Linkedin}
            alt="Continue with Linkedin"
            className="social-button-icon"
          />
          <div className="social-button-text axiforma-regular-normal-santas-gray-14px">
            Continue with Linkedin
          </div>
        </div>
      </div>
    );
}

export default SocialButtons;