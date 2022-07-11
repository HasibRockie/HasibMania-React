import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Post from "./Post";

const Recent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://hasibmania-server.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.reverse().slice(0, 10));
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
    <div className="recent">
      <h4>সাম্প্রতিক পোস্ট </h4>
      <hr />
      <br />
      <br />
      <br />
      <div className="all-posts">
        {posts.map((post) => (
          <Post key={posts._id} post={post}></Post>
        ))}
      </div>
      <br /> <br />
      <div className="see-all-post-btn">
        <Button variant="dark">
          <a href="/posts">সকল পোস্ট দেখুন</a>
        </Button>
      </div>
    </div>
  );
};

export default Recent;
