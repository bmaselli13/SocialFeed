import React, { useState } from "react";

function NewPostForm({ onPostSubmit }) {
  // State to store user input. Initially an empty string
  const [userName, setUserName] = useState("");
  const [postText, setPostText] = useState("");

  // Function to handle post submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing

    // If the user's name and the post text are not both empty, then create a new post with the user's name as name and the post text as body
    if (userName.trim() !== "" && postText.trim() !== "") {
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
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Your Post:
        <textarea
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        ></textarea>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewPostForm;
