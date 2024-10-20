import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import PoiMarkers from "./PoiMarkers";
import Panel from "./Panel";
import Popup from "./Popup";

// default
let LAT = -33.860664;
let LNG = 151.208138;
let ZOOM = 15;

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
        <Popup></Popup>
      </APIProvider>
    </div>
  );
}

export default GMap;
