import "./register.scss";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Repeat Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
