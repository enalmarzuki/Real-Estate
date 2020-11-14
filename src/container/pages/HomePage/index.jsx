import React, { Component } from "react";

// component
import Hero from "../../organisms/Hero";
import Recent from "../../organisms/Recent";
import Work from "../../organisms/Work";
import Testimonial from "../../organisms/Testimonial";
import About from "../../../components/molecules/About";
import Question from "../../../components/molecules/Question";
import Footer from "../../../components/molecules/Footer";

// Asset
import Homepage from "../../../assets/img/image/home-page.png";
import imgAbout from "../../../assets/img/image/About.jpg";

// Style
import "./HomePage.scss";

export default class HomePage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="home-page">
          <Hero img={Homepage} />
        </div>

        <div className="about-page">
          <About img={imgAbout} />
        </div>

        <div className="recent-page">
          <Recent />
        </div>

        <div className="work-page">
          <Work />
        </div>

        <div className="testimonial-page">
          <Testimonial />
        </div>

        <div className="question-page">
          <Question />
        </div>

        <Footer />
      </div>
    );
  }
}
