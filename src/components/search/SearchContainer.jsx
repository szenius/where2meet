import React, { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import { setSource } from "../../context/actions";
import { SearchBox } from "./SearchBox";

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
