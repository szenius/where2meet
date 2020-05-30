import React from "react";
import "./App.css";
import { MapContainer } from "./components/MapContainer";
import { SearchContainer } from "./components/SearchContainer";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <SearchContainer />
        <MapContainer />
      </ContextProvider>
    </div>
  );
}

export default App;
