
import BlogList from "./BlogList";
import UserFetch from "./useFetch";

const Home = () => {

  const {blogs,isLoading,errorMessage,setBlogs} = UserFetch("http://localhost:8081/api/getBlog")

  /*
   const handleDelete = (id) => {
     const remainBlogs = blogs.filter((blog) => blog.id !== id);
     setBlogs(remainBlogs);
   };
   */

  return (
    <div className="Home">
      {errorMessage && <h2>{errorMessage}</h2>}
      {isLoading && <h2>Loading...</h2>}

      {/* {blogs && (<BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>)} */}
      {blogs && (<BlogList blogs={blogs} title="All Blogs"/>)}
      
    </div>
  );
};

export default Home;
