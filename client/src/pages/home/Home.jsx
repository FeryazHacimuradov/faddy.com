import { Post } from "../../components/posts/Post";
import { Stories } from "../../components/stories/Stories";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Post />
    </div>
  );
};
