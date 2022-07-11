import React, { useEffect, useState } from "react";
import "./Gratitude.css";



const Gratitude = () => {

  const [messgaes, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    fetch("http://localhost:5000/gratitude")
    .then((res)=> res.json())
    .then((data)=> {
      const allPosts = (data);
      setMessages(allPosts);
      setLoading(false);
    });
  },[]);

  if(loading){
      return <div className="loading">
        <div className="spinner-grow loading" role="status">
      <span className="sr-only loading">Loading...</span> 
    </div>
    
      <h3 className="loading-text">LOADING...</h3>
      </div>
    
  
  }



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

        {
          messgaes.map(message => 
            <div key={message._id} className="item-grat">
              <h5 className="number-of-dedication">{message.number}</h5>
            <div className="p-top">
              <div className="p-left">
                <h4 className="p-name">{message.name}</h4>
                <h6 className="p-relation">{message.relation} </h6>
              </div>
              <div className="p-right">
                <img src={message.image} alt="hasib" />
              </div>
            </div>
            <hr />
            <p className="p-details">
             {message.message}
            </p>
          </div>
            )
        }


      </div>
    </div>
  );
};

export default Gratitude;
