import React from "react";

function PostList({ posts }) {
  return (
    <div className="post-list">
      {/* iterate over each item in the posts array */}
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2>{post.name}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
