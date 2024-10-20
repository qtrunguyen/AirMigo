import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Popup({ response }) {
    const [open, setOpen] = useState(true);

    const closePopup = (e) => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            {open ? (
                <div className="popup-container">
                    <div className="popup-header">
                        <div className="popup-title">
                            AI Assistant
                        </div>
                        <button className="popup-icon" onClick={closePopup}>
                            <FaTimes />
                        </button>
                    </div>
                    <div className="popup-content">
                        {response}
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
