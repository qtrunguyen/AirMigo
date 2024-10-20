import React from "react";

function Nav() {
    const navitems = [{ name: "About", link: "/about", note: "about us" }];

    return (
        <div id="nav">
            <a href="/">
                <img src="AirMigoLogo.png" alt="Logo" className="nav-logo" />
            </a>
            <div className="navigation-link">
                {navitems.map((item, index) => (
                    <div key={index}>
                        <a href={item.link}>{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Nav;
