import "./login.scss";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome Faddy</h1>
          <p>
            Elevate your lifestyle on this dynamic social network. Join us for a
            journey of shared moments.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <span className="forgot">Forgot Password?</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
