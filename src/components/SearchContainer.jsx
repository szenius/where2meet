import React, { useContext, useState } from "react";
import { Context } from "../context/ContextProvider";
import { AutoComplete } from "antd";
import "antd/dist/antd.css";

export const SearchContainer = () => {
  const { state, dispatch } = useContext(Context);
  const { autocomplete, geocoder, maps } = state.map.services;
  const { lat, lng } = state.map.center;
  const searchCenter = maps && new maps.LatLng(lat, lng);

  return (
    maps && (
      <div className="search-form">
        <h2>where2meet</h2>
        <SearchBox
          autocomplete={autocomplete}
          geocoder={geocoder}
          searchCenter={searchCenter}
        />
        <SearchBox
          autocomplete={autocomplete}
          geocoder={geocoder}
          searchCenter={searchCenter}
        />
      </div>
    )
  );
};

export const SearchBox = ({ autocomplete, geocoder, searchCenter }) => {
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
      console.log(location);
      // TODO: dispatch add source coordinate
      // this.props.addMarker(location.lat(), location.lng(), this.props.markerName);
    });
  };

  return (
    <div class=" search-box">
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
