import React from "react";
import propTypes from "prop-types";

import "./Card.scss";

export default function Card(props) {
  if (props.isSmall) {
    return (
      <div className="card">
        <div className="card-body">
          <img src={props.image} alt="img-card" />
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.desc}</h6>
        </div>
      </div>
    );
  }

  if (props.isBigWithIcon) {
    return (
      <div className="card card-big-icon">
        <div className="icon-big-card-wrapper" alt="icon">
          <img src={props.img} alt="asdas" />
        </div>

        <div className="card-desc-wrapper d-flex align-items-center">
          <div className="card-body px-0 pb-1 ">
            <h4 className="mb-4 font-weight-bold text-center">{props.title}</h4>
            <p className="card-text">{props.desc}</p>
          </div>
        </div>
      </div>
    );
  }

  if (props.isTestimonial) {
    return (
      <div className="testimonial-card">
        <div className="testimonial-img-wrapper">
          <img src={props.img} alt="person" />
        </div>

        <div className="testimonial-card-body">
          <p className="testimonial-card-title">{props.title}</p>
          <h5 className="testimonial-card-name">{props.name}</h5>
          <p className="testimonial-card-job text-muted">{props.job}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card" style={{ width: "18em", padding: "1em" }}>
      <div className="img-wrapper">
        <img className="card-img-top " src={props.img} alt="Hotel" />
      </div>

      <div className="card-desc-wrapper d-flex align-items-center">
        <div className="card-body px-0 pb-1">
          <h4 className="mb-0">{props.title}</h4>
          <p className="card-text">
            {props.city} , {props.country}
          </p>
        </div>

        <div className="card-price pt-4">
          <h4 className="card-price-text">{props.harga}</h4>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  isSmall: propTypes.bool,
  isBigWithIcon: propTypes.bool,
  isTestimonial: propTypes.bool,
  title: propTypes.string,
  desc: propTypes.string,
  city: propTypes.string,
  country: propTypes.string,
  harga: propTypes.string,
};
