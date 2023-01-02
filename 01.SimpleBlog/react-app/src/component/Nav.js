import { NavLink } from "react-router-dom";
import Search from "./Search";
const Nav = ({ search, setSearch, handleSearch, setIsScroll }) => {
  return (
    <nav>
      <ul>
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        <li>
          <NavLink to="/" onClick={() => setIsScroll(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/post/new" onClick={() => setIsScroll(true)}>
            New Post
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setIsScroll(true)}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
