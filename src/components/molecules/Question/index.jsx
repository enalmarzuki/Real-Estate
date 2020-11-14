import React from "react";

import Button from "../../../components/atoms/Button";

import "./Question.scss";

export default function index() {
  return (
    <div className="container question-container ">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h2 className="font-weight-bold mb-0">Do You Have Any Questions?</h2>
          <h2 className="font-weight-bold">Let our team help you</h2>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-7">
          <div className="content-wrapper">
            <input type="text" className="input-question px-4" />
            <Button className="btn btn-question " isPrimary>
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
