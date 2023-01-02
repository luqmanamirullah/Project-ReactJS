import {createContext, useState, useEffect} from 'react';
import useAxiosFetchApi from "../hooks/useAxiosFetchApi";
const DataContext = createContext();

export const DataProvider = ({children}) => {
// state
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);



  // hooks
  const {data, fetchError, isLoading} = useAxiosFetchApi('http://localhost:3500/posts');

  // fetch api
  useEffect(() => {
    setPosts(data);
  }, [data]);

  // Search
  useEffect(() => {
    const filterPosts = posts.filter(
      (post) =>
        ((post.content).toLowerCase()).includes(search.toLowerCase()) ||
        ((post.title).toLowerCase()).includes(search.toLowerCase())
    );

    setSearchResults(filterPosts.reverse());
  }, [posts, search]);

 
    return(
        <DataContext.Provider value={{
            search, setSearch, searchResults,
            posts, setPosts, fetchError, isLoading,
        }}> 
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;