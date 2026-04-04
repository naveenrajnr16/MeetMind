import { useState } from "react";

function Navbar() {

  const [active, setActive] = useState("Home");

  const menu = ["Home", "Meetings", "Tasks"];

  return (
    <div className="navbar-wrapper">

      {/* LOGO */}
      <div className="nav-logo">
        MeetMind
      </div>

      {/* CENTER PILL NAV */}
      <div className="nav-pill">
        {menu.map((item) => (
          <span
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => setActive(item)}
          >
            {item}
          </span>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-actions">
        <button className="login-btn">Log in</button>
        <button className="demo-btn">Upload</button>
      </div>

    </div>
  );
}

export default Navbar;