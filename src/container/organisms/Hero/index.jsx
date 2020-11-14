import React, { Component } from "react";
import Header from "../../../components/molecules/Header";
import TaglineHero from "../../../components/molecules/TaglineHero";
import Customer from "../../../components/molecules/Customer";
import { Fade, Slide } from "react-awesome-reveal";

import "./Hero.scss";

export default class index extends Component {
  render() {
    return (
      <div>
        <Fade triggerOnce delay={300}>
          <img
            src={this.props.img}
            alt="real-estate.jpg"
            className="background-home"
          />
        </Fade>
        <Header />
        <div className="container home-container ">
          <Fade delay={300}>
            <TaglineHero />
          </Fade>

          <Slide direction="up">
            <Fade delay={300}>
              <Customer />
            </Fade>
          </Slide>
        </div>
      </div>
    );
  }
}
