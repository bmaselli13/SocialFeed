import React, { useState } from "react";
import "./App.css";
import NewPostForm from "./components/NewPostForm/NewPostForm";
import PostList from "./components/PostList/PostList";

function App() {
  // Used to store lists of posts. Updates using the setPosts function as new posts are added
  const [posts, setPosts] = useState([]);

  // Function to add a new post
  const handleNewPost = (newPost) => {
    // add the new post to the posts array
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SocialFeed</h1>
      </header>
      {/* Render the NewPostForm and pass the handleNewPost function */}
      <NewPostForm onPostSubmit={handleNewPost} />
      {/* Render the list of posts */}
      <PostList posts={posts} />
    </div>
  );
}

export default App;
