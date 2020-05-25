import React from "react";
import "./App.css";
import { MapContainer } from "./components/MapContainer";
import { SearchContainer } from "./components/SearchContainer";

function App() {
  return (
    <div className="App">
      <SearchContainer />
      <MapContainer />
    </div>
  );
}

export default App;
