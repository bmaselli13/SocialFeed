import React from "react";
import Post from "./Post";

const SocialFeed = ({ posts }) => {
  return (
    <div>
      <header>
        <h1>SocialFeed</h1>
      </header>
      <main>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </main>
    </div>
  );
};

export default SocialFeed;
