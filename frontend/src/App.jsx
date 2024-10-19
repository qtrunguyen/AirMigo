import { useState } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import "./App.css";

function App() {
  return (
    <>
      <div id="map-container">
        <APIProvider
          apiKey="AIzaSyBEpDEVoa1PD3uMvZQExMy63JnO8K47Oq4"
          onLoad={() => console.log("Maps API has loaded")}
        >
          <Map
            defaultZoom={13}
            defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
            onCameraChanged={(ev) =>
              console.log(
                "camera changed:",
                ev.detail.center,
                "zoom:",
                ev.detail.zoom
              )
            }
          ></Map>
        </APIProvider>
      </div>
    </>
  );
}

export default App;
