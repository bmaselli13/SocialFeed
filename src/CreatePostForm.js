import React, { useState } from "react";

function CreatePostForm({ onNewPost }) {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState(""); // New state for the author

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && body && author) {
      // Ensure author is also provided
      onNewPost({ name, body, author, status: "" });
      setName("");
      setBody("");
      setAuthor(""); // Reset author after post submission
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Author: </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)} // Update the author state on change
            placeholder="Enter author's name"
          />
        </div>
        <div>
          <label>Post Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter post name"
          />
        </div>
        <div>
          <label>Post Body: </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter post content"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePostForm;
