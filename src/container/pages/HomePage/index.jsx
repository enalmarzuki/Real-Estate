import React, { Component } from "react";

// component
import Hero from "../../organisms/Hero";
import Recent from "../../organisms/Recent";
import Work from "../../organisms/Work";
import Testimonial from "../../organisms/Testimonial";
import About from "../../../components/molecules/About";
import Question from "../../../components/molecules/Question";
import Footer from "../../../components/molecules/Footer";
import Header from "../../../components/molecules/Header";

// Asset
import Homepage from "../../../assets/img/image/home-page.png";
import imgAbout from "../../../assets/img/image/About.jpg";

// Style
import "./HomePage.scss";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.refAbout = React.createRef();
    this.refFeatures = React.createRef();
    this.refWork = React.createRef();
    // this.state = {};
  }
  render() {
    return (
      <div className="landing-page">
        <Header
          work={this.refWork}
          scrollFeatures={this.refFeatures}
          scrollAbout={this.refAbout}
        />

        <div className="home-page" id="hero">
          <Hero img={Homepage} scrollHero={this.refHero} />
        </div>

        <div className="about-page" id="about">
          <About img={imgAbout} scrollAbout={this.refAbout} />
        </div>

        <div className="recent-page">
          <Recent scrollFeatures={this.refFeatures} />
        </div>

        <div className="work-page" id="work">
          <Work work={this.refWork} />
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
