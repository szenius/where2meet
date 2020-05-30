import React from "react";

export const MapMarker = ({ index, label }) => (
  <div key={index} className="map-marker">
    <h3>{label}</h3>
    <div className="map-marker__marker" />
  </div>
);
