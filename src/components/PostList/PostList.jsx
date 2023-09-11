import React from "react";
import Post from "../Post/Post";
import "./PostList.css";

const PostList = ({ posts, onLike, onDislike }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post
          key={post.id}
          author={post.author}
          body={post.body}
          postId={post.id}
          postStatus={post.status}
          onLike={onLike}
          onDislike={onDislike}
        />
      ))}
    </div>
  );
};

export default PostList;
