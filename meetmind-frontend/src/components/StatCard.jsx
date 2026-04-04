import { FaCalendarAlt, FaCheckCircle, FaClock } from "react-icons/fa";

function StatCard({ title, value, type }) {

  const getIcon = () => {
    if (type === "meetings") return <FaCalendarAlt />;
    if (type === "completed") return <FaCheckCircle />;
    if (type === "upcoming") return <FaClock />;
  };

  return (
    <div className="stat-card modern">

      <div className="card-top">
        <h4>{title}</h4>
        <span className="icon">{getIcon()}</span>
      </div>

      <h2>{value}</h2>

    </div>
  );
}

export default StatCard;