import React from 'react';

const Post = ({post}) => {

    const url = `/posts/${post.postNo}`;

    return (
        <div className="post">
          <div className="section">
            <div className="inner">
              <h4 className="post-title">{post.title} </h4> <hr />
              
              <div className="category">
                <p>পোস্টঃ {post.postNo}</p>
                <p>{post.category}</p>  
                <p>{post.date}</p>
              </div>{" "}
              <hr />
              
            </div>
            <div className="inner">
              <img className="post-image" src={post.banner} alt={post.postNo} />
            </div>
          </div>
          <div className="section">
            <p className="details post-details">
              {post.para01}
            </p>
            <br />
            <a className="read-more" href={url} >
              বিস্তারিত...{" "}
            </a>
          </div>
        </div>
    );
};

export default Post;