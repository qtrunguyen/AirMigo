import React, { useRef, useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { FaAngleDown, FaLocationDot } from "react-icons/fa6";

export default function Panel() {
    const map = useMap();

    const updateLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    map.moveCamera({
                        center: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        },
                    });
                },
                (error) => {
                    console.log("Error getting geolocation:\n", error);
                }
            );
        }
    }

    updateLocation()

    const togglePanel = (event) => {
        let parent = event.currentTarget.parentElement 
        parent.classList.toggle('closed')
    }

    return (
    <div className="panel closed">
        <button className="panel-header" onClick={togglePanel}>
            <FaAngleDown />
        </button>
        <div className="panel-content">
            <button className="update-location" onClick={updateLocation}>
                <FaLocationDot />
                <div>Update Location</div>
            </button>
        </div>
    </div>
    );
}
