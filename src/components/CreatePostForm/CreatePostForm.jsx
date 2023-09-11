import React, { useState } from "react";

const CreatePostForm = ({ onPostSubmit }) => {
  const [author, setAuthor] = useState(""); // state variable for the user's name input field
  const [body, setBody] = useState(""); // state variable for the post body input field

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author && body) {
      // Ensure both fields have values
      onPostSubmit({ author, body }); // Call the prop function passed down from App
      setAuthor(""); // Reset value
      setBody(""); // Reset value
    } else {
      alert("Both fields are required!");
    }
  };

  return (
    <div className="create-post-form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="author">Name:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="body">Post:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="What's on your mind?"
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
