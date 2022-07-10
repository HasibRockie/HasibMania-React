import React from "react";
import img1 from "./hasib1.jpg";

const PostTemplate = () => {
  return (
    <div className="post">
      <div className="section">
        <img className="post-image" src={img1} alt="" />
      </div>
      <div className="section">
        <h3 className="post-title">Title</h3>
        <h5 className="post-subtitle">Sub-title</h5>
        <p className="post-details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          debitis neque, tempore, vel similique, consectetur cupiditate
          temporibus repellendus voluptatem facilis adipisci magnam
          exercitationem quo illo et fuga praesentium dolor. Recusandae dolorum
          ipsam expedita reiciendis. Voluptatum quisquam ab quidem eos ratione
          consequatur temporibus! At, magnam quis rerum obcaecati quasi nam
          odio?
        </p>
      </div>
    </div>
  );
};

export default PostTemplate;
