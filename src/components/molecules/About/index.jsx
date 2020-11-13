import React from "react";
import Button from "../../../components/atoms/Button";
import TitleSection from "../../../components/atoms/TitleSection";
import DescSection from "../../../components/atoms/DescSection";

import "./About.scss";

export default function index(props) {
  return (
    <div className="container about-container">
      <div className="row row-about-title">
        <TitleSection title="About Us" />
      </div>

      <DescSection
        desc="A New Way Of Working For Many Of Professionals."
        isCenter
      />

      <div className="row row-about-content align-items-center">
        <div className="col-md-6 col-img">
          <div className="img-wrapper">
            <img src={props.img} alt="img-about" />
          </div>
        </div>

        <div className="col-md-5 about-desc ml-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
            doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            reprehenderit sed atque omnis eius perferendis.
          </p>

          <Button
            type="button"
            className="btn btn-primary font-weight-bold about-button-action"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
