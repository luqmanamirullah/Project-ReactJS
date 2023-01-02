import {useEffect, useState} from 'react'
import { useParams, Link, useNavigate } from "react-router-dom"
import { FiArrowLeft} from "react-icons/fi";
import {AiFillSave} from 'react-icons/ai'
import {format} from 'date-fns'
import api from '../api/posts'
export default function EditPost({posts, setPosts}) {        
    // hooks
    const navigate = useNavigate();

    // Edit Blog
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');
    const handleEdit = async (id) => {
        try {      
            const datetime = format(new Date(), 'MMMM dd, yyyy pp');
            const updatePost = {id, title: editTitle, datetime, content: editContent};
            const res = await api.put(`/posts/${id}`, updatePost);
            setPosts(posts.map(post => post.id === id ? {...res.data } : post ));
            navigate('/');
        } catch (error) {
        console.log(`Error: ${error.message}`)
        }
    }
    const {id} = useParams();
    const post =  posts.find(post => (post.id).toString() === id);

    useEffect(() => {
      if (post) {
        setEditTitle(post.title);
        setEditContent(post.content);
      }
    
    }, [post, setEditTitle, setEditContent])
    return(
        <div className="newpost">
            {editTitle && <>
                <div className="header">
                    <Link to="/">
                    <FiArrowLeft size={30} />
                    </Link>
                    <h1>Edit Post</h1>
            </div>
                <form className="input-section" onSubmit={(e) => e.preventDefault()}>
                <div className="header">
                    <input
                    type="text"
                    id="title"
                    className="input-title"
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <label htmlFor="title" className="title-label">
                    Title
                    </label>
                    <button type="submit" className="btn-submit" onClick={() => handleEdit(post.id)}>
                    <AiFillSave size={20} />
                    Save
                    </button>
                </div>
                <textarea
                    name="content"
                    className="input-content"
                    cols="100"
                    rows="50"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                />
                </form>
            </>}
            {!editTitle && (
                <div className="post-404">
                    <h1>Ups, Post Not Found</h1>
                    <p>Well, that's disappointing</p>
                    <Link to="/" className="btn-back">
                        <FiArrowLeft size={30} />
                        Back to Home Page
                    </Link>
                </div>
            )}
      </div>
    )
};
