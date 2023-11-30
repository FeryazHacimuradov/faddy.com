import "./page404.scss";
import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div className="error">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span>Faddy.com</span>
      </Link>
      <img
        src="https://github.com/FeryazHacimuradov/marvel-starter/blob/master/src/components/errorMessage/error.gif?raw=true"
        alt=""
      />
      <h1>This page can't be found!</h1>
    </div>
  );
};
