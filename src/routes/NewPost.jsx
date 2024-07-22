import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

function NewPost({ onAddPost }) {
  const [enteredInfo, setEnteredInfo] = useState("Test Component");
  const [enteredName, setEnteredName] = useState("Prajwal Hebbar A S");

  function infoChangeHandler(event) {
    setEnteredInfo(event.target.value);
  }

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      info: enteredInfo,
      name: enteredName,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="info">Info</label>
          <textarea id="info" rows={3} onChange={infoChangeHandler} required />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" onChange={nameChangeHandler} required />
        </p>
        <p className={classes.actions}>
          <Link type="button" to="..">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}
export default NewPost;
