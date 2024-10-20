import React, { useRef, useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import { FaAngleDown, FaLocationDot, FaPaperPlane, FaRobot } from "react-icons/fa6";

export default function Panel({
    fetchData,
    conditions,
    setConditions,
    updateLocation,
    updateResponse
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

    const handleToggleAssistant = (event) => {
        console.log('handleToggleAssistant')
        updateResponse()
    }

    return (
        <div className="panel closed">
            <button className="panel-header" onClick={togglePanel}>
                <FaAngleDown />
            </button>
            <div className="panel-content">
                <label htmlFor="condition-input">
                    <div className="big">Personalize</div>
                    <div className="small">Receive more detailed feedbacks by giving our assistant more details on you and your medical conditions</div>
                </label>
                <textarea
                    name="condition-input"
                    id="condition-input"
                    placeholder="I am female, 29, with asthma..."
                    onChange={handleConditionInput}
                    value={conditions}
                ></textarea>
                <button className="call-api-button" onClick={handleGetInsights}>
                    <FaPaperPlane />
                    Get insights
                </button>

                <label htmlFor="locate-me">
                    <div className="big">Locate me</div>
                    <div className="small">Assess the air around you when you allow location permission for this site</div>
                </label>
                <button id="locate-me" className="update-location" onClick={handleLocationUpdate}>
                    <FaLocationDot />
                    <div>Locate me!</div>
                </button>

                <label htmlFor="toggle-assistant">
                    <div className="big">Toggle AI Assistant</div>
                    <div className="small">Open the AI Assistant insights window</div>
                </label>
                <button id="toggle-assistant" className="update-location" onClick={handleToggleAssistant}>
                    <FaRobot />
                    <div>Toggle AI Assistant</div>
                </button>
            </div>
        </div>
    );
}
