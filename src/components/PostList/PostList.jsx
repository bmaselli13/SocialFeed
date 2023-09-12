import React from "react";
import Post from "../Post/Post";

function PostList({ posts, onLike, onDislike }) {
  return (
    <div className="post-list">
      {/* Use the map function to iterate through each item in the posts array */}
      {posts.map((post, index) => (
        <Post key={index} post={post} onLike={onLike} onDislike={onDislike} />
      ))}
    </div>
  );
}

export default PostList;
