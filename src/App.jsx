import React from "react";
import "./App.css";
import { MapContainer } from "./components/map/MapContainer";
import { SearchContainer } from "./components/search/SearchContainer";
import { MapContextProvider } from "./context/MapContextProvider";

function App() {
  return (
    <div className="App">
      <MapContextProvider>
        <SearchContainer />
        <MapContainer />
      </MapContextProvider>
    </div>
  );
}

export default App;
