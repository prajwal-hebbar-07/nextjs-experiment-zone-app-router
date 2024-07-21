import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post name="Prajwal Hebbar A S" info="Test Component" />
      <Post name="Subramanya Prabhu U S" info="Reusable Component" />
    </ul>
  );
}
export default PostsList;
