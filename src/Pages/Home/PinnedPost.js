import React from "react";
import img1 from "../images/post01.png";

const PinnedPost = () => {
  return (
    <div className="recent">
      <h4> Pinned Post </h4>
      <hr />
      <br />
      <br />
      <br />
      <div className="all-posts">
        {/* post no 01 */}
        <div className="post">
          <div className="section">
            <div className="inner">
              <h3 className="post-title">সূচনা পোস্ট </h3>
              <h5 className="post-subtitle">পোস্ট নংঃ ০১ </h5> <hr />
              <div className="category">
                <p>ব্যাক্তিগত</p>
                <p>২৫ ফেব্রুয়ারি, ২০২২</p>
              </div>{" "}
              <hr />
              <p className="details post-details-top">
                এই ওয়েবসাইট টি আসলে শখের বশেই খোলা। খোলার পেছনে অনেক কারনও
                রয়েছে। অনেক সময়ই মাথায় অনেক কথা আসে, কিন্তু ফেসবুক সহ অন্যান্য
                সোশ্যাল মিডিয়া তে শেয়ার করার মতো অবস্থা থাকে না
              </p>
            </div>
            <div className="inner">
              <img className="post-image" src={img1} alt="" />
            </div>
          </div>
          <div className="section">
            <p className="details post-details">
              এবং ইচ্ছাও হয় না। কারন অনেক ধরনের মানুষই আছে, যেটা আমার কাছে অনেক
              গুরুত্বপূর্ন, সেটি অনেকের কাছে প্রদর্শনের বস্তু বলে মনে হবে।তাই
              আমি আমার মতো আলাদা মিডিয়া খুজে নিয়েছি নিজের কথা বলার। এখানে সবাই
              আমার কথা দেখবে না, কেবল ইচ্ছুক মানুষরাই দেখবে। যার পছন্দ হবে না,
              সে দেখবে না। তাছাড়া, নিজের অবসর সময়ে কিছু একটা করে নিজেকে ব্যস্ত
              রাখাও যাবে এর মাধ্যমে। আরেকটা বিষয় হলো, একটা সময় পরে গিয়ে নিজের সব
              কথাগুলো নিজেও কম্পাইলড আকারে খুজে পাবো। সময়ের সাথে নিজের চিন্তা
              চেতনা, ভাবনার পরিবর্তন গুলোও ধরতে পারবো। এই ওয়েবসাইট কে অনেক দিন
              টিকিয়ে রাখার ইচ্ছা। বাকিটা আল্লাহর ইচ্ছা।
            </p>
            <br />
            <a className="read-more" href="/posts/01">
              বিস্তারিত...{" "}
            </a>
          </div>
        </div>
        {/* post 02 */}
      </div>
    </div>
  );
};

export default PinnedPost;
