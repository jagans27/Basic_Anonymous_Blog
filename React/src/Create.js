import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [pending, setPending] = useState(true);
  const history = useHistory();

    const handleSubmit = (e ) => {
        e.preventDefault();
        setPending(false);
        
        const blog = {title,body,author}
        setAuthor("mario");
        setTitle("");
        setBody("");

        fetch("http://localhost:8081/api/addBlog",{
            method : "POST",
            headers : { 'Content-Type': 'application/json'},
            body:JSON.stringify(blog)
        }).then((response) => {
            console.log("new blog was added")
            setPending(true)
            history.push("/")
        })
        
    }
  
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
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
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {pending && <button>Add Blog</button>}
        {!pending && <button disabled>Add Blog....</button>}
      </form>
    </div>
  );
}
 
export default Create;