import React, { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

function PostList() {
  const [posts, setPosts] = useState([]);
  const { showBoundary } = useErrorBoundary();
  useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicde.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        showBoundary(err);
      }
    }

    getPosts();
  }, []);

  return (
    <div>
      <h2>Posts:</h2>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;