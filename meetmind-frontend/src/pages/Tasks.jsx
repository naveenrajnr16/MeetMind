import "../styles/tasks.css";
import Navbar from "../components/Navbar";

import {
  FaClock,
  FaCheckCircle,
  FaSpinner
} from "react-icons/fa";

function Tasks() {

  return (
    <div className="tasks-page">

      <Navbar />

      <div className="tasks-container">

        {/* HERO */}

        <div className="tasks-hero">

          <h1>
            AI Generated
            <span> Task Board</span>
          </h1>

          <p>
            Organize meeting action items and track productivity
            with smart AI-generated tasks.
          </p>

        </div>

        {/* TASK BOARD */}

        <div className="board">

          {/* TODO COLUMN */}

          <div className="column">

            <div className="column-header todo">
              <FaClock />
              <h3>To Do</h3>
            </div>

            <div className="task-card">

              <span className="priority high">
                High
              </span>

              <h4>Finalize Landing Page Design</h4>

              <p>
                Complete the premium UI redesign for the homepage.
              </p>

              <div className="task-footer">
                <span>Due Tomorrow</span>
              </div>

            </div>

            <div className="task-card">

              <span className="priority medium">
                Medium
              </span>

              <h4>Prepare Client Presentation</h4>

              <p>
                Create meeting insights presentation slides.
              </p>

              <div className="task-footer">
                <span>Friday</span>
              </div>

            </div>

          </div>

          {/* IN PROGRESS */}

          <div className="column">

            <div className="column-header progress">
              <FaSpinner />
              <h3>In Progress</h3>
            </div>

            <div className="task-card">

              <span className="priority medium">
                Medium
              </span>

              <h4>Build Upload API</h4>

              <p>
                Develop backend endpoint for audio uploads.
              </p>

              <div className="task-footer">
                <span>2 Days Left</span>
              </div>

            </div>

          </div>

          {/* COMPLETED */}

          <div className="column">

            <div className="column-header complete">
              <FaCheckCircle />
              <h3>Completed</h3>
            </div>

            <div className="task-card">

              <span className="priority low">
                Low
              </span>

              <h4>Create Dashboard UI</h4>

              <p>
                Finished modern dashboard interface design.
              </p>

              <div className="task-footer">
                <span>Completed</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Tasks;