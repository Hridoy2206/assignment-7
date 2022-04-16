import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      {/* <div className="courseLogo">
      <FontAwesomeIcon className="iconHeader" icon={faShoppingCart} />
      <h2>Online Courses</h2>
      </div>
      <div className="navBer">
        <a href="/home">Home</a>
        <a href="/course">Courses</a>
        <a href="/review">Review</a>
        <a href="/contact">Contact</a>
      </div> */}
      <div className="headerWrapper">
        <nav class="navbar navbar-expand-lg  navbar-light">
          <div class="container">
            <span className="icon fs-4">
              <FontAwesomeIcon className="iconHeader" icon={faShoppingCart} />
            </span>
            <div className="logo">
              <a class="fw-bold fs-2" href="/">
                Online Courses
              </a>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 navLink">
                <li class="nav-item">
                  <a class="nav-link active " aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Course
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link active" aria-current="page" href="/">
                    Review
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Contact
                  </a>
                </li>
              </ul>
              <form className="icon fs-4">
                <FontAwesomeIcon className="iconHeader" icon={faShoppingCart} />
                <span className="searchIcon ps-4">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
