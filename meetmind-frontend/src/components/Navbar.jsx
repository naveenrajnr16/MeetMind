import {
  useNavigate,
  useLocation
} from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    {
      name: "Home",
      path: "/dashboard"
    },
    {
      name: "Upload",
      path: "/upload"
    },
    {
      name: "Tasks",
      path: "/tasks"
    }
  ];

  return (

    <div className="navbar-wrapper">

      {/* LOGO */}

      <div
        className="nav-logo"
        onClick={() => navigate("/dashboard")}
      >
        MeetMind
      </div>

      {/* CENTER NAV */}

      <div className="nav-pill">

        {menu.map((item) => (

          <span
            key={item.name}

            className={
              location.pathname === item.path
              ? "active"
              : ""
            }

            onClick={() => navigate(item.path)}
          >

            {item.name}

          </span>

        ))}

      </div>

      {/* RIGHT SIDE */}

      <div className="nav-actions">

        <button className="login-btn">
          Log in
        </button>

        <button
          className="demo-btn"
          onClick={() => navigate("/upload")}
        >
          Upload
        </button>

      </div>

    </div>

  );
}

export default Navbar;