import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost() {
  const [enteredInfo, setEnteredInfo] = useState("");

  function changeInfoHandler(event) {
    setEnteredInfo(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="info">Info</label>
        <textarea id="info" rows={3} onChange={changeInfoHandler} required />
      </p>
      <p>{enteredInfo}</p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}
export default NewPost;
