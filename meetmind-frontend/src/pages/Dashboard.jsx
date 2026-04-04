import "../styles/dashboard.css";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <div className="dashboard">

      <Navbar />

      <div className="container">

        {/* Greeting */}
        <div className="greeting">
          <h1>Good Evening, Naveen 👋</h1>
          <p>Here is your meeting activity today</p>
        </div>

        <div className="hero">

          <div className="hero-left">
            <h1>
              Turn Meetings Into <span>Actionable Insights</span>
            </h1>

            <p>
              Let MeetMind automatically summarize your meetings,
              generate tasks, and boost productivity using AI.
            </p>

            <button className="hero-btn">
              Start New Meeting
            </button>
          </div>

          <div className="hero-right">

            <img
              src="/src/assets/hero-ai.svg"
              alt="AI Illustration"
              className="hero-image"
            />


            <div className="hero-card">
              <h4>AI Summary</h4>
              <p>• Launch scheduled next week</p>
              <p>• Design improvements required</p>
              <p>• Marketing strategy finalized</p>
            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="stats">
          <StatCard title="Total Meetings" value="12" type="meetings" />
          <StatCard title="Tasks Completed" value="25 / 33" type="completed" />
          <StatCard title="Upcoming Tasks" value="3" type="upcoming" />
        </div>

        {/* Main Section */}
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

        <button className="upload-btn">
          + Upload Meeting
        </button>

      </div>

    </div>
  );
}

export default Dashboard;