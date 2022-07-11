import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import "./Post.css";

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://hasibmania-server.herokuapp.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data[0]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner-grow loading" role="status">
          <span className="sr-only loading">Loading...</span>
        </div>
        <div className="spinner-grow loading" role="status">
          <span className="sr-only loading">Loading...</span>
        </div>
        <div className="spinner-grow loading" role="status">
          <span className="sr-only loading">Loading...</span>
        </div>{" "}
        <br />
        <h3 className="loading-text">LOADING...</h3>
      </div>
    );
  }

  if (post?._id) {
    return (
      <div className="post-template">
        <div className="section">
          <div className="inner">
            <h3 className="post-template-title">{post.title} </h3>
            <div className="category">
              <p>{post.category}</p>
              <p>পোস্ট নংঃ {post.postNo}</p>
              <p>{post.date}</p>
            </div>{" "}
            <hr />
          </div>
        </div>
        <div className="section">
          <div className="details post-details">
            <br /> <br />
            {/* paragraph 01  */}
            {post.para01 && (
              <div className="para">
                <p>{post.para01}</p> <br />
              </div>
            )}
            {/* banner image  */}
            {post.banner && (
              <div className="inner">
                <img className="post-template-image" src={post.banner} alt="" />{" "}
                <br /> <br /> <br />
              </div>
            )}
            {/* paragraph 02 */}
            {post.para02 && (
              <div className="para">
                <p>{post.para02}</p> <br />
              </div>
            )}
            {/* paragraph 03  */}
            {post.para03 && (
              <div className="para">
                <p>{post.para03}</p> <br />
              </div>
            )}
            {/*  image 01 */}
            {post.img01 && (
              <div className="inner">
                <img className="post-template-image" src={post.img01} alt="" />{" "}
                <br /> <br /> <br />
              </div>
            )}
            {/* paragraph 04  */}
            {post.para04 && (
              <div className="para">
                <p>{post.para04}</p> <br />
              </div>
            )}
            {/* image 02 */}
            {post.img02 && (
              <div className="inner">
                <img className="post-template-image" src={post.img02} alt="" />{" "}
                <br /> <br /> <br />
              </div>
            )}
            {/* paragraph 05  */}
            {post.para05 && (
              <div className="para">
                <p>{post.para05}</p> <br />
              </div>
            )}
            {/* image 03 */}
            {post.img03 && (
              <div className="inner">
                <img className="post-template-image" src={post.img03} alt="" />{" "}
                <br /> <br /> <br />
              </div>
            )}
            {/* image 04 */}
            {post.img04 && (
              <div className="inner">
                <img className="post-template-image" src={post.img04} alt="" />{" "}
                <br /> <br /> <br />
              </div>
            )}
            {/* paragraph 06  */}
            {post.para06 && (
              <div className="para">
                <p>{post.para06}</p> <br />
              </div>
            )}
            {/* image 05 */}
            {post.img05 && (
              <div className="inner">
                <img className="post-template-image" src={post.img05} alt="" />{" "}
                <br /> <br /> <br />
              </div>
            )}
            {/* image 06 */}
            {post.img06 && (
              <div className="inner">
                <img className="post-template-image" src={post.img06} alt="" />{" "}
                <br /> <br /> <br />
              </div>
            )}
            {/* paragraph 07  */}
            {post.para07 && (
              <div className="para">
                <p>{post.para07}</p> <br />
              </div>
            )}
            {/* image 07 */}
            {post.img07 && (
              <div className="inner">
                <img className="post-template-image" src={post.img07} alt="" />{" "}
                <br /> <br /> <br />
              </div>
            )}
            {/* paragraph 08  */}
            {post.para08 && (
              <div className="para">
                <p>{post.para08}</p> <br />
              </div>
            )}
            {/* image 08*/}
            {post.img08 && (
              <div className="inner">
                <img className="post-template-image" src={post.img08} alt="" />{" "}
                <br /> <br /> <br />
              </div>
            )}
            {/* paragraph 09  */}
            {post.para09 && (
              <div className="para">
                <p>{post.para09}</p> <br />
              </div>
            )}
            {/* image 09 */}
            {post.img09 && (
              <div className="inner">
                <img className="post-template-image" src={post.img09} alt="" />{" "}
                <br /> <br /> <br />
              </div>
            )}
            {/* paragraph 10 */}
            {post.para10 && (
              <div className="para">
                <p>{post.para10}</p> <br />
              </div>
            )}
            {/* image 10 */}
            {post.img10 && (
              <div className="inner">
                <img className="post-template-image" src={post.img10} alt="" />{" "}
                <br /> <br /> <br />
              </div>
            )}
            {/* paragraph 11 */}
            {post.para11 && (
              <div className="para">
                <p>{post.para11}</p> <br />
              </div>
            )}
            {/* paragraph 12 */}
            {post.para12 && (
              <div className="para">
                <p>{post.para12}</p> <br />
              </div>
            )}
            {/* paragraph 13 */}
            {post.para13 && (
              <div className="para">
                <p>{post.para13}</p> <br />
              </div>
            )}
            {/* paragraph 14 */}
            {post.para14 && (
              <div className="para">
                <p>{post.para14}</p> <br />
              </div>
            )}
            {/* paragraph 15 */}
            {post.para15 && (
              <div className="para">
                <p>{post.para15}</p> <br />
              </div>
            )}
            {/* paragraph 16 */}
            {post.para16 && (
              <div className="para">
                <p>{post.para16}</p> <br />
              </div>
            )}
            {/* paragraph 17 */}
            {post.para17 && (
              <div className="para">
                <p>{post.para17}</p> <br />
              </div>
            )}
            {/* paragraph 18 */}
            {post.para18 && (
              <div className="para">
                <p>{post.para18}</p> <br />
              </div>
            )}
            {/* paragraph 19 */}
            {post.para19 && (
              <div className="para">
                <p>{post.para19}</p> <br />
              </div>
            )}
            {/* paragraph 20 */}
            {post.para20 && (
              <div className="para">
                <p>{post.para20}</p> <br />
              </div>
            )}
            {/* paragraph 21 */}
            {post.para21 && (
              <div className="para">
                <p>{post.para21}</p> <br />
              </div>
            )}
            {/* paragraph 22 */}
            {post.para22 && (
              <div className="para">
                <p>{post.para22}</p> <br />
              </div>
            )}
            {/* paragraph 23 */}
            {post.para23 && (
              <div className="para">
                <p>{post.para23}</p> <br />
              </div>
            )}
            {/* paragraph 24 */}
            {post.para24 && (
              <div className="para">
                <p>{post.para24}</p> <br />
              </div>
            )}
            {/* paragraph 25 */}
            {post.para25 && (
              <div className="para">
                <p>{post.para25}</p> <br />
              </div>
            )}
            {/* paragraph 26 */}
            {post.para26 && (
              <div className="para">
                <p>{post.para26}</p> <br />
              </div>
            )}
            {/* paragraph 27 */}
            {post.para27 && (
              <div className="para">
                <p>{post.para27}</p> <br />
              </div>
            )}
            {/* paragraph 28 */}
            {post.para28 && (
              <div className="para">
                <p>{post.para28}</p> <br />
              </div>
            )}
            {/* paragraph 29*/}
            {post.para29 && (
              <div className="para">
                <p>{post.para29}</p> <br />
              </div>
            )}
            {/* paragraph 30 */}
            {post.para30 && (
              <div className="para">
                <p>{post.para30}</p> <br />
              </div>
            )}
            {/* paragraph 31 */}
            {post.para31 && (
              <div className="para">
                <p>{post.para31}</p> <br />
              </div>
            )}
            {/* paragraph 32 */}
            {post.para32 && (
              <div className="para">
                <p>{post.para32}</p> <br />
              </div>
            )}
            {/* paragraph 33 */}
            {post.para33 && (
              <div className="para">
                <p>{post.para33}</p> <br />
              </div>
            )}
            {/* paragraph 34 */}
            {post.para34 && (
              <div className="para">
                <p>{post.para34}</p> <br />
              </div>
            )}
            {/* paragraph 35 */}
            {post.para35 && (
              <div className="para">
                <p>{post.para35}</p> <br />
              </div>
            )}
            {/* paragraph 36 */}
            {post.para36 && (
              <div className="para">
                <p>{post.para36}</p> <br />
              </div>
            )}
            {/* paragraph 37 */}
            {post.para37 && (
              <div className="para">
                <p>{post.para37}</p> <br />
              </div>
            )}
            {/* paragraph 38*/}
            {post.para38 && (
              <div className="para">
                <p>{post.para38}</p> <br />
              </div>
            )}
            {/* paragraph 39*/}
            {post.para39 && (
              <div className="para">
                <p>{post.para39}</p> <br />
              </div>
            )}
            {/* paragraph 40 */}
            {post.para40 && (
              <div className="para">
                <p>{post.para40}</p> <br />
              </div>
            )}
            {/* paragraph 41 */}
            {post.para41 && (
              <div className="para">
                <p>{post.para41}</p> <br />
              </div>
            )}
            {/* paragraph 42 */}
            {post.para42 && (
              <div className="para">
                <p>{post.para42}</p> <br />
              </div>
            )}
            {/* paragraph 43 */}
            {post.para43 && (
              <div className="para">
                <p>{post.para43}</p> <br />
              </div>
            )}
            {/* paragraph 44 */}
            {post.para44 && (
              <div className="para">
                <p>{post.para44}</p> <br />
              </div>
            )}
            {/* paragraph 45 */}
            {post.para45 && (
              <div className="para">
                <p>{post.para45}</p> <br />
              </div>
            )}
            {/* paragraph 46 */}
            {post.para46 && (
              <div className="para">
                <p>{post.para46}</p> <br />
              </div>
            )}
            {/* paragraph 47 */}
            {post.para47 && (
              <div className="para">
                <p>{post.para47}</p> <br />
              </div>
            )}
            {/* paragraph 48 */}
            {post.para48 && (
              <div className="para">
                <p>{post.para48}</p> <br />
              </div>
            )}
            {/* paragraph 49 */}
            {post.para49 && (
              <div className="para">
                <p>{post.para49}</p> <br />
              </div>
            )}
            {/* paragraph 50 */}
            {post.para50 && (
              <div className="para">
                <p>{post.para50}</p> <br />
              </div>
            )}
            {/* paragraph 51 */}
            {post.para51 && (
              <div className="para">
                <p>{post.para51}</p> <br />
              </div>
            )}
            {/* paragraph 52 */}
            {post.para52 && (
              <div className="para">
                <p>{post.para52}</p> <br />
              </div>
            )}
            {/* paragraph 53 */}
            {post.para53 && (
              <div className="para">
                <p>{post.para53}</p> <br />
              </div>
            )}
            {/* paragraph 54 */}
            {post.para54 && (
              <div className="para">
                <p>{post.para54}</p> <br />
              </div>
            )}
            {/* paragraph 55 */}
            {post.para55 && (
              <div className="para">
                <p>{post.para55}</p> <br />
              </div>
            )}
            {/* paragraph 56 */}
            {post.para56 && (
              <div className="para">
                <p>{post.para56}</p> <br />
              </div>
            )}
            {/* paragraph 57 */}
            {post.para57 && (
              <div className="para">
                <p>{post.para57}</p> <br />
              </div>
            )}
            {/* paragraph 58 */}
            {post.para58 && (
              <div className="para">
                <p>{post.para58}</p> <br />
              </div>
            )}
            {/* paragraph 59 */}
            {post.para59 && (
              <div className="para">
                <p>{post.para59}</p> <br />
              </div>
            )}
            {/* paragraph 60 */}
            {post.para60 && (
              <div className="para writer">
                <p>{post.para60}</p> <br />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (!post?.id) {
    return <NotFound></NotFound>;
  }
};

export default Post;
