import React from "react";

function Nav() {
  const navitems = [{ name: "About", link: "/about", note: "?" }];

  return (
    <div id="nav">
      <img src="/vite.svg" alt="Logo" className="nav-logo" />
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
