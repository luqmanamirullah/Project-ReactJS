import Nav from "./Nav";
import { Link } from "react-router-dom";
import {useContext } from "react";
import DataContext from "../context/DataContext";
import useWindowSize from "../hooks/useWindowSize";
import useScroll from "../hooks/useScroll";
const Header = () => {
  const {width} = useWindowSize();
  const { search, setSearch} = useContext
  (DataContext)

  const handleSearch = (e) => {
    e.preventDefault();
  };

 const {isScroll} = useScroll();
  return (
    <header
      style={
        isScroll
          ? {
              backgroundColor: `white`,
              boxShadow: `1px 0 5px 2px rgba(0, 0, 0, 0.3)`,
            }
          : { backgroundColor: `transparent` }
      }
    >
      <h1 >
        <Link to="/" style={width < 768 ? {fontSize: '1rem'} : width < 992 ? {fontSize: '1.5rem'} : {fontSize: '2.5rem'}}> React JS Blog</Link>
      </h1>
      <Nav
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
    </header>
  );
};

export default Header;
