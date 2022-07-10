import React from "react";
import img1 from "../images/post01.png";
import img2 from "../images/post02.png";
import img3 from "../images/post03.png";
import img4 from "../images/post04.png";
import img5 from "../images/post05.png";
import img6 from "../images/post06.png";
import img7 from "../images/post07.png";
import img8 from "../images/post08.png";
import img9 from "../images/post09.png";
import img10 from "../images/post10.png";
import img11 from "../images/post11.png";
import img12 from "../images/post12.png";
import img13 from "../images/post13.png";
import img14 from "../images/post14.png";
import img15 from "../images/post15.png";

const Recent = () => {
  return (
    <div className="recent">
      <h4>সাম্প্রতিক পোস্ট </h4>
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
                বাবার সরকারি চাকুরির সুবাধে রাফিদের বার বার বিভিন্ন জেলায় ঘুরতে
                হচ্ছে। এবার তার বাবার পোস্টিং হয়েছে মাগুরায়। তার বাবা একজন
                রেলওয়ে কর্মকর্তা। সে এবার কলেজে ভর্তি হবে। পরিবারের একমাত্র ছেলে
                বলে কথা,
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
              কেই বেশিদিন ধরে রাখতে পারে না, যখনই কারো সাথে ঘনিষ্ঠ বন্ধুত্ব তৈরি
              হতে থাকে, তখনই তাকে ছেড়ে আসার সময় হয়ে যায়।{" "}
            </p>
            <br />
            <a className="read-more" href="/posts/15">
              বিস্তারিত...{" "}
            </a>
          </div>
        </div>

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
                খুব যত্ন করে সব মার্কশীট রেখে দিয়েছিলাম মাধ্যমিক এবং
                উচ্চ-মাধ্যমিকের। সেসব আমলনামা এখানেও রেখে দিলাম,
              </p>
            </div>
            <div className="inner">
              <img className="post-image" src={img14} alt="post 14" />
            </div>
          </div>
          <div className="section">
            <p>
              যেনো হারিয়ে যাওয়ার ভয় না থাকে আর। কোন এক সময় স্মৃতিচারণ করা যাবে
              হয়তো।
            </p>
            <br />
            <a className="read-more" href="/posts/14">
              বিস্তারিত...{" "}
            </a>
          </div>
        </div>

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
              একেবারেই বুঝতে পারছিল না। তারা বলল: হে যুলকারনাইন!ইয়াজূজ ও
              মাজূজ...{" "}
            </p>
            <br />
            <a className="read-more" href="/posts/13">
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
                মৃদুল সাহেব। একটি কোম্পানির ডাটা এনালিস্ট ম্যানেজার। প্রায় ৯ বছর
                যাবৎ চাকুরি করছেন এই কোম্পানি তে। বেতন ভালোই, যদিও তিনি এর চেয়ে
                বেশি ডিজার্ভ করেন বলে বিশ্বাস করেন।
              </p>
            </div>
            <div className="inner">
              <img className="post-image" src={img12} alt="post 12" />
            </div>
          </div>
          <div className="section">
            <p className="details post-details">
              ১৩ বছর আগে ঢাকা বিশ্ববিদ্যালয় থেকে পরিসংখ্যানে অনার্স ও মাস্টার্স
              করেছেন। বিবাহিত এবং দুটো বাচ্চা রয়েছে। তার স্ত্রীর নাম রেহানা, বড়
              মেয়ে মারিয়ার বয়স ১০বছর, ছোট ছেলে রাসেলের বয়স ৬বছর। একটি ভাড়া বাসায়
              থাকেন। বছরখানেক আগে তার মা-র গলার ক্যান্সার ধরা পড়ায় আর্থিকভাবে
              কিছুটা টানাটানির মধ্যে আছেন। এখনো অসুস্থ অবস্থায় আছেন তার মা।
              নাহলে ঐ বেতন দিয়ে তার পরিবারের ভালোভাবেই চলে যায়। জীবন নিয়ে তেমন
              কোনো আফসোসও নেই তার।{" "}
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
                নিশাতের মতো সাহসী,বাস্তববাদী এবং বুদ্ধিমতী মেয়ের সামনে দাড়াতেই
                তার সাহস হয় না।
              </p>
            </div>
            <div className="inner">
              <img className="post-image" src={img11} alt="post 11" />
            </div>
          </div>
          <div className="section">
            <p className="details post-details">
              নিশাত হিমেলের বিশ্ববিদ্যালয়ে একই বর্ষে পড়াশুনা করছে। কখনো সামনা
              সামনি কথা বলার সাহস না হলেও দূর থেকে অনেক দিন ধরেই দেখে আসছে। সাহস
              সঞ্চার করতে করতে আজ সে সরাসরি জানাবে বলে সিদ্ধান্ত নিয়েছে। হিমেল
              কম্পিউটার সাইন্সের ছাত্র, আর নিশাত প্রাণিবিদ্যা বিভাগের ছাত্রী।
              প্রাণীবিদ্যার ছাত্রী হলেও মাল্টি-ট্যালেন্টেডই বলা চলে তাকে, অনেক
              সৃজনশীল কর্মকান্ডে নিজেকে জড়িত রেখেছে। হিমেলের ভয়ের অন্যতম জায়গা
              এটাও যে, এক্সট্রোভার্ট মানুষদের মন জয় করাও কঠিন বিষয়। তাও সে একটা
              কঠিন পরীক্ষা দিতে প্রস্তুত, যা হবার হবে।{" "}
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
              <h4 className="post-title">
                “DOES TIME TRAVEL EXIST? OR EVERYTHING IS AN ILLUSION.”{" "}
              </h4>
              <h5 className="post-subtitle">পোস্ট নংঃ ১০ </h5> <hr />
              <div className="category">
                <p>বিবিধ</p>
                <p>১০ মে, ২০২২</p>
              </div>{" "}
              <hr />
              <p className="details post-details-top">
                দুই বন্ধু মিশকাত এবং বাশার। দুজন ভিন্ন ভিন্ন ডিপার্টমেন্টে পড়লেও
                তাদের মধ্যে বেশ ভালো বন্ধুত্ব আছে। কারণ বিশ্ববিদ্যালয়ের হলগুলোই
                এমন।
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
              বিজ্ঞানমনস্ক মানুষ, তাও তাদের বিশ্বাসে অনেক মতপার্থক্য রয়েছে। দুজন
              একদিন টি,এস,সি তে বসে বসে মাল্টা চা খেতে খেতে গল্প করছিল। হঠাৎ
              দুজনের সামনে দিয়ে এক শাড়ি পরা মেয়ে এসে চায়ের অর্ডার করলো। বেশভূষা
              দেখে ৬০ এর দশকের বলে মনে হয়। বাশার বলে উঠলো মিশকাত কেঃ এখনকার সময়ে
              কেউ এমন পুরাতন ফ্যাশনের পোশাক পরে নাকি? নাকি কোন সাংস্কৃতিক
              অনুষ্ঠানে অংশগ্রহণ করে এসেছে? মিশকাত মজা করে বলে ঊঠলোঃ...{" "}
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
              <img className="post-image" src={img9} alt="" />
            </div>
          </div>
          <div className="section">
            <p className="details post-details">
              কারণ এই পরিবেশ তার কাছে নতুন। এতো সুন্দর একাডেমিক বিল্ডিং-এ ক্লাস
              করতে পেরে মনে মনে খুব-ই খুশি। সবার সাথে মিশতেও ভয় পায়, সবাই তাকে
              গ্রহণ করবে কীনা ভালোভাবে, সে দ্বিধা-দ্বন্দে ভোগে। তবুও ২জন ছেলে
              বন্ধু এবং একজন মেয়ে বন্ধু পেয়ে গেলো কয়েকদিন ক্লাস করেই। আগে থেকেই
              তার পদার্থবিদ্যায় প্রচুর আগ্রহ, তাই মাইক্রোবায়োলজির মতো সাবজেক্ট
              পেয়েও ছেড়ে দিয়েছে। নিয়েছে তাত্ত্বিক পদার্থবিজ্ঞান, স্বপ্ন একদিন
              অনেক বড় পদার্থবিদ এবং গবেষক হবে। পড়াশুনার চাপ কম দেখে নীলক্ষেত
              থেকে মাল্টিভার্স সম্পর্কিত দুটি বই কিনে আনলো। রুমে এসে মাঝ থেকে
              ২/১ পৃষ্ঠা করে কিছু কিছু পড়েছে।{" "}
            </p>
            <br />
            <a className="read-more" href="/posts/09">
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
                জীবন কি আসলেই সুন্দর? সুন্দর হলে এতো এতো হতাশ মানুষ কেনো
                চারপাশে? হতাশ মানুষের সংখ্যাই কি বেশি, নাকি সুখী মানুষের সংখ্যা
                বেশি পৃথিবীতে?
              </p>
            </div>
            <div className="inner">
              <img className="post-image" src={img8} alt="" />
            </div>
          </div>
          <div className="section">
            <p className="details post-details">
              সে জরিপ আমার জানা না থাকলেও আমি নিজেকে সুখী মানুষ হিসেবেই বিবেচনা
              করি এবং ভবিষ্যতেও করবো ইনশাল্লাহ। আমার জীবনেও হতাশার কমতি ছিল না,
              কিন্তু সে তুলনায় সুখী হওয়ার জন্যে জীবনে আরো বেশি কিছু ছিল এবং আছে।{" "}
              <br /> জীবনের একদম শুরুর দিকে যখন কিছুটা জ্ঞান হতে শিখেছে, তখন
              আব্বু আমাকে কাধে করে ঘুরতো। সেই আনন্দ তখন যতটা না অনুভব করেছি, যখন
              সময়টা পেরিয়ে গিয়েছে, তখন অনুভব করতাম, আসলেই আমি অনেক ভালো সময়
              কাটিয়ে এসেছি।{" "}
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
              আবেদন জানালো। এর আগে কোভিড-১৯ নিয়ে টুকটাক কথা শুনেছি। কিন্তু এতোটা
              সিরিয়াস ভাবিনি। ২/১ দিনের মধ্যেই হল বন্ধ করে দেয়ার নোটিস এসে গেলো।
              ২০২০ এর ১৫ মার্চ রাতে নীলক্ষেত থেকে আমি বাসার উদ্দেশ্যে রওয়ানা
              দেই। এরপর বাকি সময় বাসাতেই কাটে। তখন ক্লাসও অফ, অনলাইনে ক্লাস করার
              সিদ্ধান্ত এখনো বুয়েট কর্তৃপক্ষের মাথায় আসে নি।{" "}
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
              খালি ফ্রি তে মেসেজ দেয়া যায়, এটাতেই খুশি আমি। ক্লাসমেট দের মেসেজ
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
              যখন আমি সাধারণত পড়বো না। নিজের পড়ার সময় এর সাথে যেনো কোচিং এর সময়
              ওভারলেপ না করে। দুপুর ১২টার ব্যাচ পছন্দ করলাম।{" "}
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
                কলেজ ভর্তির পালা আসলো, কোথায় ভর্তি হবো তা নিয়ে এক একজন একেক রকম
                পরামর্শ দিলো। অনেকেই বললো নিজ জেলায় ভর্তি হতে।
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
              ভর্তি পরীক্ষায় পিছিয়ে যাবো। যাই হোক, আব্বুর এর বন্ধু, বাহার আঙ্কেল
              আম্মু কে বললেন, পিলখানায় কোন এক কলেজে উনি আমাকে ভর্তি করিয়ে দিবেন,
              আর ওনার বাসা জিগাতলায় থাকবো আমি। আমার মা অন্যদের সাথে পরামর্শ করে
              রাজি হলেন।{" "}
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
              প্রাথমিক শিক্ষা সমাপনী পরীক্ষা শেষ করে ঢাকায় ঘুরতে চলে আসলাম। জেলা
              বয়েজ স্কুলের ভর্তি পরীক্ষার ৪/৫ দিন আগে বাসায় এসে ভর্তি পরীক্ষার
              প্রস্তুতি নেয়া শুরু করলাম। এদিকে শুনি আমার বন্ধু বান্ধব রা সবাই
              কোচিং করে একাকার। আমি ভয় পাওয়া শুরু করে দিলাম। তারপরেও সেরাটা দিয়ে
              প্রিপারেশন নিলাম। ফলাফল আমি ভর্তি পরীক্ষায় সম্মিলিতভাবে প্রথম।
              এখনো মনে আছে, ট্রাপিজিয়ামের একটা অংক এসেছিল, কেউ পারে নি, কিন্তু
              আমি পেরেছিলাম। তার কারনেই ফলাফলে আমি বাকিদের চেয়ে এগিয়ে যাই।{" "}
            </p>
            <br />
            <a className="read-more" href="/posts/03">
              বিস্তারিত...{" "}
            </a>
          </div>
        </div>

        {/* post 02 */}

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
              ৫টাকা দিয়ে দিতো রিক্সা দিয়ে চলে আসার জন্যে।আমি রিক্সা দিয়ে না এসে
              ঐ টাকা জমাতে থাকলাম। একসময় আমার অনেক টাকা জমে গেলো। মাটির এক
              ব্যাংক ছিল। সেটা অর্ধেক পর্যন্ত টাকা জমিয়েছিলাম। একদিন দুর্ঘটনাবশত
              মাটির ব্যাংক ভেঙে যায়। আমার কান্না কে দেখে। ঐদিনই পরে প্লাস্টিকের
              আরেকটা ব্যাংক কিনে দিয়েছিল।{" "}
            </p>
            <br />
            <a className="read-more" href="/posts/02">
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

        {/* post no : 03  */}
        {/* //  */}
      </div>
    </div>
  );
};

export default Recent;
