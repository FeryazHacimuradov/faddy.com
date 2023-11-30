import "./profile.scss";
import { Posts } from "../../components/posts/Posts";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <div className="userProfile">
          <div className="left">
            <img
              src="https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>Togrul Agali</span>
          </div>
          <div className="right">
            <button>Follow</button>
            <button>Message</button>
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};
