import classes from "./Post.module.css";

function Post(props) {
  return (
    <div className={classes.post}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.info}>{props.info}</p>
    </div>
  );
}
export default Post;
