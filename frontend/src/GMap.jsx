import React, { useState } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import PoiMarkers from "./PoiMarkers";
import Panel from "./Panel";
import Popup from "./Popup";
import axios from "axios";

const lat_default = -33.860664;
const lng_default = 151.1987113;
const ZOOM = 15;
const pois = [
    {
        key: "hi",
        location: { lat: lat_default, lng: lng_default },
    },
];

function GMap() {
    const [latitude, setLatitude] = useState(lat_default);
    const [longitude, setLongitude] = useState(lng_default);
    const [conditions, setConditions] = useState("");
    const [response, setResponse] = useState("");

    const GMAPJS = import.meta.env.VITE_GMAPJS;
    const GMAPID = import.meta.env.VITE_GMAPID;

    const fetchData = async () => {
        try {
            const response = await axios.post("http://localhost:4000/groq", {
                latitude: latitude,
                longitude: longitude,
                conditions: conditions,
            });
            setResponse(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const updateLocation = (map) => {
        if (!map) return;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let { latitude, longitude } = position.coords;
                    updateLatLng(latitude, longitude, map);
                },
                (error) => {
                    console.log("Error getting geolocation:\n", error);
                }
            );
        }
    };

    const updateLatLng = (lat, lng, map) => {
        setLatitude(lat);
        setLongitude(lng);
        map.moveCamera({ center: { lat, lng } });
    };

    return (
        <div id="map-container">
            <APIProvider apiKey={GMAPJS}>
                <Map
                    mapId={GMAPID}
                    defaultZoom={ZOOM}
                    defaultCenter={{ lat: latitude, lng: longitude }}
                >
                    <PoiMarkers pois={pois} updateLatLng={updateLatLng}/>
                </Map>
                <Panel
                    condition={conditions}
                    updateLocation={updateLocation}
                    setConditions={setConditions}
                    fetchData={fetchData}
                ></Panel>
                <Popup response={response}></Popup>
            </APIProvider>
        </div>
    );
}

export default GMap;
