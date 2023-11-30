import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

export const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Faryaz Hajimuradov",
      img: "https://images.pexels.com/photos/4473360/pexels-photo-4473360.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      name: "Togrul Agali",
      img: "https://images.pexels.com/photos/4473360/pexels-photo-4473360.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      name: "Ilgar Shukurlu",
      img: "https://images.pexels.com/photos/4473360/pexels-photo-4473360.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      name: "Devid Ruvinov",
      img: "https://images.pexels.com/photos/4473360/pexels-photo-4473360.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.img} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};
