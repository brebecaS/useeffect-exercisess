import { useState, useEffect } from "react";
const useExemplu2Hook = () => {
  const [posts, setPosts] = useState([]);
  const [shouldLoadPosts, setShouldLoadPosts] = useState(false);

  useEffect(() => {
    if (shouldLoadPosts === true)
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((decodedData) => {
          setPosts(decodedData);
        })
        .catch((error) => console.error(error));
  }, [shouldLoadPosts]);

  return {
    setShouldLoadPosts,
    posts,
  };
};
export default useExemplu2Hook;
