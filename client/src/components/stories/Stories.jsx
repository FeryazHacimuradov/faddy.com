import "./stories.jsx";

export const Stories = () => {
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
      {stories.map((story) => {
        <div className="story">
          {console.log(story.name)}

          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>;
      })}
      <h1>Hello world</h1>
    </div>
  );
};
