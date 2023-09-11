import React from "react";
import "./App.css";
import SocialFeed from "./components/SocialFeed";

const dummyPosts = [
  {
    name: "Brian M.",
    body: "Test Post",
    liked: true,
    disliked: false,
  },
  // ... add more dummy posts here
];

function App() {
  return (
    <div className="App">
      <SocialFeed posts={dummyPosts} />
    </div>
  );
}

export default App;
