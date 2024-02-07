import React, { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import "./Blog.css";

const Blog = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const query = '*[_type == "posts"][0..2]';
    client.fetch(query).then((data) => {
      setPost(data);
    });
  }, []);
  return (
    <section id="blog" className="pink">
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>
        <div className="content-container">
          {post.map((post) => (
            <div className="post" key={post}>
              <div className="tag">{post.label}</div>
              <a href="#">
                <img src={urlFor(post.thumbnail)} />
              </a>
              <a href="#">
                <h3 className="post-title">{post.title}</h3>
              </a>
            </div>
          ))}
        </div>
        <div className="btn-container">
          <a href="#" className="all-posts-btn">
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
