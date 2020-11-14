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

      <DescSection desc="What They Say About Us" isCenter />

      <div className="row justify-content-center mt-3">
        <div className="col-md-5">
          <p className="text-center font-weight-bold text-secondary">
            Through us you can get your dream home easily by choosing,
            negotiating, trading and your dream home is ready to live in.
          </p>
        </div>
      </div>

      <div className="row row-testimonial-card justify-content-center">
        <div className="col-md-6">
          <Card
            isTestimonial
            img={Testimonial}
            title="The people in this company are very friendly, the waiter is very kind, the price is very suitable for the house I get."
            name="Marzuki . R"
            job="Frontend Web Developer"
          />
        </div>
      </div>
    </div>
  );
}
