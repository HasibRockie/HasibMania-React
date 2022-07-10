import React from "react";
import "./Blogs.css";
import img1 from "../images/post01.png";
import img9 from "../images/post09.png";
import img10 from "../images/post10.png";
import img11 from "../images/post11.png";
import img12 from "../images/post12.png";
import img15 from "../images/post15.png";

const Blogs = () => {
  return (
    <div>
      <div className="recent">
        <h4>বিবিধ </h4>
        <hr />
        <br />
        <br />
        <br />
        <div className="all-posts">
          {/* post no 15  */}
          <div className="post">
            <div className="section">
              <div className="inner">
                <h4 className="post-title">“অদৃশ্য দেয়াল!!” </h4>
                <h5 className="post-subtitle">পোস্ট নংঃ ১৫ </h5> <hr />
                <div className="category">
                  <p>বিবিধ</p>
                  <p>৪ জুন, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                  বাবার সরকারি চাকুরির সুবাধে রাফিদের বার বার বিভিন্ন জেলায়
                  ঘুরতে হচ্ছে। এবার তার বাবার পোস্টিং হয়েছে মাগুরায়। তার বাবা
                  একজন রেলওয়ে কর্মকর্তা। সে এবার কলেজে ভর্তি হবে। পরিবারের
                  একমাত্র ছেলে বলে কথা,
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img15} alt="post 15" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
                তার যে কোন আবদারই তার পরিবার শুনতে বাধ্য। তার কাছে তার জীবন
                এডভেঞ্চারময় মনে হয়, বিভিন্ন জেলায় বিভিন্ন পরিবেশে নিজেকে মানিয়ে
                নিতে হয়। আবার মাঝে মাঝে এটা ভেবে খারাপও লাগে যে, কোন প্রিয় বন্ধু
                কেই বেশিদিন ধরে রাখতে পারে না, যখনই কারো সাথে ঘনিষ্ঠ বন্ধুত্ব
                তৈরি হতে থাকে, তখনই তাকে ছেড়ে আসার সময় হয়ে যায়।{" "}
              </p>
              <br />
              <a className="read-more" href="/posts/15">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>

          {/* post no 12  */}
          <div className="post">
            <div className="section">
              <div className="inner">
                <h4 className="post-title">“শেষ কোথায়?” </h4>
                <h5 className="post-subtitle">পোস্ট নংঃ ১২ </h5> <hr />
                <div className="category">
                  <p>বিবিধ</p>
                  <p>১৩ মে, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                  মৃদুল সাহেব। একটি কোম্পানির ডাটা এনালিস্ট ম্যানেজার। প্রায় ৯
                  বছর যাবৎ চাকুরি করছেন এই কোম্পানি তে। বেতন ভালোই, যদিও তিনি এর
                  চেয়ে বেশি ডিজার্ভ করেন বলে বিশ্বাস করেন।
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img12} alt="post 12" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
                ১৩ বছর আগে ঢাকা বিশ্ববিদ্যালয় থেকে পরিসংখ্যানে অনার্স ও
                মাস্টার্স করেছেন। বিবাহিত এবং দুটো বাচ্চা রয়েছে। তার স্ত্রীর নাম
                রেহানা, বড় মেয়ে মারিয়ার বয়স ১০বছর, ছোট ছেলে রাসেলের বয়স ৬বছর।
                একটি ভাড়া বাসায় থাকেন। বছরখানেক আগে তার মা-র গলার ক্যান্সার ধরা
                পড়ায় আর্থিকভাবে কিছুটা টানাটানির মধ্যে আছেন। এখনো অসুস্থ অবস্থায়
                আছেন তার মা। নাহলে ঐ বেতন দিয়ে তার পরিবারের ভালোভাবেই চলে যায়।
                জীবন নিয়ে তেমন কোনো আফসোসও নেই তার।{" "}
              </p>
              <br />
              <a className="read-more" href="/posts/12">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>

          {/* post no 11  */}
          <div className="post">
            <div className="section">
              <div className="inner">
                <h4 className="post-title">“নীল খাম নাকি সবুজ খাম?” </h4>
                <h5 className="post-subtitle">পোস্ট নংঃ ১১ </h5> <hr />
                <div className="category">
                  <p>বিবিধ</p>
                  <p>১২ মে, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                  অনেক প্রস্তুতির পর হিমেল আজকে সাহস করে বাসা থেকে বের হলো। আজকে
                  সে নিশাত কে প্রেমের প্রস্তাব দিবে। যদিও সে অনেক ভয় পাচ্ছে,
                  নিশাতের মতো সাহসী,বাস্তববাদী
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img11} alt="post 11" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
                এবং বুদ্ধিমতী মেয়ের সামনে দাড়াতেই তার সাহস হয় না।নিশাত হিমেলের
                বিশ্ববিদ্যালয়ে একই বর্ষে পড়াশুনা করছে। কখনো সামনা সামনি কথা বলার
                সাহস না হলেও দূর থেকে অনেক দিন ধরেই দেখে আসছে। সাহস সঞ্চার করতে
                করতে আজ সে সরাসরি জানাবে বলে সিদ্ধান্ত নিয়েছে। হিমেল কম্পিউটার
                সাইন্সের ছাত্র, আর নিশাত প্রাণিবিদ্যা বিভাগের ছাত্রী।
                প্রাণীবিদ্যার ছাত্রী হলেও মাল্টি-ট্যালেন্টেডই বলা চলে তাকে, অনেক
                সৃজনশীল কর্মকান্ডে নিজেকে জড়িত রেখেছে। হিমেলের ভয়ের অন্যতম জায়গা
                এটাও যে, এক্সট্রোভার্ট মানুষদের মন জয় করাও কঠিন বিষয়। তাও সে
                একটা কঠিন পরীক্ষা দিতে প্রস্তুত, যা হবার হবে।{" "}
              </p>
              <br />
              <a className="read-more" href="/posts/11">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>

          {/* post no 10  */}
          <div className="post">
            <div className="section">
              <div className="inner">
                <h5 className="post-title">
                  “DOES TIME TRAVEL EXIST? OR EVERYTHING IS AN ILLUSION.”{" "}
                </h5>
                <h5 className="post-subtitle">পোস্ট নংঃ ১০ </h5> <hr />
                <div className="category">
                  <p>বিবিধ</p>
                  <p>১০ মে, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                  দুই বন্ধু মিশকাত এবং বাশার। দুজন ভিন্ন ভিন্ন ডিপার্টমেন্টে
                  পড়লেও তাদের মধ্যে বেশ ভালো বন্ধুত্ব আছে। কারণ বিশ্ববিদ্যালয়ের
                  হলগুলোই এমন।
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img10} alt="post 10" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
                ভাইয়ের মতো কতোগুলো বন্ধু জুটিয়ে দেয়, পরিবারকে ভুলে যাদের সাথে
                কাটানো যায় অনেক ভালো ভালো সময়। দুজনেই ভীষণ যৌক্তিক এবং
                বিজ্ঞানমনস্ক মানুষ, তাও তাদের বিশ্বাসে অনেক মতপার্থক্য রয়েছে।
                দুজন একদিন টি,এস,সি তে বসে বসে মাল্টা চা খেতে খেতে গল্প করছিল।
                হঠাৎ দুজনের সামনে দিয়ে এক শাড়ি পরা মেয়ে এসে চায়ের অর্ডার করলো।
                বেশভূষা দেখে ৬০ এর দশকের বলে মনে হয়। বাশার বলে উঠলো মিশকাত কেঃ
                এখনকার সময়ে কেউ এমন পুরাতন ফ্যাশনের পোশাক পরে নাকি? নাকি কোন
                সাংস্কৃতিক অনুষ্ঠানে অংশগ্রহণ করে এসেছে? মিশকাত মজা করে বলে
                ঊঠলোঃ...{" "}
              </p>
              <br />
              <a className="read-more" href="/posts/10">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>

          {/* post no 09  */}
          <div className="post">
            <div className="section">
              <div className="inner">
                <h4 className="post-title">
                  “জিদান,পৃথিবী নং-৩২ থেকে বলছি”! (পর্ব-১){" "}
                </h4>
                <h5 className="post-subtitle">পোস্ট নংঃ ০৯ </h5> <hr />
                <div className="category">
                  <p>বিবিধ</p>
                  <p>৯ মে, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                  জিদান ঢাকা বিশ্ববিদ্যালয়ে এবার নতুন ভর্তি হয়েছে তাত্ত্বিক
                  পদার্থবিজ্ঞানে। ঝিনাইদহ থেকে ঢাকা নতুন এসেছে। নতুন পরিবেশ,
                  চারপাশে যা-ই দেখে মুগ্ধ দৃষ্টিতে তাকিয়ে থাকে।
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img9} alt="post 09" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
                কারণ এই পরিবেশ তার কাছে নতুন। এতো সুন্দর একাডেমিক বিল্ডিং-এ
                ক্লাস করতে পেরে মনে মনে খুব-ই খুশি। সবার সাথে মিশতেও ভয় পায়,
                সবাই তাকে গ্রহণ করবে কীনা ভালোভাবে, সে দ্বিধা-দ্বন্দে ভোগে। তবুও
                ২জন ছেলে বন্ধু এবং একজন মেয়ে বন্ধু পেয়ে গেলো কয়েকদিন ক্লাস করেই।
                আগে থেকেই তার পদার্থবিদ্যায় প্রচুর আগ্রহ, তাই মাইক্রোবায়োলজির
                মতো সাবজেক্ট পেয়েও ছেড়ে দিয়েছে। নিয়েছে তাত্ত্বিক পদার্থবিজ্ঞান,
                স্বপ্ন একদিন অনেক বড় পদার্থবিদ এবং গবেষক হবে। পড়াশুনার চাপ কম
                দেখে নীলক্ষেত থেকে মাল্টিভার্স সম্পর্কিত দুটি বই কিনে আনলো। রুমে
                এসে মাঝ থেকে ২/১ পৃষ্ঠা করে কিছু কিছু পড়েছে।{" "}
              </p>
              <br />
              <a className="read-more" href="/posts/09">
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

export default Blogs;
