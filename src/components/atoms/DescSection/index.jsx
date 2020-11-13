import React from "react";
import propTypes from "prop-types";

import "./DescSection.scss";

export default function DescSection(props) {
  const className = [props.className];
  if (props.isCenter) className.push("justify-content-center");
  if (props.isCenter) className.push("text-center");

  return (
    <div>
      <div className={`row row-desc ${className.join(" ")}`}>
        <div className={`col-md-5 ${className.join(" ")}`}>
          <h2 className="desc-section">{props.desc}</h2>
        </div>
      </div>

      {props.work ? (
        <div className="row">
          <div className="col-md-5">
            <p className="text-secondary">
              It's through mistakes that you actually can grow you get rid of
              everything that is not essetial to makihave to get bad
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

DescSection.propTypes = {
  isCenter: propTypes.bool,
  desc: propTypes.string,
};
