import "./chats.scss";
import { Link } from "react-router-dom";

const Chats = () => {
  const chats = [
    {
      id: 1,
      name: "Togrul Agali",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Ruvinov Devid",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/4034021/pexels-photo-4034021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Ilgar Shukurlu",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/4034021/pexels-photo-4034021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Ceyhun Abilov",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/4034021/pexels-photo-4034021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="chats">
      <div className="container">
        {chats.map((chat) => (
          <div className="item">
            <hr />
            <div className="userProfile">
              <div className="left">
                <img src={chat.profilePic} alt="" />
                <span>{chat.name}</span>
              </div>
              <div className="right">
                <Link
                  to={`/chat/${chat.userId}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <button>Message</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chats;
