import "../styles/login.css";
import loginImage from "../assets/login-image.jpg";

function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        {/* LEFT IMAGE SECTION */}
        <div className="login-left">

          <img src={loginImage} alt="background" />

          <div className="top-buttons">
            <button className="signup-btn">Sign Up</button>
            <button className="join-btn">Join Us</button>
          </div>

          <div className="user-tip">
            <div className="avatar"></div>

            <div>
              <h4>User Name</h4>
              <p>
                Turn meetings into summaries and tasks instantly with AI.
              </p>
            </div>
          </div>

          <div className="carousel-buttons">
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>

        </div>


        {/* RIGHT LOGIN SECTION */}

        <div className="login-right">

          <div className="logo">
            <h2>MEETMIND</h2>
            <p>AI Meeting Intelligence Platform</p>
          </div>

          <h1>Hi Organizer</h1>
          <p className="welcome">Welcome to MEETMIND</p>

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <span className="forgot">Forgot Password ?</span>

          <div className="divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          <button className="google-btn">
            Continue with Google
          </button>

          <button className="login-btn">
            Login
          </button>

          <p className="signup-text">
            Don't have an account? <span>Sign up</span>
          </p>

          <div className="social-icons">
            <span>in</span>
            <span>GH</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;