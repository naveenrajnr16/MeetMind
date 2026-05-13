import "../styles/uploadMeeting.css";
import { FaCloudUploadAlt, FaMicrophoneAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";

function UploadMeeting() {

  return (
    <div className="upload-page">

      <Navbar />

      {/* HERO SECTION */}

      <div className="upload-hero">

        <div className="upload-left">

          <h1>
            Upload & Analyze
            <span> Meetings With AI</span>
          </h1>

          <p>
            Upload your meeting recordings and let MeetMind
            automatically generate summaries, tasks, and insights.
          </p>

          <button>
            Start Processing
          </button>

        </div>

        <div className="upload-right">

          <div className="ai-card">
            <h3>AI Processing</h3>

            <div className="processing">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>

            <p>Generating smart summaries...</p>
          </div>

        </div>

      </div>

      {/* UPLOAD BOX */}

      <div className="upload-box">

        <FaCloudUploadAlt className="upload-icon" />

        <h2>Drag & Drop Meeting Audio</h2>

        <p>
          Upload MP3, WAV or meeting recordings
        </p>

        <input type="file" id="fileUpload" hidden />

        <label htmlFor="fileUpload" className="browse-btn">
          Browse Files
        </label>

        <input type="file" id="fileUpload" hidden />

        <label htmlFor="fileUpload" className="browse-btn">
          Browse Files
        </label>

      </div>

      {/* RECORD OPTION */}

      <div className="record-section">

        <div className="record-card">

          <FaMicrophoneAlt className="mic-icon" />

          <h3>Record Live Meeting</h3>

          <p>
            Start recording directly inside MeetMind.
          </p>

          <button>
            Start Recording
          </button>

        </div>

      </div>

      {/* RECENT UPLOADS */}

      <div className="recent-uploads">

        <h2>Recent Uploads</h2>

        <div className="upload-item">
          <h4>Project Planning Meeting.mp3</h4>
          <span>AI Summary Ready</span>
        </div>

        <div className="upload-item">
          <h4>Marketing Discussion.wav</h4>
          <span>Processing...</span>
        </div>

      </div>

    </div>
  );
}

export default UploadMeeting;