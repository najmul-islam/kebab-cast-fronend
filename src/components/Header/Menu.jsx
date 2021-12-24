import React from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../../contexts/postsContext";
import { Logo, BanglaBtn } from "./style/menu";

const Menu = () => {
  const { categories, setCategoryId } = usePosts();

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <Logo src="img/logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex flex-wrap mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                exact
                to="/"
                className="nav-link active"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                All
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id} className="nav-item">
                <Link
                  onClick={() => setCategoryId(category.id)}
                  to={`/category/${category.slug}`}
                  className="nav-link"
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <BanglaBtn className="d-md-none">Bangla portal</BanglaBtn>
          </ul>
        </div>

        <BanglaBtn className="d-none d-md-block ">Bangla portal</BanglaBtn>
      </div>
    </nav>
  );
};

export default Menu;
