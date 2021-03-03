import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getPosts } from "../../services/posts";

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

  return (
    <Layout>
      <div>
        <p> BLog posts here</p>
      </div>
    </Layout>
  );
};

export default Home;
