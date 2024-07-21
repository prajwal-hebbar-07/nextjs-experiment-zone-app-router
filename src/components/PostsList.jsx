import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post name="Prajwal Hebbar A S" info="Test Component" />
        <Post name="Subramanya Prabhu U S" info="Reusable Component" />
      </ul>
    </>
  );
}
export default PostsList;
