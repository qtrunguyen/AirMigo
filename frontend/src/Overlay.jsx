import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

export default function Overlay() {
    return (
        <>
            <div className="overlay">
                <div className="loading-container">
                    <div className="loading-spin">
                        <BiLoaderCircle />
                    </div>
                    Loading
                </div>
            </div>
        </>
    );
}
