import React from "react";
import "./Others.css";
import img1 from "../images/post01.png";
import img13 from "../images/post13.png";

const Others = () => {
  return (
    <div>
      <div className="recent">
        <h4>ধর্মীয় </h4>
        <hr />
        <br />
        <br />
        <br />
        <div className="all-posts">

          {/* post no 13  */}
        <div className="post">
          <div className="section">
            <div className="inner">
              <h4 className="post-title">“ইয়াজুজ ও মাজুজ – মরীচিকা ” </h4>
              <h5 className="post-subtitle">পোস্ট নংঃ ১৩ </h5> <hr />
              <div className="category">
                <p>ধর্মীয়</p>
                <p>২৬ মে, ২০২২</p>
              </div>{" "}
              <hr />
              <p className="details post-details-top">
                সকল ধর্মেই ইয়াজুজ-মাজুজ (GOG-MAGOG) নিয়ে বলা হয়েছে। অধিকাংশ
                ধর্মীয় ব্যাখ্যাকারক দের মতে ইয়াজুজ-মাজুজ কেয়ামতের পূর্বে
                পৃথিবীতে আসবে
              </p>
            </div>
            <div className="inner">
              <img className="post-image" src={img13} alt="post 13" />
            </div>
          </div>
          <div className="section">
            <p className="details post-details">
              এবং পৃথিবী তে দাঙ্গা-হাঙ্গামা সৃষ্টি করবে। অনেকক্ষেত্রেই ব্যাখা
              গুলো রূপকথার গল্পের মতো। <br />
              ইয়াজুজ-মাজুজ সম্পর্কে আল্লাহ বলেছেনঃ <br />
              “আবার সে (জুলকারনাইন) পথ চলতে লাগল। অবশেষে যখন সে দুই পর্বত
              প্রাচীরের মধ্যস্থলে পৌঁছল, তখন সেখানে এক জাতিকে পেল,যারা তাঁর কথা
              একেবারেই বুঝতে পারছিল না। তারা বলল: হে যুলকারনাইন!ইয়াজূজ ও মাজূজ...{" "}
            </p>
            <br />
            <a className="read-more" href="/posts/13">
              বিস্তারিত...{" "}
            </a>
          </div>
        </div>

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
                এবং ইচ্ছাও হয় না। কারন অনেক ধরনের মানুষই আছে, যেটা আমার কাছে
                অনেক গুরুত্বপূর্ন, সেটি অনেকের কাছে প্রদর্শনের বস্তু বলে মনে
                হবে।তাই আমি আমার মতো আলাদা মিডিয়া খুজে নিয়েছি নিজের কথা বলার।
                এখানে সবাই আমার কথা দেখবে না, কেবল ইচ্ছুক মানুষরাই দেখবে। যার
                পছন্দ হবে না, সে দেখবে না। তাছাড়া, নিজের অবসর সময়ে কিছু একটা করে
                নিজেকে ব্যস্ত রাখাও যাবে এর মাধ্যমে। আরেকটা বিষয় হলো, একটা সময়
                পরে গিয়ে নিজের সব কথাগুলো নিজেও কম্পাইলড আকারে খুজে পাবো। সময়ের
                সাথে নিজের চিন্তা চেতনা, ভাবনার পরিবর্তন গুলোও ধরতে পারবো। এই
                ওয়েবসাইট কে অনেক দিন টিকিয়ে রাখার ইচ্ছা। বাকিটা আল্লাহর ইচ্ছা।
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
    </div>
  );
};

export default Others;
