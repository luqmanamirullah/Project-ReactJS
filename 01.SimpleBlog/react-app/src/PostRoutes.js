import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Post from "./pages/Post";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";
import DataContext from "./context/DataContext";
const PostRoutes = () => {
  const { posts, setPosts } = useContext(DataContext);
  return (
    <>
      <Routes>
        <Route path=":id" element={<Post posts={posts} setPosts={setPosts}/>}/>
        <Route path="new" element={<NewPost posts={posts} setPosts={setPosts}/>}/>
        <Route path="edit/:id" element={<EditPost posts={posts} setPosts={setPosts}/>}/>
      </Routes>
    </>
  );
};

export default PostRoutes;
