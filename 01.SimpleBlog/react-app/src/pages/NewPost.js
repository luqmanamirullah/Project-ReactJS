import { Link }from 'react-router-dom'
import { AiOutlineSend } from "react-icons/ai";
import { FiArrowLeft} from "react-icons/fi";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {format} from 'date-fns'
import api from '../api/posts'
const NewPost = ({posts, setPosts}) => {
  // state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  // hooks
  const navigate = useNavigate();
  
  // Post Blog
  const addPost = async () => {
      try {      
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const datetime = format(new Date(), "MMMM dd, yyyy pp");
      const newPost = { id, title, datetime, content };
      const res = await api.post('/posts', newPost);
      const postLists = [...posts, res.data];
      setPosts(postLists);
      } catch (error) {
      console.log(`Error: ${error.message}`);
      }

  };

  const handleSubmit = (e) => {
      e.preventDefault();
      addPost();
      setTitle("");
      setContent("");
      navigate("/");
  };
  return (
    <div className="newpost">
          <div className="header">
            <Link to="/">
              <FiArrowLeft size={30} />
            </Link>
            <h1>NewPost</h1>
          </div>
      <form className="input-section" onSubmit={(e) => handleSubmit(e)}>
        <div className="header">
          <input
            type="text"
            id="title"
            className="input-title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="title" className="title-label">
            Title
          </label>
          <button type="submit" className="btn-submit">
            <AiOutlineSend size={20} />
            Publish
          </button>
        </div>
        <textarea
          name="content"
          className="input-content"
          cols="100"
          rows="50"
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
    </div>
  );
};

export default NewPost;
