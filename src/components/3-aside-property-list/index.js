import React, { useState } from "react";
import "./index.css";
import PropertyFeatures from "./property-features";
import PButton from "../buttons/roundedge/primary";
import Favorite from "../../assets/images/mobile/love.svg";
import FavoriteWhite from "../../assets/images/mobile/love_white.svg";

const PropertyListing = ({ properties, length, chunk, showButton }) => {
  let result = "";
  if (length === 1 && chunk === 2) {
    result = <div className="no-item" />;
  } else if (length === 1 && chunk === 3) {
    result = <div className="no-item-1" />;
  } else if (length === 2 && chunk === 3) {
    result = <div className="no-item" />;
  }

  const [favorites, setFavorites] = useState([]);
  const [showBlur, setShowBlur] = useState(false);

  const showOverlay = (id) => {
    setShowBlur(id)
  }

  const hideOverlay = () => {
    setShowBlur(false);
  }

  const favoriteToggle = (id) => {
    if(!favorites.includes(id)){
      setFavorites((previous) => {
        return [...previous, id]
      });
    }else {
      const filteredItems = favorites.filter((item) => item !== id);
      setFavorites(filteredItems);
    }
  }

  return (
    <div className="rowed">
      <div className="flex-row">
        {properties.map((property, index) => {
          if (index < 3) {
            console.log(index);
            return (
              <div className="group" key={property.id}>
                <div className="properti-preview">
                  <div
                    className="first-box"
                    onMouseEnter={() => showOverlay(property.id)}
                    onMouseLeave={hideOverlay}
                  >
                    <img
                      className="image"
                      alt="Property list"
                      src={property.src}
                    />
                    <div className="property-top-panel">
                      <div className="property-caption">
                        <div className="property-caption-text">
                          Semi-Detached House
                        </div>
                      </div>

                      <img
                        src={
                          favorites.includes(property.id)
                            ? FavoriteWhite
                            : Favorite
                        }
                        className="property-favorite-icon"
                        alt="favorite"
                        onClick={() => favoriteToggle(property.id)}
                      />
                    </div>

                    {showBlur === property.id && <OverlayBlock />}
                  </div>
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

const OverlayBlock = () => {
  return (
    <div className="hover-property">
      <div className="navigations">
        <div className="go-left">
          <div className="arrow-text">&lt;</div>
        </div>
        <div className="go-right">
          <div className="arrow-text">&gt;</div>
        </div>
      </div>
    </div>
  );
}
export default PropertyListing;
