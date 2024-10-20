import React, { useRef, useEffect } from "react";
import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import PoiMarkers from "./PoiMarkers";
import Panel from "./Panel";

// default
let LAT = -33.860664;
let LNG = 151.208138;
let ZOOM = 13;

const pois = []

function GMap() {
  const GMAPJS = import.meta.env.VITE_GMAPJS;
  const GMAPID = import.meta.env.VITE_GMAPID;

  const onLoad = (ev) => {
    console.log("Maps API has loaded");
  };

  const onCameraChanged = (ev) => {
    console.log("camera changed:", ev.detail.center);
    console.log("zoom:", ev.detail.zoom);
  };

  return (
    <div id="map-container">
      <APIProvider apiKey={GMAPJS} onLoad={onLoad}>
        <Map
          mapId={GMAPID}
          defaultZoom={ZOOM}
          defaultCenter={{ lat: LAT, lng: LNG }}
          onCameraChanged={onCameraChanged}
        >
          <PoiMarkers pois={pois} />
        </Map>
        <Panel></Panel>
      </APIProvider>
    </div>
  );
}

export default GMap;
