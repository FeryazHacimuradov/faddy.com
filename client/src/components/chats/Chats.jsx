import "./chats.scss";
import { Link } from "react-router-dom";

const Chats = () => {
  return (
    <div className="chats">
      <div className="container">
        <div className="item">
          <hr />
          <div className="userProfile">
            <div className="left">
              <img
                src="https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>Togrul Agali</span>
            </div>
            <div className="right">
              <button>Message</button>
            </div>
          </div>
        </div>
        <div className="item">
          <hr />
          <div className="userProfile">
            <div className="left">
              <img
                src="https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>Togrul Agali</span>
            </div>
            <div className="right">
              <button>Message</button>
            </div>
          </div>
        </div>
        <div className="item">
          <hr />
          <div className="userProfile">
            <div className="left">
              <img
                src="https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>Togrul Agali</span>
            </div>
            <div className="right">
              <Link>
                <button>Message</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
