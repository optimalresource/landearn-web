import React from 'react'
import './index.css'
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "../../responsive";
import SubscribeBG from "../../assets/images/mobile/subscribe-bg.png";
import SubscribeLargeBG from "../../assets/images/mobile/subscribe-bg-large.png";

const Subscribe = () => {
    const isMoreTextQuery = useMediaQuery({
      query: mediaQueries.moreTextQuery,
    });
    const isDesktopMinQuery = useMediaQuery({
      query: mediaQueries.desktopMinQuery,
    });
    let title = "";
    if (isMoreTextQuery){
        title = "Don't miss the best verified offers on Landearn";
    }else {
        title = "Don't miss the best verified offers";
    }
      return (
        <div className="subscribe-wrapper">
          <img
            src={isDesktopMinQuery ? SubscribeLargeBG : SubscribeBG}
            alt="good"
            className="subscribe-bg"
          />
          <div className="subscribe-header axiforma-bold-cod-gray-28px">
            {title}
          </div>

          <div className="subscribe-note axiforma-bold-cod-gray-20px">
            Subscribe today to get fresh offers faster
          </div>

          <div className="subscribe-email-section">
            <div className="subscribe-input">
              <input
                type="text"
                name="subscribe"
                placeholder="Email address"
                className="subscribe-input-text axiforma-regular-normal-santas-gray-14px"
              />
            </div>
            <div className="subscribe-button">
              <div className="button-primary">
                <div className="button-primary-text">Subscribe</div>
              </div>
              {/* <PButton className="" title="Subscribe" url="https://landearn.com" /> */}
            </div>
          </div>
        </div>
      );
}

export default Subscribe;