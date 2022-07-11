import React, { useEffect, useState } from "react";
import Post from "../Home/Post";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://hasibmania-server.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.reverse());
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner-grow loading" role="status">
          <span className="sr-only loading">Loading...</span>
        </div>

        <h3 className="loading-text">LOADING...</h3>
      </div>
    );
  }

  return (
    <div className="recent gratitude">
      <h4>সকল পোস্ট </h4>
      <hr />
      <br />
      <br />
      <br />
      <div className="all-posts">
        {posts.map((post) => (
          <Post key={post._id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
