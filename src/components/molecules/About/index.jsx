import React from "react";
import Button from "../../../components/atoms/Button";
import TitleSection from "../../../components/atoms/TitleSection";
import DescSection from "../../../components/atoms/DescSection";

import { Fade, Slide } from "react-awesome-reveal";

import "./About.scss";

export default function index(props) {
  return (
    <div className="container about-container" ref={props.scrollAbout}>
      <Fade>
        <div className="row row-about-title">
          <TitleSection title="About Us" />
        </div>

        <DescSection
          desc="A New Way To Make It Easier For You To Have Your Dream Home."
          isCenter
        />
      </Fade>

      <div className="row row-about-content align-items-center">
        <div className="col-md-6 col-img">
          <Slide direction="up">
            <Fade delay={300}>
              <div className="img-wrapper">
                <img src={props.img} alt="img-about" />
              </div>
            </Fade>
          </Slide>
        </div>

        <div className="col-md-5 about-desc ml-5">
          <Slide direction="up">
            <Fade delay={300}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
                doloremque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio reprehenderit sed atque omnis eius perferendis.
              </p>

              <Button
                type="button"
                className="btn btn-primary font-weight-bold about-button-action"
              >
                Learn More
              </Button>
            </Fade>
          </Slide>
        </div>
      </div>
    </div>
  );
}
