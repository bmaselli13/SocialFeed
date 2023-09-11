import React, { useState } from "react";
import "./App.css";
import Post from "./Post";
import CreatePostForm from "./CreatePostForm";

function App() {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleLike = (likedPost) => {
    const updatedPosts = posts.map((post) =>
      post === likedPost
        ? { ...post, status: post.status === "like" ? "" : "like" }
        : post
    );
    setPosts(updatedPosts);
  };

  const handleDislike = (dislikedPost) => {
    const updatedPosts = posts.map((post) =>
      post === dislikedPost
        ? { ...post, status: post.status === "dislike" ? "" : "dislike" }
        : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SocialFeed</h1>
      </header>

      <CreatePostForm onNewPost={handleNewPost} />

      {posts.map((post, index) => (
        <Post
          key={index}
          post={post}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      ))}
    </div>
  );
}

export default App;
