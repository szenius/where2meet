import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import { Context } from "../context/ContextProvider";
import { setMap } from "../context/actions";
import  '../App.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const MapContainer = () => {
  const { state, dispatch } = useContext(Context);

  const onMapsLoadHandler = (map, maps) => {
    dispatch(
      setMap({
        map,
        services: {
          maps,
          autocomplete: new maps.places.AutocompleteService(),
          places: new maps.places.PlacesService(map),
          geocoder: new maps.Geocoder(),
          direction: new maps.DirectionsService(),
        }
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
        defaultCenter={state.map.center}
        defaultZoom={state.map.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => onMapsLoadHandler(map, maps)}
      >
        <AnyReactComponent lat={1.39849} lng={103.907921} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
