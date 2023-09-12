import React from "react";

function Post({ post }) {
  // Check if post or post.name is undefined. If so, return null and nothing is rendered
  if (!post.name || !post) {
    return null;
  }
}

export default Post;
