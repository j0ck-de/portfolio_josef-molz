import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <section className="space-y-4 md:space-y-8">
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </section>
  );
};

export default Posts;
