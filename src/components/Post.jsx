import classes from "./Post.module.css";

function Post({ name, info }) {
  return (
    <li className={classes.post}>
      <p className={classes.name}>{name}</p>
      <p className={classes.info}>{info}</p>
    </li>
  );
}
export default Post;
