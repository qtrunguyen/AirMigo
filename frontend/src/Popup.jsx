import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Popup() {
    const [open, setOpen] = useState(true);
    const [popup, setPopup] = useState({
        header: "",
        content: "",
    });

    const handleClick = (e) => {
        addPopup(Math.random().toString(), Math.random().toString());
    };

    const addPopup = (header, content) => {
        setPopup({ header, content });
        // setOpen((prev) => !prev);
    };

    const closePopup = (e) => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            {open ? (
                <div className="popup-container" onClick={handleClick}>
                    <div className="popup-header">
                        <div className="popup-title">
                            {popup.header}
                        </div>
                        <button className="popup-icon" onClick={closePopup}>
                            <FaTimes />
                        </button>
                    </div>
                    <div className="popup-content">
                        {popup.content}
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
