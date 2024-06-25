import { useRef, useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const NavItem = useRef<HTMLDivElement>(null);
  const SearchBar = useRef<HTMLDivElement>(null);
  const [searchInput, setsearchInput] = useState<string>("");
  console.log(searchInput)

  function handleMenuButton(){
    NavItem.current!.classList.toggle("responsive-nav");
  }
  function handleShowSearchButton(){
    SearchBar.current!.classList.add("active-search-bar");
  }
  function handleHiddenSearchButton(){
    SearchBar.current!.classList.remove("active-search-bar");
    setsearchInput("")
  }

  return (
    <>
      <nav className="navbar py-2">
        <div className="container nav">

          <div className="nav-btn">
            <button onClick={handleMenuButton} className="hamburger-btn"><i className="bi bi-list"></i></button>
          </div>

          <div className="brands text-white d-flex align-items-center">
            <a href="#" className="brand text-dark fw-bold fs-2 me-3">
              LOGO
            </a>
          </div>

          <div ref={NavItem} className="menu-list">
            <ul className="menu-items p-0 mb-0 px-5">
              <a href="#" className="nav-links me-lg-5 me-0 py-2 active">
                Home
              </a>
              <a href="#" className="nav-links me-lg-5 me-0 py-2">
                About
              </a>
              <a href="#" className="nav-links me-lg-5 me-0 py-2">
                Blogs
              </a>
              <a href="#" className="nav-links py-2">
                Videos
              </a>
            </ul>
            <button onClick={handleMenuButton} className="close-btn">&times;</button>
          </div>

          <div className="search-icon">
            <button onClick={handleShowSearchButton} className="search-btn">
              <i className="bi bi-search"></i>
            </button>
          </div>

          <div ref={SearchBar} className="search-bar">
              <div className="input-container">
                <input value={searchInput} onChange={(e) => setsearchInput(e.target.value)} type="text" className="search-input" placeholder="Search..." />
                <button onClick={handleHiddenSearchButton} className="input-close-btn">&times;</button>
              </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
