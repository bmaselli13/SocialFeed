import React from "react";

function Post({ post, onLike, onDislike }) {
  return (
    <div className="post">
      <h2>{post.name}</h2>
      <p>{post.body}</p>
      <button
        className={post.status === "like" ? "liked" : ""}
        onClick={() => onLike(post)}
      >
        Like
      </button>
      <button
        className={post.status === "dislike" ? "disliked" : ""}
        onClick={() => onDislike(post)}
      >
        Dislike
      </button>
    </div>
  );
}

export default Post;
