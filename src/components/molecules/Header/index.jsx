import React from "react";
import Button from "../../atoms/Button";
import { Fade } from "react-awesome-reveal";

import "./Header.scss";

export default function index() {
  const toggle = (e) => {
    const hamburger = document.querySelector("div.hamburger-toggle");
    hamburger.classList.toggle("x");

    const list = document.querySelector(".collapse.navbar-collapse");
    console.log(list.style.display);
    if (list.style.display === "" || list.style.display === "none") {
      return (list.style.display = "block");
    }
    return (list.style.display = "none");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-4 header">
      <div className="container header-container">
        <Button type="link" className="navbar-brand btn-home" href="#">
          Real Estate
        </Button>
        <div className="hamburger-toggle" onClick={toggle}></div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Button type="link" className="nav-link active btn-how" href="#">
              How It Works
            </Button>
            <Button type="link" className="nav-link btn-feature" href="#">
              Features
            </Button>
            <Button type="link" className="nav-link btn-about" href="#">
              About
            </Button>
          </div>

          <div className="search-wrapper ml-auto">
            <Button
              type="button"
              className="btn btn-primary font-weight-bold btn-contact"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
