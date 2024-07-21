import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import { useState } from "react";

function PostsList() {
  const [enteredInfo, setEnteredInfo] = useState("Test Component");
  const [enteredName, setEnteredName] = useState("Prajwal Hebbar A S");

  function infoChangeHandler(event) {
    setEnteredInfo(event.target.value);
  }

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  return (
    <>
      <NewPost
        onInfoChange={infoChangeHandler}
        onNameChange={nameChangeHandler}
      />
      <ul className={classes.posts}>
        <Post name={enteredName} info={enteredInfo} />
        <Post name="Subramanya Prabhu U S" info="Reusable Component" />
      </ul>
    </>
  );
}
export default PostsList;
