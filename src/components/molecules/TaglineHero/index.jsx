import React from "react";
import Button from "../../atoms/Button";

import "./TaglineHero.scss";

export default function index() {
  return (
    <div className="row align-items-center home-row">
      <div className="col-md-12 col-lg-6">
        <h1 className="home-title">Real Estate advice for your future.</h1>
        <p className="home-desc">
          Real estate is land along with any permanent improvements attached to
          land, whether natural or man-made - including water, trees, minerals,
          buildings, houses, fences, and bridges. Real estate is a form of
          property.
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
