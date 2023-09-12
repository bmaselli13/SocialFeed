import React, { useState } from "react";
import "./Post.css";

function Post({ post }) {
  // State to track whether the "Like" button has been clicked
  const [likeClicked, setLikeClicked] = useState(false);

  // State to track whether the "Dislike" button has been clicked
  const [dislikeClicked, setDislikeClicked] = useState(false);

  // Check if post or post.name is undefined
  if (!post || !post.name) {
    return null; // If undefined, return nothing
  }

  // Function to handle the "Like" button
  const handleLikeClick = () => {
    // Toggle the likeClicked state (change from true to false and vice versa)
    setLikeClicked(!likeClicked);
  };

  // Function to handle the "Dislike" button
  const handleDislikeClick = () => {
    // Toggle the dislikeClicked state
    setDislikeClicked(!dislikeClicked);
  };

  // Determine the class names for the buttons based on the state
  const likeButtonClass = `like-button ${likeClicked ? "liked" : ""}`;
  const dislikeButtonClass = `dislike-button ${
    dislikeClicked ? "disliked" : ""
  }`;

  return (
    <div className="post">
      <h2>{post.name}</h2>
      <p>{post.body}</p>
      {/* Button for "Like" */}
      <button className={likeButtonClass} onClick={handleLikeClick}>
        Like
      </button>
      {/* Button for "Dislike" */}
      <button className={dislikeButtonClass} onClick={handleDislikeClick}>
        Dislike
      </button>
    </div>
  );
}

export default Post;
