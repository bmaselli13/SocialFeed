import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post">
      <h3>{post.name}</h3>
      <p>{post.body}</p>
      <div>
        Liked: {post.liked ? "Yes" : "No"}
        Disliked: {post.disliked ? "Yes" : "No"}
      </div>
    </div>
  );
};

export default Post;
