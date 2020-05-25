import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import { Context } from "../context/ContextProvider";
import { setMap, setMapServices } from "../context/actions";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const MapView = () => {
  const { state, dispatch } = useContext(Context);

  const handleApiLoaded = (map, maps) => {
    console.log(maps);
    dispatch(setMap(map));
    dispatch(
      setMapServices({
        maps: maps,
        autocomplete: new maps.places.AutocompleteService(),
        places: new maps.places.PlacesService(map),
        geocoder: new maps.Geocoder(),
        direction: new maps.DirectionsService(),
      })
    );
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_API_KEY,
          libraries: ["places", "directions"],
        }}
        defaultCenter={state.map.center}
        defaultZoom={state.map.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent lat={1.39849} lng={103.907921} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
