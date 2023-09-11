import React, { useState } from "react";

const Post = ({ name, body }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // Function to handle the "like" action
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Function to handle the "dislike" action
  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="post">
      <h3>{name}</h3>
      <p>{body}</p>
      <div className="reaction-buttons">
        <button onClick={handleLike}>👍 Like ({likes})</button>
        <button onClick={handleDislike}>👎 Dislike ({dislikes})</button>
      </div>
    </div>
  );
};

export default Post;
