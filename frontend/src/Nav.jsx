import React from "react";

function Nav() {
    const navitems = [{ name: "About", link: "https://devpost.com/software/tbd-nd1ov6?ref_content=my-projects-tab&ref_feature=my_projects", note: "about us" }];

    return (
        <div id="nav">
            <a href="/">
                <img src="AirMigoLogo.png" alt="Logo" className="nav-logo" />
            </a>
            <div className="navigation-link">
                {navitems.map((item, index) => (
                    <div key={index}>
                        <a href={item.link} target="_blank">{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Nav;
