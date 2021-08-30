import React, { useState } from "react";
import "./index.css";

const PropertyTabs = ({ toggleSwitcher }) => {
  const [featuredActive, setFeaturedActive] = useState(true);
  const [homeActive, setHomeActive] = useState(false);
  const [officeActive, setOfficeActive] = useState(false);
  const [landActive, setLandActive] = useState(false);
  const [estateActive, setEstateActive] = useState(false);
  function click(value) {
    let featuredFlag = false;
    let homeFlag = false;
    let officeFlag = false;
    let landFlag = false;
    let estateFlag = false;
    if (value === "home") {
      homeFlag = true;
    } else if (value === "office") {
      officeFlag = true;
    } else if (value === "land") {
      landFlag = true;
    } else if (value === "estate") {
      estateFlag = true;
    } else {
      featuredFlag = true;
    }
    setFeaturedActive(featuredFlag);
    setHomeActive(homeFlag);
    setOfficeActive(officeFlag);
    setLandActive(landFlag);
    setEstateActive(estateFlag);
    toggleSwitcher(value);
  }
  return (
    <div className="filters">
      <div
        className={`x3101840 ${featuredActive ? "active" : "inactive"}`}
        onClick={() => click("featured")}
      >
        <div className="button-i310184022-n9Y61h">Featured properties</div>
      </div>
      <div
        className={`x3101840 add-margin ${homeActive ? "active" : "inactive"}`}
        onClick={() => click("home")}
      >
        <div className="button-i310184122-3HlC6m">Homes</div>
      </div>
      <div
        className={`x3101840 add-margin ${
          officeActive ? "active" : "inactive"
        }`}
        onClick={() => click("office")}
      >
        <div className="button-i310184222-Bk1xUE">Offices</div>
      </div>
      <div
        className={`x3101840 add-margin ${landActive ? "active" : "inactive"}`}
        onClick={() => click("land")}
      >
        <div className="button-i310184322-IYByLI">Lands</div>
      </div>
      <div
        className={`x3101840 add-margin ${
          estateActive ? "active" : "inactive"
        }`}
        onClick={() => click("estate")}
      >
        <div className="button-i310184422-2bZIxl">Estate properties</div>
      </div>
    </div>
  );
};

export default PropertyTabs;
