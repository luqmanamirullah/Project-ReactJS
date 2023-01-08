import React from 'react'
import {FiSearch} from 'react-icons/fi';
const Search = ({setSearch}) => {
  return (
    <form className='search'>
        <input type="text" className='input' id='searchInput' placeholder='Search...' onChange={(e) => setSearch(e.target.value)}/>
        <button className='icon'>
            <FiSearch cursor="pointer" size={15}/>
        </button>
    </form>
  )
}

export default Search