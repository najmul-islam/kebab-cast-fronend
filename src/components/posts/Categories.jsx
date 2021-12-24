import React from "react";
import { usePosts } from "../../contexts/postsContext";

const Categories = () => {
  const { categoryPost } = usePosts();

  return (
    <div>
      <h1>Category Post</h1>
      {categoryPost.map((post) => (
        <div>
          <h3>{post.title.rendered}</h3>
        </div>
      ))}
    </div>
  );
};

export default Categories;
