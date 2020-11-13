import React from "react";

// Component
import DescSection from "../../../components/atoms/DescSection";
import TitleSection from "../../../components/atoms/TitleSection";
import Card from "../../../components/atoms/Card";

// asset
import Testimonial from "../../../assets/img/image/testimonial.jpg";

import "./Testimonial.scss";

export default function index() {
  return (
    <div className="container testimonial-container">
      <div className="row row-testimonial-title mb-2">
        <TitleSection title="Testimonial" />
      </div>

      <DescSection desc="What They Are Saying" isCenter />

      <div className="row justify-content-center mt-3">
        <div className="col-md-5">
          <p className="text-center font-weight-bold text-secondary">
            It's through mistakes that you actually can grow you get rid of
            everything that is not essential to makihave to get bad.
          </p>
        </div>
      </div>

      <div className="row row-testimonial-card justify-content-center">
        <div className="col-md-6">
          <Card
            isTestimonial
            img={Testimonial}
            title="They are engaged communicators and dedicated problem solvers regardless of time constraints. the team manage project them."
            name="Shakib"
            job="UI/UX Designer"
          />
        </div>
      </div>
    </div>
  );
}
