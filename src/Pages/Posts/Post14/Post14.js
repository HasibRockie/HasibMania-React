import React from "react";
import "../Post.css";
import img14 from "../../images/post14.png";
import six from "../../images/post14-1.png";
import seven from "../../images/post14-2.png";
import eight from "../../images/post14-3.png";
import nine from "../../images/post14-4.png";
import ten from "../../images/post14-5.png";
import elevenHalf from "../../images/post14-6.png";
import elevenFinal from "../../images/post14-7.png";
import pretest from "../../images/post14-8.png";
import test from "../../images/post14-9.png";

const Post14 = () => {
  return (
    <div className="post-container">
      <h3 className="post-headline">শিক্ষাজীবনের আমলনামা </h3> <hr />
      <br />
      <div className="post-info">
        <h5>ব্যক্তিগত</h5>
        <h5>পোস্ট নংঃ ১৪ </h5>
        <h5>১ জুন, ২০২২ </h5>
      </div>
      <hr />
      <br />
      <div className="post-body">
        <p>
          খুব যত্ন করে সব মার্কশীট রেখে দিয়েছিলাম মাধ্যমিক এবং উচ্চ-মাধ্যমিকের। সেসব আমলনামা এখানেও রেখে দিলাম, যেনো হারিয়ে যাওয়ার ভয় না থাকে আর। কোন এক সময় স্মৃতিচারণ করা যাবে হয়তো। 
        </p>{" "}
        <br />
        
        <br />
        <br />
        <img src={img14} alt="শিক্ষাজীবনের আমলনামা" />
        <p className="img-caption">“শিক্ষাজীবনের আমলনামা”</p>
        <br />
        <br />
        <h4><b>ষষ্ঠ শ্রেণীঃ </b></h4>
        <img src={six} alt="class six" />
        <p className="img-caption">“ষষ্ঠ শ্রেণীঃ ১ম - ২য় - ১ম”</p>
        <br />
        <br />
        <h4><b>সপ্তম শ্রেণীঃ </b></h4>
        <img src={seven} alt="class seven" />
        <p className="img-caption">"সপ্তম শ্রেণীঃ ১ম - ১ম - ১ম”</p>
        <br />
        <br />
        <h4><b>অষ্টম শ্রেণীঃ </b></h4>
        <img src={eight} alt="class eight" />
        <p className="img-caption">"অষ্টম শ্রেণীঃ ১ম”</p>
        <br />
        <br />
        <h4><b>নবম শ্রেণীঃ </b></h4>
        <img src={nine} alt="class nine" />
        <p className="img-caption">"নবম শ্রেণীঃ ২য় - ১ম”</p>
        <br />
        <br />
        <h4><b>দশম শ্রেণীঃ </b></h4>
        <img src={ten} alt="class ten" />
        <p className="img-caption">"দশম শ্রেণীঃ ১ম”</p>
        <br />
        <br />
        <h4><b>একাদশ শ্রেণী - অর্ধ-বার্ষিকঃ  </b></h4>
        <img className="rotate" src={elevenHalf} alt="class eleven half yearly" />
        <p className="img-caption">“কলেজ হাফ-ইয়ারলি পরীক্ষাঃ ১ম”</p>
        <br /> 
        <br />
        <h4><b>একাদশ শ্রেণী - বার্ষিকঃ  </b></h4>
        <img className="rotate" src={elevenFinal} alt="class eleven year final" />
        <p className="img-caption">“কলেজ ইয়ার-ফাইনাল পরীক্ষাঃ ১ম”</p>
        <br />
        <br />
        <h4><b>দ্বাদশ শ্রেণী - প্রি-টেস্টঃ  </b></h4>
        <img className="rotate" src={pretest} alt="pretest" />
        <p className="img-caption">“কলেজ প্রি-টেস্ট পরীক্ষাঃ ১ম”</p>
        <br />
        <br />
        <h4><b>দ্বাদশ শ্রেণী - টেস্টঃ  </b></h4>
        <img className="rotate" src={test} alt="test" />
        <p className="img-caption">“কলেজ টেস্ট পরীক্ষাঃ ১ম”</p>
        <br />
        
       

        <br />
        
      </div>
    </div>
  );
};

export default Post14;
