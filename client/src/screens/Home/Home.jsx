import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getPosts } from "../../services/posts";
import Post from "../../components/Post/Post";
import "./Home.css";

const Home = (props) => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setAllPosts(posts);
      console.log(posts);
    };
    fetchPosts();
  }, []);

  const displayPosts = allPosts.map((post, index) => (
    <Post
      key={index}
      _id={post._id}
      title={post.title}
      author={post.author}
      imgURL={post.imgURL}
      headline={post.headline}
    />
  ));

  return (
    <Layout>
      <div className="display-posts">{displayPosts}</div>
    </Layout>
  );
};

export default Home;
