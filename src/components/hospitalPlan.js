import React, { Component } from "react";

class HospitalPlans extends Component {
  render() {
    return (
      <div className="categories">
        <div className="categories-item basic">Basic</div>
        <div className="categories-item advanced">Advanced</div>
        <div className="categories-item super">Superior</div>
      </div>
    );
  }
}

export default HospitalPlans;
