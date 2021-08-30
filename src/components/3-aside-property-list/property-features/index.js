import React from "react";
import "./index.css";

const PropertyFeatures = ({ property }) => {
  return (
    <div className="feature-container">
        <div className="text-container">
          <div className="text-title">{property.title}</div>
          <div className="text-location">{property.location}</div>
        </div>

        <div className="bottom-section">
          <div className="bottom-section-inner">
            <div className="price-box">
              <div className="price-left">{property.currencySymbol}</div>
              <div className="price-right-text">{property.price}</div>
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
  );
};

export default PropertyFeatures;
