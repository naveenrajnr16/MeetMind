import "../styles/tasks.css";
import Navbar from "../components/Navbar";

import { useState } from "react";

import {
  FaClock,
  FaCheckCircle,
  FaSpinner
} from "react-icons/fa";

function Tasks() {

  const [selectedTask, setSelectedTask] = useState(null);

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

            {/* TASK 1 */}

            <div
              className="task-card"
              onClick={() =>
                setSelectedTask({
                  title: "Finalize Landing Page Design",
                  priority: "High",
                  description:
                    "Complete the premium UI redesign for the homepage.",
                  deadline: "Tomorrow",
                  assigned: "Naveen",
                  status: "To Do"
                })
              }
            >

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

            {/* TASK 2 */}

            <div
              className="task-card"
              onClick={() =>
                setSelectedTask({
                  title: "Prepare Client Presentation",
                  priority: "Medium",
                  description:
                    "Create meeting insights presentation slides.",
                  deadline: "Friday",
                  assigned: "Naveen",
                  status: "To Do"
                })
              }
            >

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

            <div
              className="task-card"
              onClick={() =>
                setSelectedTask({
                  title: "Build Upload API",
                  priority: "Medium",
                  description:
                    "Develop backend endpoint for audio uploads.",
                  deadline: "2 Days Left",
                  assigned: "Naveen",
                  status: "In Progress"
                })
              }
            >

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

            <div
              className="task-card"
              onClick={() =>
                setSelectedTask({
                  title: "Create Dashboard UI",
                  priority: "Low",
                  description:
                    "Finished modern dashboard interface design.",
                  deadline: "Completed",
                  assigned: "Naveen",
                  status: "Completed"
                })
              }
            >

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

      {/* MODAL */}

      {
        selectedTask && (

          <div
            className="modal-overlay"
            onClick={() => setSelectedTask(null)}
          >

            <div
              className="task-modal"
              onClick={(e) => e.stopPropagation()}
            >

              <h2>
                {selectedTask.title}
              </h2>

              <span className="modal-priority">
                {selectedTask.priority}
              </span>

              <p className="modal-description">
                {selectedTask.description}
              </p>

              <div className="modal-details">

                <div>
                  <h4>Status</h4>
                  <p>{selectedTask.status}</p>
                </div>

                <div>
                  <h4>Deadline</h4>
                  <p>{selectedTask.deadline}</p>
                </div>

                <div>
                  <h4>Assigned To</h4>
                  <p>{selectedTask.assigned}</p>
                </div>

              </div>

              <button
                className="close-btn"
                onClick={() => setSelectedTask(null)}
              >
                Close
              </button>

            </div>

          </div>

        )
      }

    </div>

  );
}

export default Tasks;