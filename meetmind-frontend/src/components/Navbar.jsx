function Navbar() {
  return (
    <div className="navbar">

      <div className="nav-left">
        <h2>MeetMind</h2>
      </div>

      <div className="nav-center">
        <span>Home</span>
        <span>Meetings</span>
        <span>Tasks</span>
      </div>

      <div className="nav-right">
        <input placeholder="Search..." />
        <span>🔔</span>
        <div className="profile"></div>
      </div>

    </div>
  );
}

export default Navbar;