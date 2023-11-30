import { Post } from "../post/Post";
import "./posts.scss";

export const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Togrul Agali",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Ruvinov Devid",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/4034021/pexels-photo-4034021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://images.pexels.com/photos/4038347/pexels-photo-4038347.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
