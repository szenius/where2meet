import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import { Context } from "../context/ContextProvider";
import { setMap } from "../context/actions";
import "../App.css";
import { MapMarker } from "./MapMarker";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const MapContainer = () => {
  const { state, dispatch } = useContext(Context);
  const { sources } = state;
  console.log("mapcontainer::", sources);

  const onMapsLoadHandler = (map, maps) => {
    dispatch(
      setMap({
        map,
        maps,
        autocomplete: new maps.places.AutocompleteService(),
        places: new maps.places.PlacesService(map),
        geocoder: new maps.Geocoder(),
        direction: new maps.DirectionsService(),
      })
    );
  };

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_API_KEY,
          libraries: ["places", "directions"],
        }}
        defaultCenter={state.center}
        defaultZoom={state.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => onMapsLoadHandler(map, maps)}
      >
        {Object.values(sources).map(({ index, lat, lng, label }) => (
          <MapMarker lat={lat} lng={lng} label={label} key={index} />
        ))}
      </GoogleMapReact>
    </div>
  );
};
