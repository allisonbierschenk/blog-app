import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getPosts } from "../../services/posts";
import Post from "../../components/Post/Post";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";
import { AZTitle, ZATitle, AZAuthor, ZAAuthor } from "../../utils/sort";
import "./Home.css";

const Home = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  const [queriedPosts, setQueriedPosts] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setAllPosts(posts);
      setQueriedPosts(posts);
    };
    fetchPosts();
  }, []);
  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "title-ascending":
        setQueriedPosts(AZTitle(queriedPosts));
        break;
      case "title-descending":
        setQueriedPosts(ZATitle(queriedPosts));
        break;
      case "author-ascending":
        setQueriedPosts(AZAuthor(queriedPosts));
        break;
      case "author-descending":
        setQueriedPosts(ZAAuthor(queriedPosts));
        break;
      default:
        break;
    }
  };

  const handleSearch = (e) => {
    const filteredPosts = allPosts.filter((post) =>
      post.author.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setQueriedPosts(filteredPosts, () => handleSort(sortType));
  };
  const handleSubmit = (e) => e.preventDefault();

  const displayPosts = queriedPosts.map((post, index) => (
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
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Sort onSubmit={handleSubmit} onChange={handleSort} />
      <div className="display-posts">{displayPosts}</div>
    </Layout>
  );
};

export default Home;
