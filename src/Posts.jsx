import { useEffect, useState } from "react";
import "./Posts.css";
import Post from "./Post";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="posts">
      <h3>Posts</h3>
      {
        posts.map(post=><Post allPost={post}></Post>)
      }
    </div>
  );
}
