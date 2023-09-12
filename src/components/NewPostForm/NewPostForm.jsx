import React, { useState } from "react";
import "./NewPostForm.css";

function NewPostForm({ onPostSubmit }) {
  // State to store user input. Initially an empty string
  const [userName, setUserName] = useState("");
  const [postText, setPostText] = useState("");

  // Function to handle post submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing when the form is submitted

    // If the user's name and the post text are not both empty, then create a new post with the user's name as name and the post text as body
    if (userName !== "" && postText !== "") {
      const newPost = {
        name: userName,
        body: postText,
      };

      // Call the onPostSubmit function passed as a prop above in NewPostForm function
      onPostSubmit(newPost);

      // Clear the form fields otherwise what I typed in still in the form after submission
      setUserName("");
      setPostText("");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>
            Your Name:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="flex-item"
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Your Post:
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="flex-item"
            ></textarea>
          </label>
        </div>
        <button type="submit" className="flex-item">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewPostForm;
