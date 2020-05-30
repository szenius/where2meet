import React, { useState } from "react";
import { AutoComplete } from "antd";
import "antd/dist/antd.css";

export const SearchBox = ({
  autocomplete,
  geocoder,
  searchCenter,
  sourceIndex,
  addNewSource,
}) => {
  const [searchData, setSearchData] = useState([]);

  const onSearchHandler = (value) => {
    if (value.length > 0) {
      const searchQuery = {
        input: value,
        location: searchCenter,
        radius: 30000,
      };
      autocomplete.getQueryPredictions(searchQuery, (response) => {
        if (response) {
          setSearchData(response.map((data) => data.description));
        }
      });
    }
  };

  const onSelectHandler = (value) => {
    geocoder.geocode({ address: value }, (response) => {
      const { location } = response[0].geometry;
      addNewSource(sourceIndex, location.lat(), location.lng(), value);
    });
  };

  return (
    <div className="search-box">
      <AutoComplete
        className="search-box__autocomplete"
        dataSource={searchData}
        onSearch={onSearchHandler}
        onSelect={onSelectHandler}
        placeholder="Address"
      />
    </div>
  );
};
