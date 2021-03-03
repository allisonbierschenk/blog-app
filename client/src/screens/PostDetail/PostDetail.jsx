import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getPost } from "../../services/posts";

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  const { id } = useParams();

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

  return (
    <Layout>
      <div className="detail-container">
        <div className="detail-title">{post.title}</div>
        <div className="detail-author">{post.author}</div>
        <img className="detail-image" src={post.imgURL} alt={post.title} />
        <div className="detail-content">{post.content}</div>
        <button classname="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    </Layout>
  );
}
