import React, { useState, useEffect, useReducer } from "react";
import "./index.css";
import PropertyFeatures from "./property-features";
import PButton from "../buttons/roundedge/primary";
import Favorite from "../../assets/images/mobile/love.svg";
import FavoriteWhite from "../../assets/images/mobile/love_white.svg";

const reducer = (state, action) => {
  if(action.type === "CHANGE_ACTIVE_IMAGE"){
    return {
      ...state,
      activeImages: action.payload.active_images
    }
  }else {

  }
}

const defaultState = {
  activeImages: []
}

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
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    let cont;
    let arr = [];
    let key = "";
    for (let i = 0; i < properties.length; i++) {
      key = "a" + [properties[i].id];
      cont = { [key]: 0 };
      arr.push(cont);
    }
    dispatch({ type: "CHANGE_ACTIVE_IMAGE", payload: { active_images: arr }})
  }, [properties]);

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

  const goLeft = (index, id, max) => {
    let output = state.activeImages;
    if (output[index]["a" + id] > 0) {
      output[index]["a" + id] -= 1;
    }else {
      output[index]["a" + id] = max -1;
    }
    dispatch({ type: "CHANGE_ACTIVE_IMAGE", payload: { active_images: output } });
  }

  const goRight = (index, id, max) => {
      let output = state.activeImages;
      // console.log(output[index]["a" + id]);
      if (output[index]["a" + id] < max - 1) {
        output[index]["a" + id] += 1;
      }else {
        output[index]["a" + id] = 0;
      }
      dispatch({
        type: "CHANGE_ACTIVE_IMAGE",
        payload: { active_images: output },
      });
  };

    return (
      <div className="rowed">
        <div className="flex-row">
          {properties.map((property, index) => {
            if (index < 3) {
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
                        src={
                          state.activeImages[index]
                            ? property.images[
                                state.activeImages[index]["a" + property.id]
                              ]
                            : property.images[0]
                        }
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

                      {showBlur === property.id && (
                        <OverlayBlock
                          goLeft={() => goLeft(index, property.id, property.images.length)}
                          goRight={() => goRight(index, property.id, property.images.length)}
                        />
                      )}
                    </div>
                    <PropertyFeatures property={property} url="https://landearn.com" />
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

const OverlayBlock = ({ goLeft, goRight }) => {
  return (
    <div className="hover-property">
      <div className="navigations">
        <div className="go-left" onClick={() => goLeft()}>
          <div className="arrow-text">&lt;</div>
        </div>
        <div className="go-right" onClick={() => goRight()}>
          <div className="arrow-text">&gt;</div>
        </div>
      </div>
    </div>
  );
};
export default PropertyListing;
