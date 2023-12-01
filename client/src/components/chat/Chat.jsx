import "./chat.scss";
import { Link } from "react-router-dom";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Messages from "../messages/Messages";

const Chat = () => {
  return (
    <div className="chat">
      <div className="container">
        <div className="userProfile">
          <div className="left">
            <Link to="/chats">
              <ChevronLeftOutlinedIcon />
            </Link>
            <img
              src="https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>Togrul Agali</span>
          </div>
          <div className="right">
            <VideocamOutlinedIcon />
            <MoreHorizOutlinedIcon />
          </div>
        </div>
        <div className="allMesages">
          <Messages />
        </div>
        <div className="writeMessage">
          <input type="text" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
