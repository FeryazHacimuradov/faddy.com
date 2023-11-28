import "./leftBar.scss";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";

export const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/998850/pexels-photo-998850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>Faryaz Hajimuradov</span>
          </div>
          <div className="item">
            <GroupOutlinedIcon />
            <span>Friends</span>
          </div>
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
