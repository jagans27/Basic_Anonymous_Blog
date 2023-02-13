import { useEffect, useState } from "react";

const UserFetch = (url) => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              console.log(res.statusText)
              if(res.statusText === "Not Found"){
                throw Error("Data Not Found");
              }else if (!res.ok) {
                throw Error("Error in fetching data");
              }
              return res.json();
            })
            .then((blogs) => {
              setBlogs(blogs);
              setLoading(false);
            })
            .catch(error => {
              console.log("Error is "+error)
              setErrorMessage(error.message);
              setLoading(false)
            });

            return () => {
              console.log("error message");
            }

        }, 1000);
      }, [url]);

      return {blogs,isLoading,errorMessage}
}

export default UserFetch;