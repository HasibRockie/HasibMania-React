/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./NewPost.css";

const newPost = () => {
  const titleRef = useRef();
  const categoryRef = useRef();
  const postNoRef = useRef();
  const dateRef = useRef();
  const imgBannerRef = useRef();
  const img01Ref = useRef();
  const img02Ref = useRef();
  const img03Ref = useRef();
  const img04Ref = useRef();
  const img05Ref = useRef();
  const img06Ref = useRef();
  const img07Ref = useRef();
  const img08Ref = useRef();
  const img09Ref = useRef();
  const img10Ref = useRef();
  const para01Ref = useRef();
  const para02Ref = useRef();
  const para03Ref = useRef();
  const para04Ref = useRef();
  const para05Ref = useRef();
  const para06Ref = useRef();
  const para07Ref = useRef();
  const para08Ref = useRef();
  const para09Ref = useRef();
  const para10Ref = useRef();
  const para11Ref = useRef();
  const para12Ref = useRef();
  const para13Ref = useRef();
  const para14Ref = useRef();
  const para15Ref = useRef();
  const para16Ref = useRef();
  const para17Ref = useRef();
  const para18Ref = useRef();
  const para19Ref = useRef();
  const para20Ref = useRef();
  const para21Ref = useRef();
  const para22Ref = useRef();
  const para23Ref = useRef();
  const para24Ref = useRef();
  const para25Ref = useRef();
  const para26Ref = useRef();
  const para27Ref = useRef();
  const para28Ref = useRef();
  const para29Ref = useRef();
  const para30Ref = useRef();
  const para31Ref = useRef();
  const para32Ref = useRef();
  const para33Ref = useRef();
  const para34Ref = useRef();
  const para35Ref = useRef();
  const para36Ref = useRef();
  const para37Ref = useRef();
  const para38Ref = useRef();
  const para39Ref = useRef();
  const para40Ref = useRef();
  const para41Ref = useRef();
  const para42Ref = useRef();
  const para43Ref = useRef();
  const para44Ref = useRef();
  const para45Ref = useRef();
  const para46Ref = useRef();
  const para47Ref = useRef();
  const para48Ref = useRef();
  const para49Ref = useRef();
  const para50Ref = useRef();
  const para51Ref = useRef();
  const para52Ref = useRef();
  const para53Ref = useRef();
  const para54Ref = useRef();
  const para55Ref = useRef();
  const para56Ref = useRef();
  const para57Ref = useRef();
  const para58Ref = useRef();
  const para59Ref = useRef();
  const para60Ref = useRef();

  //   const [object, setObject] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const CreatePost = (e) => {
    e.preventDefault();

    fetch("http://hasibmania-server.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: titleRef.current.value,
        category: categoryRef.current.value,
        postNo: postNoRef.current.value,
        date: dateRef.current.value,
        banner: imgBannerRef.current.value,
        img01: img01Ref.current.value,
        img02: img02Ref.current.value,
        img03: img03Ref.current.value,
        img04: img04Ref.current.value,
        img05: img05Ref.current.value,
        img06: img06Ref.current.value,
        img07: img07Ref.current.value,
        img08: img08Ref.current.value,
        img09: img09Ref.current.value,
        img10: img10Ref.current.value,
        para01: para01Ref.current.value,
        para02: para02Ref.current.value,
        para03: para03Ref.current.value,
        para04: para04Ref.current.value,
        para05: para05Ref.current.value,
        para06: para06Ref.current.value,
        para07: para07Ref.current.value,
        para08: para08Ref.current.value,
        para09: para09Ref.current.value,
        para10: para10Ref.current.value,
        para11: para11Ref.current.value,
        para12: para12Ref.current.value,
        para13: para13Ref.current.value,
        para14: para14Ref.current.value,
        para15: para15Ref.current.value,
        para16: para16Ref.current.value,
        para17: para17Ref.current.value,
        para18: para18Ref.current.value,
        para19: para19Ref.current.value,
        para20: para20Ref.current.value,
        para21: para21Ref.current.value,
        para22: para22Ref.current.value,
        para23: para23Ref.current.value,
        para24: para24Ref.current.value,
        para25: para25Ref.current.value,
        para26: para26Ref.current.value,
        para27: para27Ref.current.value,
        para28: para28Ref.current.value,
        para29: para29Ref.current.value,
        para30: para30Ref.current.value,
        para31: para31Ref.current.value,
        para32: para32Ref.current.value,
        para33: para33Ref.current.value,
        para34: para34Ref.current.value,
        para35: para35Ref.current.value,
        para36: para36Ref.current.value,
        para37: para37Ref.current.value,
        para38: para38Ref.current.value,
        para39: para39Ref.current.value,
        para40: para40Ref.current.value,
        para41: para41Ref.current.value,
        para42: para42Ref.current.value,
        para43: para43Ref.current.value,
        para44: para44Ref.current.value,
        para45: para45Ref.current.value,
        para46: para46Ref.current.value,
        para47: para47Ref.current.value,
        para48: para48Ref.current.value,
        para49: para49Ref.current.value,
        para50: para50Ref.current.value,
        para51: para51Ref.current.value,
        para52: para52Ref.current.value,
        para53: para53Ref.current.value,
        para54: para54Ref.current.value,
        para55: para55Ref.current.value,
        para56: para56Ref.current.value,
        para57: para57Ref.current.value,
        para58: para58Ref.current.value,
        para59: para59Ref.current.value,
        para60: para60Ref.current.value,
      }),
    })
      .then((res) => {
        setSuccess(true);
        setError(false);
        e.target.reset();
      })
      .catch((err) => {
        console.log("error");
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <div className="newpost">
      <h1 className="head-newpost">Create New Post</h1>
      <Form onSubmit={CreatePost}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="post title" ref={titleRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="post no" ref={postNoRef} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select aria-label="Default select example" ref={categoryRef}>
            <option>Category</option>
            <option value="ব্যক্তিগত">ব্যক্তিগত </option>
            <option value="ধর্মীয়">ধর্মীয়</option>
            <option value="ফিকশন">ফিকশন </option>
          </Form.Select>
        </Form.Group>{" "}
        <br />
        <Form.Group className="mb-3">
          <Form.Control type="date" placeholder="Post date" ref={dateRef} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            ref={imgBannerRef}
            type="text"
            placeholder=" banner image drive link"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            ref={img01Ref}
            type="text"
            placeholder="image 01 drive link"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            ref={img02Ref}
            type="text"
            placeholder="image 02 drive link"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            ref={img03Ref}
            type="text"
            placeholder="image 03 drive link"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            ref={img04Ref}
            type="text"
            placeholder="image 04 drive link"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            ref={img05Ref}
            type="text"
            placeholder="image 05 drive link"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            ref={img06Ref}
            type="text"
            placeholder="image 06 drive link"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            ref={img07Ref}
            type="text"
            placeholder="image 07 drive link"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            ref={img08Ref}
            type="text"
            placeholder="image 08 drive link"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            ref={img09Ref}
            type="text"
            placeholder="image 09 drive link"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            ref={img10Ref}
            type="text"
            placeholder="image 10 drive link"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 01</Form.Label>
          <Form.Control ref={para01Ref} as="textarea" rows={7} />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 01</Form.Label>
          <Form.Control ref={para02Ref}  as="textarea" rows={7} />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 02</Form.Label>
          <Form.Control ref={para02Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 03</Form.Label>
          <Form.Control ref={para03Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 04</Form.Label>
          <Form.Control ref={para04Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 05</Form.Label>
          <Form.Control ref={para05Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 06</Form.Label>
          <Form.Control ref={para06Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 07</Form.Label>
          <Form.Control ref={para07Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 08</Form.Label>
          <Form.Control ref={para08Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 09</Form.Label>
          <Form.Control ref={para09Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 10</Form.Label>
          <Form.Control ref={para10Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 11</Form.Label>
          <Form.Control ref={para11Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 12</Form.Label>
          <Form.Control ref={para12Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 13</Form.Label>
          <Form.Control ref={para13Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 14</Form.Label>
          <Form.Control ref={para14Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 15</Form.Label>
          <Form.Control ref={para15Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 16</Form.Label>
          <Form.Control ref={para16Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 17</Form.Label>
          <Form.Control ref={para17Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 18</Form.Label>
          <Form.Control ref={para18Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 19</Form.Label>
          <Form.Control ref={para19Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 20</Form.Label>
          <Form.Control ref={para20Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 21</Form.Label>
          <Form.Control ref={para21Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 22</Form.Label>
          <Form.Control ref={para22Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 23</Form.Label>
          <Form.Control ref={para23Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 24</Form.Label>
          <Form.Control ref={para24Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 25</Form.Label>
          <Form.Control ref={para25Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 26</Form.Label>
          <Form.Control ref={para26Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 27</Form.Label>
          <Form.Control ref={para27Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 28</Form.Label>
          <Form.Control ref={para28Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 29</Form.Label>
          <Form.Control ref={para29Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 30</Form.Label>
          <Form.Control ref={para30Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 31</Form.Label>
          <Form.Control ref={para31Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 32</Form.Label>
          <Form.Control ref={para32Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 33</Form.Label>
          <Form.Control ref={para33Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 34</Form.Label>
          <Form.Control ref={para34Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 35</Form.Label>
          <Form.Control ref={para35Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 36</Form.Label>
          <Form.Control ref={para36Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 37</Form.Label>
          <Form.Control ref={para37Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 38</Form.Label>
          <Form.Control ref={para38Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 39</Form.Label>
          <Form.Control ref={para39Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 40</Form.Label>
          <Form.Control ref={para40Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 41</Form.Label>
          <Form.Control ref={para41Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 42</Form.Label>
          <Form.Control ref={para42Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 43</Form.Label>
          <Form.Control ref={para43Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 44</Form.Label>
          <Form.Control ref={para44Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 45</Form.Label>
          <Form.Control ref={para45Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 46</Form.Label>
          <Form.Control ref={para46Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 47</Form.Label>
          <Form.Control ref={para47Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 48</Form.Label>
          <Form.Control ref={para48Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 49</Form.Label>
          <Form.Control ref={para49Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 50</Form.Label>
          <Form.Control ref={para50Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 51</Form.Label>
          <Form.Control ref={para51Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 52</Form.Label>
          <Form.Control ref={para52Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 53</Form.Label>
          <Form.Control ref={para53Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 54</Form.Label>
          <Form.Control ref={para54Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 55</Form.Label>
          <Form.Control ref={para55Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 56</Form.Label>
          <Form.Control ref={para56Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 57</Form.Label>
          <Form.Control ref={para57Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 58</Form.Label>
          <Form.Control ref={para58Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 59</Form.Label>
          <Form.Control ref={para59Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Para 60</Form.Label>
          <Form.Control ref={para60Ref} as="textarea" rows={7} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Are you sure to post this? </Form.Label>
          <Form.Control
            type="text"
            placeholder="type 'Yes' to confirm"
            required
          />
        </Form.Group>{" "}
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {success && (
          <p className="green-notification">Post Added Successfully!!</p>
        )}
        {error && (
          <p className="red-notification">
            Something Error! Please, Try Again!
          </p>
        )}
      </Form>
    </div>
  );
};

export default newPost;
