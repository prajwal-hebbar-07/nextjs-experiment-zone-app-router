import classes from "./NewPost.module.css";

function NewPost({ onInfoChange, onNameChange, onCancel }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="info">Info</label>
        <textarea id="info" rows={3} onChange={onInfoChange} required />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={onNameChange} required />
      </p>
      <p>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}
export default NewPost;
