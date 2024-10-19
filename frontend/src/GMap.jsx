import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

function GMap() {
  const GMAPJS = import.meta.env.DEV
    ? import.meta.env.VITE_GMAPJS
    : "skibidi toilet rizz";

  return (
    <div id="map-container">
      <APIProvider
        apiKey={GMAPJS}
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
  );
}

export default GMap;