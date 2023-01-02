import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Search = ({ setSearch, handleSearch }) => {
  return (
    <form
      className="search-bar"
      onSubmit={(e) => {
        handleSearch(e);
      }}
    >
      <input
        type="text"
        placeholder="What are you looking for..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn-search">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default Search;
