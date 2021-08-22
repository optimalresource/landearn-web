import React from 'react';
import './index.css'

function SearchInput() {
  return (
    <div className="searchinput">
      <Search />
      <img
        className="ctasearch"
        src="https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/cta-search@2x.png"
        alt="ctasearch"
      />
    </div>
  );
}

function Search() {
  return (
    <div className="search">
      <img
        className="iconslocationon"
        src="https://anima-uploads.s3.amazonaws.com/projects/611bfeda331562400fadc1b1/releases/611c37a298305a35d443c704/img/icons-location-on@2x.png"
        alt="icon-search"
      />
      <input
        className="search-for-location axiforma-medium-cod-gray-18px"
        name="searchforlocation"
        placeholder="Search for location"
        type="text"
      />
    </div>
  );
}

export default SearchInput;