import React from "react";
import Post from "./Post";

const SocialFeed = ({ posts, onLike, onDislike }) => {
  return (
    <div>
      <header>
        <h1>SocialFeed</h1>
      </header>
      <main>
        {posts.map((post, index) => (
          <Post key={index} post={post} onLike={onLike} onDislike={onDislike} />
        ))}
      </main>
    </div>
  );
};

export default SocialFeed;
