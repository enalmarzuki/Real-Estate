import React from "react";
import Button from "../../atoms/Button";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h2>Real Estate</h2>
            <p className="brand-tagline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              quos nisi iure minima consectetur sunt?
            </p>
          </div>

          <div className="col-md-3 mb-4 ml-auto">
            <h6 className="mt-2 footer-title">Built Using</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">React JS</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="mt-2 footer-title">Built By</h6>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <p className="font-weight-bold mb-0">Frontend Web Developer</p>
                <Button
                  type="link"
                  href="https://id.linkedin.com/in/enal-marzuki-6a12a91a3"
                  isExternal
                  target="_blank"
                >
                  Marzuki . R
                </Button>
              </li>
              <li className="list-group-item">
                <p className="font-weight-bold mb-0">UI/UX Designer</p>
                <Button
                  type="link"
                  href="https://www.behance.net/Shakibali"
                  isExternal
                  target="_blank"
                >
                  Shakib Ali
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center copyrights">
            Copyright • 2020 All rights reserved • Real Estate
          </div>
        </div>
      </div>
    </footer>
  );
}
