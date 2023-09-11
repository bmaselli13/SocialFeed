import React from "react";

function Post({ post, onLike, onDislike }) {
  return (
    <div className="post">
      <h3>{post.name}</h3>
      <p>{post.body}</p>

      <button
        className={post.status === "like" ? "active" : ""}
        onClick={() => onLike(post)}
      >
        Like
      </button>

      <button
        className={post.status === "dislike" ? "dislike-active" : ""}
        onClick={() => onDislike(post)}
      >
        Dislike
      </button>
    </div>
  );
}

export default Post;
