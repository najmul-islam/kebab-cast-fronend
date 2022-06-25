import React from "react";
import { usePosts } from "../../contexts/postsContext";
import PostCard from "./PostCard";

const Posts = () => {
  const { posts } = usePosts();

  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => (
          <div className="col-lg-3 col-md-6">
            <PostCard
              key={post.id}
              imgId={post.featured_media}
              title={post.title.rendered}
              excerpt={post.excerpt.rendered}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
