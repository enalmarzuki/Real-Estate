import React from "react";

import DescSection from "../../../components/atoms/DescSection";
import TitleSection from "../../../components/atoms/TitleSection";
import Card from "../../../components/atoms/Card";

import Search from "../../../assets/img/icons/search.png";
import Meeting from "../../../assets/img/icons/meeting.png";
import Official from "../../../assets/img/icons/official.png";

export default function index() {
  return (
    <div className="container work-container">
      <div className="row row-recent-title">
        <TitleSection title="Work" />
      </div>
      <DescSection desc="How It Works" work />

      <div className="row row-work-card mt-3 justify-content-around">
        <div className="col-md-4 col-lg-3  mt-3">
          <Card
            isBigWithIcon
            img={Search}
            title="Fine Home"
            desc="Choose your meals form our diverse weekly menu. Find gluten or dairy free, low carb & veggle options."
          />
        </div>

        <div className="col-md-4 col-lg-3   mt-3">
          <Card
            isBigWithIcon
            img={Meeting}
            title="Meet Roommates"
            desc="Our team of chefs do the prep work no more chopping, measuring, or sink full of dishes !"
          />
        </div>

        <div className="col-md-4 col-lg-3   mt-3">
          <Card
            isBigWithIcon
            img={Official}
            title="Make It Official"
            desc="Yout freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box!"
          />
        </div>
      </div>
    </div>
  );
}
