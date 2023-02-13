import { Link, useParams } from "react-router-dom";
import UserFetch from "./useFetch";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  // @ts-ignore
  const { id } = useParams();
  const { blogs, isLoading, errorMessage } = UserFetch(
    "http://localhost:8081/api/getBlogById/" + id
  );

  const [pending, setPending] = useState(true);
  const history = useHistory();

  const handleDelete = () => {
    setPending(false);

    fetch("http://localhost:8081/api/delete/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      console.log("Blog deleted");
      setPending(true);
      history.push("/");
    });
  };

  return (
    <div className="blog-preview">
      <h3>{isLoading && "Loading..."}</h3>
      {errorMessage && <h4>{errorMessage}</h4>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <h3>~<em>{blogs.author}</em></h3>
          <p className="blog-preview-p">{blogs.body}</p>

          {pending && <a className="button-view" onClick={handleDelete}>Delete</a>}
          {!pending && <div>{<a className="button-view" aria-disabled>Deleting...</a>}</div>}
          {<Link className="button-view" to={`/update/${blogs.id}`}>Update</Link>}
          
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

