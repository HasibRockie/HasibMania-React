import React, { useEffect, useState } from "react";
import Post from "../Home/Post";
import "./Blogs.css";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    fetch("http://localhost:5000/fiction")
    .then((res)=> res.json())
    .then((data)=> {
      const allPosts = (data.reverse());
      setPosts(allPosts);
      setLoading(false);
    });
  },[]);

  if(loading){
      return <div className="loading">
        <div className="spinner-grow loading" role="status">
      <span className="sr-only loading">Loading...</span> 
    </div>
    
      <h3 className="loading-text">LOADING...</h3>
      </div>
    
  
  }

  return (
    <div className="recent gratitude">
      <h4> ফিকশন </h4>
      <hr />
      <br />
      <br />
      <br />
      <div className="all-posts">

        {posts.map((post)=> (<Post key={post._id} post={post}></Post>))}

          </div>



        </div>

  );
};

export default Blogs;
