import React from "react";
import Button from "../../atoms/Button";

import "./TaglineHero.scss";

export default function index() {
  return (
    <div className="row align-items-center home-row">
      <div className="col-md-12 col-lg-6">
        <h1 className="home-title">Real Estate advice for real locals.</h1>
        <p className="home-desc">
          In expecting display, thought. Rationally and at it's of
          <br />
          headline proper then met harmonics. Sign the had no
          <br /> made reached are desk mars might to first.
        </p>

        <Button
          type="button"
          className="btn btn-primary font-weight-bold home-button-action"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
