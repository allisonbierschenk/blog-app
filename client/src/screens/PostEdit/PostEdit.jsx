import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect, useParams } from "react-router-dom";
import { getPost, updatePost } from "../../services/posts";
import { useState, useEffect } from "react";
import "./PostEdit.css";

function PostEdit(props) {
  const [post, setPost] = useState({
    title: "",
    author: "",
    imgURL: "",
    headline: "",
    content: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updatePost(id, post);
    setUpdated({ updated });
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />;
  }

  return (
    <Layout>
      <div className="edit-heading">Edit Your Post:</div>
      <div className="form-photo-container">
        <img className="preview-image" src={post.imgURL} alt={post.imgURL} />
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-title"
            placeholder="Title"
            value={post.title}
            required
            name="title"
            onChange={handleChange}
          />
          <input
            type="text"
            className="input-author"
            placeholder="Author"
            value={post.author}
            required
            name="author"
            onChange={handleChange}
          />
          <input
            type="text"
            className="input-image"
            placeholder="Image URL"
            value={post.imgURL}
            required
            name="imgURL"
            onChange={handleChange}
          />
          <input
            type="text"
            className="input-headline"
            placeholder="Headline"
            value={post.headline}
            required
            name="headline"
            onChange={handleChange}
          />
          <textarea
            className="input-content"
            placeholder="Content"
            value={post.content}
            required
            name="content"
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default PostEdit;
