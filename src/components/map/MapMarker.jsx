import React from "react";

export const MapMarker = ({ index, label }) => (
  <div key={index} className="map-marker">
    <div className="map-marker__marker" />
    <h3>{label}</h3>
  </div>
);
