import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Update = () => {
  // @ts-ignore
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [pending, setPending] = useState(true);
  const history = useHistory();

  const handleUpdate = (e) => {
    e.preventDefault();
    setPending(false);

    const blog = { title, body, author };

    console.log(id+" updating..")

    fetch("http://localhost:8081/api/updateById/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("blog was updated");
      setPending(true);
      history.goBack();
    });
  };

  return (
    <div className="create">

      <form onSubmit={handleUpdate}>
      <h2>Update your blogs</h2>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {pending && <a className="button-view" onClick={ handleUpdate}>Updating Blog</a>}
        {!pending && <a aria-disabled>Updating Blog....</a>}
      </form>
    </div>
  );
};

export default Update;
