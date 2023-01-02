import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from '../api/posts'
const Post = ({ posts, setPosts }) => {
  // hooks
  const navigate = useNavigate();
  const { id } = useParams();

  // Delete Blog
  const handleDelete = async (id) => {
      try {
      await api.delete(`/posts/${id}`)
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      navigate("/");        
      } catch (error) {
      console.log(`Error: ${error.message}`);
      }
  };

  const post = posts.find((post) => post.id.toString() === id);
  return (
    <>
      {post && (
        <article className="post">
          <div className="header">
            <Link to="/">
              <FiArrowLeft size={24} />
            </Link>
            <h1>{post.title}</h1>
          </div>
          <p>{post.datetime}</p>
          <p>{post.content}</p>
          <div className="btn-section">            
            <button type="button" className="btn-edit"
  >
              <Link
                to={`/post/edit/${post.id}`}
              >
                Edit
              </Link>
            </button>
            <button
              type="button"
              className="btn-delete"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </div>
        </article>
      )}
      {!post && (
        <div className="post-404">
          <h1>Ups, Post Not Found</h1>
          <p>Well, that's disappointing</p>
          <Link to="/" className="btn-back">
            <FiArrowLeft size={30} />
            Back to Home Page
          </Link>
        </div>
      )}
    </>
  );
};

export default Post;
