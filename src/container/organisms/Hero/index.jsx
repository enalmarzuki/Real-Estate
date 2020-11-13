import React, { Component } from "react";
import Header from "../../../components/molecules/Header";
import TaglineHero from "../../../components/molecules/TaglineHero";
import Customer from "../../../components/molecules/Customer";

import "./Hero.scss";

export default class index extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt="real-estate.jpg"
          className="background-home"
        />
        <Header />
        <div className="container home-container ">
          <TaglineHero />
          <Customer />
        </div>
      </div>
    );
  }
}
