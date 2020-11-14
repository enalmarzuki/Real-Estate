import React from "react";

import DescSection from "../../../components/atoms/DescSection";
import TitleSection from "../../../components/atoms/TitleSection";
import Recent from "../../../components/molecules/MolRecent";

export default function index() {
  return (
    <div className="container recent-container">
      <div className="row row-recent-title">
        <TitleSection title="Recent" />
      </div>
      <DescSection desc="The New Property We Created" />
      <Recent />
    </div>
  );
}
