import { Link } from "react-router-dom";
import classes from "./Post.module.css";

function Post({ id, name, info }) {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.name}>{name}</p>
        <p className={classes.info}>{info}</p>
      </Link>
    </li>
  );
}
export default Post;
