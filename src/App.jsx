import React, { useState } from "react";
import PostList from "./components/PostList/PostList";
import CreatePostForm from "./components/CreatePostForm/CreatePostForm";

const App = () => {
  const [posts, setPosts] = useState([]);

  const addNewPost = (newPost) => {
    const postObject = {
      id: Date.now(),
      author: newPost.author,
      body: newPost.body,
      likes: 0,
      dislikes: 0,
    };
    setPosts([...posts, postObject]);
  };

  return (
    <div className="App">
      <CreatePostForm onPostSubmit={addNewPost} />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
