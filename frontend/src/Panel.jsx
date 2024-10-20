import React, { useRef, useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { FaAngleDown, FaLocationDot } from "react-icons/fa6";

export default function Panel({
    fetchData,
    conditions,
    setConditions,
    updateLocation
}) {
    const map = useMap();
    const handleLocationUpdate = (e) => {
        updateLocation(map)
    }

    const togglePanel = (event) => {
        let parent = event.currentTarget.parentElement;
        parent.classList.toggle("closed");
    };

    const handleConditionInput = (event) => {
        setConditions(event.target.value);
    };

    const handleGetInsights = (event) => {
        fetchData();
    };

    return (
        <div className="panel closed">
            <button className="panel-header" onClick={togglePanel}>
                <FaAngleDown />
            </button>
            <div className="panel-content">
                <button className="update-location" onClick={handleLocationUpdate}>
                    <FaLocationDot />
                    <div>Current location</div>
                </button>

                <textarea
                    name="condition-input"
                    id="condition-input"
                    placeholder="I am female, 29, with asthma..."
                    onChange={handleConditionInput}
                    value={conditions}
                ></textarea>

                <button className="call-api-button" onClick={handleGetInsights}>
                    Get insights
                </button>
            </div>
        </div>
    );
}
