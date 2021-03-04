import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createPost } from "../../services/posts";
import { useState } from "react";
import "./PostCreate.css";

function PostCreate(props) {
  const [post, setPost] = useState({
    title: "",
    author: "",
    imgURL: "",
    headline: "",
    content: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <div className="form-heading">Contribute a Post:</div>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-title"
          placeholder="Title"
          value={post.title}
          required
          name="title"
          onChange={handleChange}
          autoFocus
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
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default PostCreate;
