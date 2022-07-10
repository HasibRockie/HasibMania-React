import React from "react";
import "./Personals.css";
import img1 from "../images/post01.png";
import img2 from "../images/post02.png";
import img3 from "../images/post03.png";
import img4 from "../images/post04.png";
import img5 from "../images/post05.png";
import img6 from "../images/post06.png";
import img7 from "../images/post07.png";
import img8 from "../images/post08.png";
import img14 from "../images/post14.png";

const Personals = () => {
  return (
    <div>
      <div className="recent">
        <h4>ব্যাক্তিগত </h4>
        <hr />
        <br />
        <br />
        <br />
        <div className="all-posts">


           {/* post no 14  */}
           <div className="post">
            <div className="section">
              <div className="inner">
                <h4 className="post-title">"শিক্ষাজীবনের আমলনামা" </h4>
                <h5 className="post-subtitle">পোস্ট নংঃ ১৪ </h5> <hr />
                <div className="category">
                  <p>ব্যাক্তিগত</p>
                  <p>১ জুন, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                খুব যত্ন করে সব মার্কশীট রেখে দিয়েছিলাম মাধ্যমিক এবং উচ্চ-মাধ্যমিকের। সেসব আমলনামা এখানেও রেখে দিলাম, 
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img14} alt="post 14" />
              </div>
            </div>
            <div className="section">
              <p>
              যেনো হারিয়ে যাওয়ার ভয় না থাকে আর। কোন এক সময় স্মৃতিচারণ করা যাবে হয়তো। 
              </p>
              <br />
              <a className="read-more" href="/posts/14">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>


          {/* post no 08  */}
          <div className="post">
            <div className="section">
              <div className="inner">
                <h4 className="post-title">LIFE IS REALLY BEAUTIFUL!!! </h4>
                <h5 className="post-subtitle">পোস্ট নংঃ ০৮ </h5> <hr />
                <div className="category">
                  <p>ব্যাক্তিগত</p>
                  <p>৮ মে, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                জীবন কি আসলেই সুন্দর? সুন্দর হলে এতো এতো হতাশ মানুষ কেনো চারপাশে? হতাশ মানুষের সংখ্যাই কি বেশি, নাকি সুখী মানুষের সংখ্যা বেশি পৃথিবীতে? 
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img8} alt="" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
              সে জরিপ আমার জানা না থাকলেও আমি নিজেকে সুখী মানুষ হিসেবেই বিবেচনা করি এবং ভবিষ্যতেও করবো ইনশাল্লাহ। আমার জীবনেও হতাশার কমতি ছিল না, কিন্তু সে তুলনায় সুখী হওয়ার জন্যে জীবনে আরো বেশি কিছু ছিল এবং আছে। <br /> জীবনের একদম শুরুর দিকে যখন কিছুটা জ্ঞান হতে শিখেছে, তখন আব্বু আমাকে কাধে করে ঘুরতো। সেই আনন্দ তখন যতটা না অনুভব করেছি, যখন সময়টা পেরিয়ে গিয়েছে, তখন অনুভব করতাম, আসলেই আমি অনেক ভালো সময় কাটিয়ে এসেছি।  {" "}
              </p>
              <br />
              <a className="read-more" href="/posts/08">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>


          {/* post no 07  */}
          <div className="post">
            <div className="section">
              <div className="inner">
                <h4 className="post-title">কোভিড-এর দিনগুলি </h4>
                <h5 className="post-subtitle">পোস্ট নংঃ ০৭ </h5> <hr />
                <div className="category">
                  <p>ব্যাক্তিগত</p>
                  <p>২৫ এপ্রিল, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                  আমি তখন লেভেল-১ টার্ম-২ এর শিক্ষার্থী। স্বাভাবিক ভাবেই ক্লাস
                  করছি। একদিন হলে হঠাৎ শুনতে পেলাম, হল বন্ধ হয়ে যাবে।
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img7} alt="" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
                সিনিয়র ছাত্ররা হল বন্ধ করে দেয়া এবং ক্লাস আপাতত অফ রাখার জন্যে
                আবেদন জানালো। এর আগে কোভিড-১৯ নিয়ে টুকটাক কথা শুনেছি। কিন্তু
                এতোটা সিরিয়াস ভাবিনি। ২/১ দিনের মধ্যেই হল বন্ধ করে দেয়ার নোটিস
                এসে গেলো। ২০২০ এর ১৫ মার্চ রাতে নীলক্ষেত থেকে আমি বাসার
                উদ্দেশ্যে রওয়ানা দেই। এরপর বাকি সময় বাসাতেই কাটে। তখন ক্লাসও অফ,
                অনলাইনে ক্লাস করার সিদ্ধান্ত এখনো বুয়েট কর্তৃপক্ষের মাথায় আসে
                নি।{" "}
              </p>
              <br />
              <a className="read-more" href="/posts/07">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>

          {/* post no 06  */}
          <div className="post">
            <div className="section">
              <div className="inner">
                <h4 className="post-title">
                  ফেসবুক জীবনের আদ্যোপান্ত (২০১৪ - বর্তমান){" "}
                </h4>
                <h5 className="post-subtitle">পোস্ট নংঃ ০৬ </h5> <hr />
                <div className="category">
                  <p>ব্যাক্তিগত</p>
                  <p>২২ এপ্রিল, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                  অষ্টম শ্রেণী তে থাকতে কোন এক বন্ধুর মাধ্যমে এই পাপের পথের
                  হাতেখড়ি হয়। প্রথম দিকে কিছুই বুঝতাম না,
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img6} alt="" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
                খালি ফ্রি তে মেসেজ দেয়া যায়, এটাতেই খুশি আমি।ক্লাসমেট দের মেসেজ
                দিতাম, তাও ইংলিশে মেসেজ দিতামঃ “How are you? What are you doing”
                টাইপের মেসেজ। পরে এক বন্ধু শিখাই দিলো, এখানকার কালচার কেমন!
                বাংলিশে কথা বার্তা বলতে হবে!{" "}
              </p>
              <br />
              <a className="read-more" href="/posts/06">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>

          {/* post no 05  */}
          <div className="post">
            <div className="section">
              <div className="inner">
                <h4 className="post-title">ভর্তি যুদ্ধের অভিজ্ঞতা (২০১৮) </h4>
                <h5 className="post-subtitle">পোস্ট নংঃ ০5 </h5> <hr />
                <div className="category">
                  <p>ব্যাক্তিগত</p>
                  <p>20 এপ্রিল, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                  এইচ,এস,সি শেষ হওয়ার পর থেকেই ভর্তি প্রস্তুতির পালা শুরু।
                  উদ্ভাসেই ভর্তি হবো, এতটুকু নিশ্চিত। কিন্তু ফার্মগেট নাকি
                  সাইন্সল্যাব ব্রাঞ্চে ভর্তি হবো, তা নিয়ে প্রথমে কনফিউশন ছিল।
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img5} alt="" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
                পরে হিসেব করে দেখলাম, কোথায় সময়ের অপচয় কম, সেখানে ভর্তি হবো।
                সাইন্সল্যাব আমার জন্যে কাছে ছিল, তাই সময় অপচয় হবে কম, তাই এখানেই
                ভর্তি হই। সময় টা বাছাই এর সময়ও চেষ্টা করলাম, এমন সময় বেছে নিতে,
                যখন আমি সাধারণত পড়বো না। নিজের পড়ার সময় এর সাথে যেনো কোচিং এর
                সময় ওভারলেপ না করে। দুপুর ১২টার ব্যাচ পছন্দ করলাম।{" "}
              </p>
              <br />
              <a className="read-more" href="/posts/05">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>

          {/* post no 04  */}
          <div className="post">
            <div className="section">
              <div className="inner">
                <h4 className="post-title">
                  কলেজ জীবনের সারসংক্ষেপ (২০১৬- ২০১৮){" "}
                </h4>
                <h5 className="post-subtitle">পোস্ট নংঃ ০৪ </h5> <hr />
                <div className="category">
                  <p>ব্যাক্তিগত</p>
                  <p>১৮ এপ্রিল, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                  কলেজ ভর্তির পালা আসলো, কোথায় ভর্তি হবো তা নিয়ে এক একজন একেক
                  রকম পরামর্শ দিলো। অনেকেই বললো নিজ জেলায় ভর্তি হতে।
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img4} alt="" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
                কিন্তু আমার মা এই ব্যাপারে অনড় যে, আমাকে লক্ষ্মীপুর ভর্তি করবেন
                না, ঢাকায় পাঠিয়ে দিবেন। এখানে থাকলে ভালো কোন প্রতিযোগী পাবো না,
                ভর্তি পরীক্ষায় পিছিয়ে যাবো। যাই হোক, আব্বুর এর বন্ধু, বাহার
                আঙ্কেল আম্মু কে বললেন, পিলখানায় কোন এক কলেজে উনি আমাকে ভর্তি
                করিয়ে দিবেন, আর ওনার বাসা জিগাতলায় থাকবো আমি। আমার মা অন্যদের
                সাথে পরামর্শ করে রাজি হলেন।{" "}
              </p>
              <br />
              <a className="read-more" href="/posts/04">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>

          {/* post no 03  */}
          <div className="post">
            <div className="section">
              <div className="inner">
                <h4 className="post-title">
                  মাধ্যমিক স্কুলজীবনের সারসংক্ষেপ (২০১০- ২০১৬){" "}
                </h4>
                <h5 className="post-subtitle">পোস্ট নংঃ ০৩ </h5> <hr />
                <div className="category">
                  <p>ব্যাক্তিগত</p>
                  <p>১৭ এপ্রিল, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                  <b>
                    {" "}
                    (Disclaimer: প্রচুর ব্যক্তিগত কথায় ভরপুর, অনেকেরই বিরক্তির
                    উদ্রেগ হতে পারে। তাই আগ্রহী না হলে, স্কিপ করতে পারেন। ){" "}
                  </b>
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img3} alt="" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
                প্রাথমিক শিক্ষা সমাপনী পরীক্ষা শেষ করে ঢাকায় ঘুরতে চলে আসলাম।
                জেলা বয়েজ স্কুলের ভর্তি পরীক্ষার ৪/৫ দিন আগে বাসায় এসে ভর্তি
                পরীক্ষার প্রস্তুতি নেয়া শুরু করলাম। এদিকে শুনি আমার বন্ধু বান্ধব
                রা সবাই কোচিং করে একাকার। আমি ভয় পাওয়া শুরু করে দিলাম। তারপরেও
                সেরাটা দিয়ে প্রিপারেশন নিলাম। ফলাফল আমি ভর্তি পরীক্ষায়
                সম্মিলিতভাবে প্রথম। এখনো মনে আছে, ট্রাপিজিয়ামের একটা অংক এসেছিল,
                কেউ পারে নি, কিন্তু আমি পেরেছিলাম। তার কারনেই ফলাফলে আমি বাকিদের
                চেয়ে এগিয়ে যাই।{" "}
              </p>
              <br />
              <a className="read-more" href="/posts/03">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>

          {/* post no 02  */}
          <div className="post">
            <div className="section">
              <div className="inner">
                <h4 className="post-title">
                  প্রাইমারি স্কুল জীবনের সার-সংক্ষেপ (২০০৬-২০১০){" "}
                </h4>
                <h5 className="post-subtitle">পোস্ট নংঃ ০২ </h5> <hr />
                <div className="category">
                  <p>ব্যাক্তিগত</p>
                  <p>১৪ এপ্রিল, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                  আমার ফ্যামিলি ২০০৫ এর মার্চ এর দিকে কমলনগর থেকে জেলা সদরে আসে।
                  আমরা তখন হাসপাতাল রোডে একতলা এক বাসায় ভাড়া থাকতাম।
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img2} alt="" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
                বছরের মাঝামাঝি হওয়ায় এক সরকারি প্রাইমারি স্কুলে ভর্তি হই। তখনকার
                দৈনন্দিন জীবন ছিল এমন- আব্বু প্রত্যেক দিন পৌছায়ে দিতো স্কুলে, আর
                ৫টাকা দিয়ে দিতো রিক্সা দিয়ে চলে আসার জন্যে।আমি রিক্সা দিয়ে না
                এসে ঐ টাকা জমাতে থাকলাম। একসময় আমার অনেক টাকা জমে গেলো। মাটির এক
                ব্যাংক ছিল। সেটা অর্ধেক পর্যন্ত টাকা জমিয়েছিলাম। একদিন
                দুর্ঘটনাবশত মাটির ব্যাংক ভেঙে যায়। আমার কান্না কে দেখে। ঐদিনই
                পরে প্লাস্টিকের আরেকটা ব্যাংক কিনে দিয়েছিল।{" "}
              </p>
              <br />
              <a className="read-more" href="/posts/02">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>

          {/* post 01 */}

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

          {/* post no 03  */}
        </div>
      </div>
    </div>
  );
};

export default Personals;
