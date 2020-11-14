import React from "react";

import { Fade } from "react-awesome-reveal";

import DescSection from "../../../components/atoms/DescSection";
import TitleSection from "../../../components/atoms/TitleSection";
import Recent from "../../../components/molecules/MolRecent";

export default function index() {
  return (
    <div className="container recent-container">
      <Fade delay={300}>
        <div className="row row-recent-title">
          <TitleSection title="Recent" />
        </div>
        <DescSection desc="The New Property We Created" />
      </Fade>

      <Fade delay={500}>
        <Recent />
      </Fade>
    </div>
  );
}
