import "../styles/dashboard.css";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <div className="dashboard">

      <Navbar />

      <div className="dashboard-content">

        {/* Greeting */}
        <div className="greeting">
          <h1>Good Evening, Naveen 👋</h1>
          <p>Here is your meeting activity today</p>
        </div>

        {/* Stats */}
        <div className="stats">

          <StatCard title="Total Meetings" value="12" type="meetings" />
          <StatCard title="Tasks Completed" value="25 / 33" type="completed" />
          <StatCard title="Upcoming Tasks" value="3" type="upcoming" />

        </div>

        {/* Main Content */}
        <div className="main-section">

          <div className="recent-meetings">
            <h2>Recent Meetings</h2>

            <div className="meeting">
              <h4>Project Planning</h4>
              <p>March 12, 2026</p>
            </div>

            <div className="meeting">
              <h4>Marketing Discussion</h4>
              <p>March 10, 2026</p>
            </div>

          </div>

          <div className="summary">
            <h2>Quick Summary</h2>

            <ul>
              <li>Website launch next week</li>
              <li>Design updates pending</li>
              <li>Marketing campaign planned</li>
            </ul>

          </div>

        </div>

        {/* Upload Button */}
        <button className="upload-btn">
          + Upload Meeting
        </button>

      </div>

    </div>
  );
}

export default Dashboard;