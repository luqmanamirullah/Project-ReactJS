import React from "react";
import { Link } from "react-router-dom";

const Feed = ({ searchResults}) => {
  return (
    <>
      {searchResults.map((post) => (
        <Link
          to={`/post/${post.id}`}
          key={post.id}
          className="post-card"
        >
          <div className="post-card-header">
            <h1>{post.title}</h1>
            <p>{post.datetime}</p>
          </div>
          <p>
            {post.content.length > 90
              ? `${post.content.slice(0, 150)}...`
              : `${post.content}`}
          </p>
          <button type="button" className="btn-edit">
            <Link to={`/post/edit/${post.id}`} >
            Edit
            </Link>
          </button>
        </Link>
      ))}
    </>
  );
};

export default Feed;
