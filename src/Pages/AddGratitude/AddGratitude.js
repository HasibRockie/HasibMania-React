/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./AddGratitude.css";

const AddGratitude = () => {
  const nameRef = useRef();
  const postNoRef = useRef();
  const relationRef = useRef();
  const imgBannerRef = useRef();
  const msgRef = useRef();

  //   const [object, setObject] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const CreatePost = (e) => {
    e.preventDefault();

    fetch("http://hasibmania-server.herokuapp.com/gratitude", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        number: postNoRef.current.value,
        relation: relationRef.current.value,
        image: imgBannerRef.current.value,
        message: msgRef.current.value,
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
      <h1 className="head-newpost">Dedicate A message</h1>
      <Form onSubmit={CreatePost}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="No. of Dedication"
            ref={postNoRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Name of the Person"
            ref={nameRef}
          />
        </Form.Group>

        <br />
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Relation with that Person "
            ref={relationRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            ref={imgBannerRef}
            type="text"
            placeholder="image (500 X 500)"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Dedicated Message </Form.Label>
          <Form.Control ref={msgRef} as="textarea" rows={10} />
        </Form.Group>

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

export default AddGratitude;
