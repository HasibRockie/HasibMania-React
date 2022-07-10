import React from "react";
import "./Footer.css";
import photo from "./hasib.jpeg";

const Footer = () => {
  return (
    <div className="bottom">
      <div className="footer">
        <div className="segment">
          <h3>পরিচয়:-</h3>
          <div className="infos">
            <img className="image" src={photo} height="200px" alt="" /> <br />
            <br />
            <div className="info">
              <p>মোঃ হাসিবুল ইসলাম </p>
              <p>যন্ত্রকৌশল'১৮, বুয়েট </p>
              <p>লাহার কান্দি, সদর, লক্ষ্মীপুর-৩৭০০, বাংলাদেশ </p>
              <p>mdhasibul@ug.me.buet.ac.bd</p>
              <p>hasibrockie@yahoo.com</p>
              <p>
                <a href="https://www.facebook.com/Hasib.Rockie">
                  Hasibul Islam
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="segment">
          <h5 className="pages-footer">পেজসমূহ</h5>
          <div className="footer-links">
            <ul>
              <a href="/"> হোম </a>
            </ul>
           
            <ul>
              <a href="/personals"> ব্যক্তিগত-ব্লগ</a>
            </ul>
            <ul>
              <a href="/others"> ধর্মীয়-ব্লগ </a>
            </ul>
            <ul>
              <a href="/blogs">বিবিধ-ব্লগ</a> 
            </ul>
            <ul>
              <a href="/gratitude"> কৃতজ্ঞতা </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        স্বত্ব © ২০২২ । <span>HasibMania</span>
      </div>
    </div>
  );
};

export default Footer;
