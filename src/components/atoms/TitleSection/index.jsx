import React from "react";

import "./TitleSection.scss";

export default function index(props) {
  return (
    <div className="col-md-12">
      <h6 className="title-section">{props.title}</h6>
    </div>
  );
}
