import React, { useState } from "react";
import "./App.css";
import SocialFeed from "./components/SocialFeed";

const initialPosts = [
  {
    name: "Brian M",
    body: "I cannot wait for a vacation",
    status: "none",
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (targetPost) => {
    const updatedPosts = posts.map((post) => {
      if (post === targetPost) {
        return { ...post, status: post.status === "like" ? "none" : "like" };
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  const handleDislike = (targetPost) => {
    const updatedPosts = posts.map((post) => {
      if (post === targetPost) {
        return {
          ...post,
          status: post.status === "dislike" ? "none" : "dislike",
        };
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <SocialFeed posts={posts} onLike={handleLike} onDislike={handleDislike} />
    </div>
  );
}

export default App;
