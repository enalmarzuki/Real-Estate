import React from "react";
import Card from "../../../components/atoms/Card";

// image & icon
import House from "../../../assets/img/icons/house.png";
import Love from "../../../assets/img/icons/love.png";

import "./Customer.scss";

export default function index(props) {
  return (
    <div className="row my-5 justify-content-center row-card-customer">
      <div className="col-md-6 col-lg-2 col-card">
        <Card image={House} title="100%" desc="Unit Ready Livable" isSmall />
      </div>
      <div className="col-md-6 col-lg-2  col-card">
        <Card image={Love} title="109k" desc="Customer Satisfaction" isSmall />
      </div>
    </div>
  );
}
