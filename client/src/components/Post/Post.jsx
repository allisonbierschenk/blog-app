import "./Post.css";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <>
      <Link className="post" to={`/posts/${props._id}`}>
        <div className="post-title">{props.title}</div>
        <div className="post-author">{props.author}</div>
        <img className="post-image" alt={props.title} src={props.imgURL} />
        <div className="post-headline">{props.headline}</div>
      </Link>
    </>
  );
};

export default Post;
