import React, { useState, useEffect } from "react";
import "./index.css";
import PropertyListing from "../3-aside-property-list";
import PropertyTabs from "../property-tabs-list";
import { featured_properties } from "../../data/featured-properties";
import { home_properties } from "../../data/home-properties";
import { office_properties } from "../../data/office-properties";
import { land_properties } from "../../data/land-properties";
import { estate_properties } from "../../data/estate-properties";
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "../../responsive";
// import PButton from "../buttons/roundedge/primary";

const PropertyList = () => {
    const [listSwitch, SetListSwitch] = useState("featured");
    const [outputArray, SetOutputArray] = useState([]);
    const isMobile = useMediaQuery({ query: mediaQueries.mobileQuery });
    const isMinTablet = useMediaQuery({ query: mediaQueries.tabletMinQuery });
    const isTablet = useMediaQuery({ query: mediaQueries.tabletQuery });
    const isDesktop = useMediaQuery({ query: mediaQueries.desktopMinQuery });
    let chunk = 3;
    if (isMinTablet && isTablet) {
      chunk = 2;
    } else if (isDesktop) {
      chunk = 3;
    }
    
  function toggleSwitcher(value) {
    if(listSwitch === value) {
        return "";
    }

    SetListSwitch(value);
    if (value === "estate"){
        SetOutputArray(chunkArr(estate_properties, chunk));
    }else if(value === "home") {
        SetOutputArray(chunkArr(home_properties, chunk));
    }else if(value === "office") {
        SetOutputArray(chunkArr(office_properties, chunk));
    }else if(value === "land") {
        SetOutputArray(chunkArr(land_properties, chunk));
    }else {
        SetOutputArray(chunkArr(featured_properties, chunk));
    }
  }

  
  const chunkArr = (array, chunk) => {
    var i, j, temporary;
    temporary = [];
    for (i = 0, j = array.length; i < j; i += chunk) {
      temporary.push(array.slice(i, i + chunk));
    }
    return temporary;
  };

  useEffect(() => {
    SetOutputArray(chunkArr(featured_properties, chunk));
  }, [SetOutputArray, chunk]);

  let output = "";
  if (isMobile) {
    output = outputArray.map((arr, index) => {
        if (index > 0) {
          return "";
        } else {
          return (
            <PropertyListing
              properties={arr}
              key={index}
              showButton={index === 0 ? true : false}
            />
          );
        }
      });
  } else {
    output = outputArray.map((arr, index) => {
      if (index > 1) {
        return "";
      } else {
        return (
          <PropertyListing
            properties={arr}
            length={arr.length}
            chunk={chunk}
            key={index}
            showButton={
              index === 1 ? true : false
            }
          />
        );
      }
    });
  }
  return (
    <div className="listing-wrapper">
      <div className="group-7">
        <div className="text-17 axiforma-bold-cod-gray-28px">
          Explore verified properties with Landearn
        </div>
        <PropertyTabs toggleSwitcher={toggleSwitcher} />
        {output}
      </div>
    </div>
  );
};

export default PropertyList;
