import "./leftBar.scss";
import { Link } from "react-router-dom";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <GroupOutlinedIcon />
            <span>Friends</span>
          </div>
          <Link
            to={"/chats"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <ChatOutlinedIcon />
              <span>Chats</span>
            </div>
          </Link>

          <div className="item">
            <GroupsOutlinedIcon />
            <span>Groups</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>Watch</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <CalendarMonthOutlinedIcon />
            <span>Events</span>
          </div>
          <div className="item">
            <SportsEsportsOutlinedIcon />
            <span>Gaming</span>
          </div>
          <div className="item">
            <EmailOutlinedIcon />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <SportsSoccerOutlinedIcon />
            <span>Footbals</span>
          </div>
        </div>
      </div>
    </div>
  );
};
