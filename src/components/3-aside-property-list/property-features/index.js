import React from "react";
import "./index.css";

const PropertyFeatures = () => {
  return (
    <div className="feature-container">
      <div className="inner-container containing-div">
        <div className="text-container">
          <div className="text-title">3 Bedroom Detached Townhouse</div>
          <div className="text-location">Awoyaya, Lagos</div>
        </div>

        <div className="bottom-section">
          <div className="bottom-section-inner">
            <div className="price-box">
              <div className="price-left">$</div>
              <div className="price-right-text">123,456</div>
            </div>

            <div className="bottom-right">
              <div className="feature-div">
                <div className="feature-icon"></div>
                <div className="feature-amount">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;
