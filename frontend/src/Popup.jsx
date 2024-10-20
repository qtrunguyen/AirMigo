import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function Popup({ response }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(prev => !prev);
    }, [response]);

    const closePopup = (e) => {
        setOpen(false);
    };

    return (
        <>
            <div className={`popup-container ${open ? "open" : ""} `}>
                <div className="popup-header">
                    <div className="popup-title">AI Assistant</div>
                    <button className="popup-icon" onClick={closePopup}>
                        <FaTimes />
                    </button>
                </div>
                <div className="popup-content">{response}</div>
            </div>
        </>
    );
}
