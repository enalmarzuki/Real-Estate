import React from "react";

import { Fade, Slide } from "react-awesome-reveal";

import DescSection from "../../../components/atoms/DescSection";
import TitleSection from "../../../components/atoms/TitleSection";
import Card from "../../../components/atoms/Card";

import Search from "../../../assets/img/icons/search.png";
import Meeting from "../../../assets/img/icons/meeting.png";
import Official from "../../../assets/img/icons/official.png";

export default function index(props) {
  return (
    <div className="container work-container" ref={props.work}>
      <Fade delay={300}>
        <div className="row row-recent-title">
          <TitleSection title="Work" />
        </div>
        <DescSection desc="How It Works" work />
      </Fade>

      <div className="row row-work-card mt-3 justify-content-around">
        <div className="col-md-4 col-lg-3  mt-3">
          <Slide direction="up">
            <Fade delay={300}>
              <Card
                isBigWithIcon
                img={Search}
                title="Fine Home"
                desc="Choose your dream home from our diverse list. Find the option that suits your dreams and make sure it is your best choice."
              />
            </Fade>
          </Slide>
        </div>

        <div className="col-md-4 col-lg-3 mt-3">
          <Slide direction="up">
            <Fade delay={300}>
              <Card
                isBigWithIcon
                img={Meeting}
                title="Meet Roommates"
                desc="Our team is no longer doing preparatory work such as cleaning because this residence is always well cared for."
              />
            </Fade>
          </Slide>
        </div>

        <div className="col-md-4 col-lg-3 mt-3">
          <Slide direction="up">
            <Fade delay={300}>
              <Card
                isBigWithIcon
                img={Official}
                title="Make It Official"
                desc="Make sure you buy in our official team to prevent something unwanted from happening."
              />
            </Fade>
          </Slide>
        </div>
      </div>
    </div>
  );
}
