import "./Post.css";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <>
      <Link className="post" to={`/posts/${props._id}`}>
        <img className="post-image" alt={props.title} src={props.imgURL} />
        <div className="post-title">{props.title}</div>
        <div className="post-headline">{props.headline}</div>
        <div className="post-author">
          <span className="post-inline-styling">By: </span>
          {props.author}
        </div>
      </Link>
    </>
  );
};

export default Post;
