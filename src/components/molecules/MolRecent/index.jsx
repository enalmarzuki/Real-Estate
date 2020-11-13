import React from "react";

import Card from "../../atoms/Card";

import Recent1 from "../../../assets/img/image/recent-1.jpg";
import Recent2 from "../../../assets/img/image/recent-2.jpg";
import Recent3 from "../../../assets/img/image/recent-3.jpg";
import Recent4 from "../../../assets/img/image/recent-4.jpg";
import Recent5 from "../../../assets/img/image/recent-5.jpg";
import Recent6 from "../../../assets/img/image/recent-6.jpg";
import Arrow from "../../../assets/img/icons/arrow.png";
import btnLeft from "../../../assets/img/icons/btn-left.png";
import btnRight from "../../../assets/img/icons/btn-right.png";

import "./MolRecent.scss";

export default function index() {
  const nextSlider = (e) => {
    const sliderContainer = document.querySelector(`.card-wrapper`);
    sliderContainer.scrollLeft += 557;
  };

  const prevSlider = (e) => {
    const sliderContainer = document.querySelector(`.card-wrapper`);
    sliderContainer.scrollLeft -= 557;
  };

  return (
    <div>
      <div className="row">
        <div className="col d-flex justify-content-end align-items-center find-more">
          <p className="mr-1 mb-0">Find More Project</p>
          <span>
            <img src={Arrow} alt="icon-arrow.png" />
          </span>
        </div>
      </div>

      <div className="row card-container">
        <span className="btn-prev" onClick={prevSlider}>
          <img src={btnLeft} alt="btn-left" />
        </span>
        <span className="btn-next" onClick={nextSlider}>
          <img src={btnRight} alt="btn-left" />
        </span>
        <div className="card-wrapper">
          <div className="col mt-4">
            <Card
              img={Recent1}
              title="Palace"
              harga="$12,000"
              city="Makassar"
              country="Indonesia"
            />
          </div>

          <div className="col mt-4">
            <Card
              img={Recent2}
              title="Palace"
              harga="$12,000"
              city="Makassar"
              country="Indonesia"
            />
          </div>

          <div className="col mt-4">
            <Card
              img={Recent3}
              title="Palace"
              harga="$12,000"
              city="Makassar"
              country="Indonesia"
            />
          </div>

          <div className="col mt-4">
            <Card
              img={Recent4}
              title="Palace"
              harga="$12,000"
              city="Makassar"
              country="Indonesia"
            />
          </div>

          <div className="col mt-4">
            <Card
              img={Recent5}
              title="Palace"
              harga="$12,000"
              city="Makassar"
              country="Indonesia"
            />
          </div>

          <div className="col mt-4">
            <Card
              img={Recent6}
              title="Palace"
              harga="$12,000"
              city="Makassar"
              country="Indonesia"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
