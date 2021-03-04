import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { deletePost, getPost } from "../../services/posts";
import "./PostDetail.css";

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setLoaded(true);
    };
    fetchPost();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  function deleteThisPost() {
    deletePost(post._id);
    history.push("/");
  }

  return (
    <Layout>
      <div className="container">
        <div className="detail-container">
          <div className="detail-title">{post.title}</div>
          <div className="detail-author">By: {post.author}</div>
          <img className="detail-image" src={post.imgURL} alt={post.title} />
          <div className="detail-content">{post.content}</div>
          <div className="detail-buttons">
            <button className="edit-button">
              <Link className="edit-link" to={`/posts/${post._id}/edit`}>
                Edit
              </Link>
            </button>
            <button className="delete-button" onClick={deleteThisPost}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
