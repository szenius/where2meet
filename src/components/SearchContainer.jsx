import React, { useContext, useState } from "react";
import { Context } from "../context/ContextProvider";
import { AutoComplete } from "antd";
import "antd/dist/antd.css";
import { setSource } from "../context/actions";

export const SearchContainer = () => {
  const { state, dispatch } = useContext(Context);
  const { autocomplete, geocoder, maps, center } = state;
  const { lat, lng } = center;
  const searchCenter = maps && new maps.LatLng(lat, lng);

  const addNewSource = (index, lat, lng, label) =>
    dispatch(setSource(index, lat, lng, label));

  return (
    <div className="search-form">
      <h2>where2meet</h2>
      {maps ? (
        <>
          <SearchBox
            autocomplete={autocomplete}
            geocoder={geocoder}
            searchCenter={searchCenter}
            sourceIndex={0}
            addNewSource={addNewSource}
          />
          <SearchBox
            autocomplete={autocomplete}
            geocoder={geocoder}
            searchCenter={searchCenter}
            sourceIndex={1}
            addNewSource={addNewSource}
          />
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export const SearchBox = ({
  autocomplete,
  geocoder,
  searchCenter,
  sourceIndex,
  addNewSource,
  label,
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
