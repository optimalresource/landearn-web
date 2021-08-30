import React from "react";
import "./index.css";
import PropertyFeatures from "./property-features";
import PButton from "../buttons/roundedge/primary";

const PropertyListing = ({ properties, length, chunk, showButton }) => {
    console.log(showButton);
  let result = "";
  if (length === 1 && chunk === 2) {
    result = <div className="no-item" />;
  } else if (length === 1 && chunk === 3) {
    result = <div className="no-item-1" />;
  } else if (length === 2 && chunk === 3) {
    result = <div className="no-item" />;
  }
  return (
    <div className="rowed">
      <div className="flex-row">
        {properties.map((property, index) => {
          if (index < 3) {
            return (
              <div className="group" key={index}>
                <div className="properti-preview">
                  <img
                    className="image"
                    alt="Property list"
                    src={property.src}
                  />
                  <PropertyFeatures property={property} />
                </div>
              </div>
            );
          } else return "";
        })}

        {result}
      </div>
      {showButton && (
        <PButton
            className="x31650"
            title="See all 6 verified properties"
            url="https://landearn.com"
        />
      )}
    </div>
  );
};

export default PropertyListing;
