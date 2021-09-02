import React from "react";
import "./index.css";

const PropertyFeatures = ({ property, url }) => {
  let features = property.features;
  return (
    <div
      className="feature-container"
      onClick={() => window.open(url, "_blank")}
    >
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
            {features.map((feature, index) => {
              if (index > 2) {
                return "";
              } else {
                return (
                  <div className="feature-div" key={index}>
                    <div className="feature-icon">
                      <img src={feature.icon} alt="feature" />
                    </div>
                    <div className="feature-amount">{feature.amount}</div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;
