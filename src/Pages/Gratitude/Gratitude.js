import React from "react";
import "./Gratitude.css";
import male from "./male.png";
import female from "./female.png";

const Gratitude = () => {
  return (
    <div className="gratitude">
      <br />
      <h2>কৃতজ্ঞতা </h2>
      <hr />
      <br />
      <h5 className="head-grat">
        আমি যাদের উপর <b>কোনো না কোনো ভাবে ঋণী</b> অথবা <b>যাদের দ্বারা প্রভাবিত</b> অথবা
         <b> যাদের কে মন থেকে পছন্দ করি</b>, তাদের কথা এখানে সংক্ষেপে তুলে ধরা হবে।
        এক্ষেত্রে যেসব ছবি ব্যবহার করা হবে, তা তাদের সোশ্যাল মিডিয়া অথবা পাবলিক
        সোর্স থেকেই নেয়া হবে। তাই আশা করি, এখানে ছবি ব্যবহার করাতে কারো কোন
        আপত্তি থাকবে না।
      </h5>
      <hr />
      <div className="section-grat">
        {/* person-01  */}
        <div className="item-grat">
          <div className="p-top">
            <div className="p-left">
              <h4 className="p-name">হাছিনা আক্তার </h4>
              <h6 className="p-relation">আম্মু </h6>
            </div>
            <div className="p-right">
              <img src={female} alt="hasib" />
            </div>
          </div>
          <hr />
          <p className="p-details">
            সবার ক্ষেত্রে যা বাবা-মা দুজন মিলে সামলায়, আমাদের বেলায় উনি একলাই সামাল দিয়েছে। অনেক পারিবারিক বিপর্যয়ের মধ্যেও আমাদের কে আমাদের পথ থেকে বিচ্ছিন্ন হতে দেয়নি। নিজের জীবন স্যাক্রিফাইস করে আমাদের মাথায় উপর ছায়া হয়ে এখনো টিকে আছে। যখনি যে সমস্যায় পড়ি, মাথার মধ্যে এটাই আসে যে, আম্মু ভালো পরামর্শ দিতে পারবে। যেখানেই আম্মুর কথা মতো কাজ করেছি, সেখানেই ১০০% সফল হয়েছি। উদাহরণ দিয়ে শেষ করা যাবে না। আমার প্রিয় মানুষদের তালিকায় উনিই প্রথমে জায়গা পাওয়ার যোগ্য। 
          </p>
        </div>

        {/* person-02  */}

        <div className="item-grat">
          <div className="p-top">
            <div className="p-left">
              <h4 className="p-name">মোঃ সিরাজুল ইসলাম</h4>
              <h6 className="p-relation">আব্বু </h6>
            </div>
            <div className="p-right">
              <img src={male} alt="hasib" />
            </div>
          </div>
          <hr />
          <p className="p-details">
            আমার চোখে আমার বাবা নিখুত। যার সাথে আমি কারোরই তুলনা খুজে পাই না। প্রিয় জিনিস মানুষ হয়তো বেশিদিন ধরে রাখতে পারে না, তাই আমিও ধরে রাখতে পারিনি বেশিদিন। যার কাছে আমার কোন আবদারের শেষ ছিল না,তিনিও সব আবদার পূরণে ছিল এক পায়ে খাড়া। বিনিময়ে আমি কিছুই করতে পারিনি। 
          </p>
        </div>

        {/* person-03  */}

        <div className="item-grat">
          <div className="p-top">
            <div className="p-left">
              <h4 className="p-name">নাফি ও নাহী </h4>
              <h6 className="p-relation">ভাই</h6>
            </div>
            <div className="p-right">
              <img src={male} alt="hasib" />
            </div>
          </div>
          <hr />
          <p className="p-details">
            এরা আমার চেয়ে বেশি সফল হোক, সব দিক থেকে, এটাই আমি মন থেকে চাই। একটা বিষয় আমাকে ভালোই পীড়া দেয়, তা হলোঃ আমি আবদার করার জন্যে আব্বু কে পেয়েছিলাম, কিন্তু এরা বেশিদিন পায় নি। তাই অন্তত আমি যেন আমার অবস্থান থেকে তাদের প্রতি দায়িত্ব ঠিক-ঠাক পালন করতে পারি, সেটাই দোয়া করি আল্লাহর কাছে।  
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gratitude;
