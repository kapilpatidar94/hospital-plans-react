import React, { Component } from "react";

class SelectPlan extends Component {
  superPlan = event => {
    let basicProp =
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode
        .nextSibling;
    let advanceProp = basicProp.nextSibling;
    let targetStyle = advanceProp.nextSibling;
    targetStyle.style.zIndex = "2";
    advanceProp.style.zIndex = "0";
    basicProp.style.zIndex = "0";
  };
  advancedPlan = event => {
    let basicProp =
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode
        .nextSibling;
    let targetStyle = basicProp.nextSibling;
    let superProp = targetStyle.nextSibling;
    targetStyle.style.zIndex = "2";
    basicProp.style.zIndex = "0";
    superProp.style.zIndex = "0";
  };
  basicPlan = event => {
    let targetStyle =
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode
        .nextSibling;
    let advanceProp = targetStyle.nextSibling;
    let superProp = advanceProp.nextSibling;
    targetStyle.style.zIndex = "2";
    advanceProp.style.zIndex = "0";
    superProp.style.zIndex = "0";
  };

  render() {
    return (
      <div className="hospital-items">
        <div className="left-item">
          Select Plan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➔ Values apply{" "}
        </div>
        <label className="container blue-container">
          <input type="radio" name="radio" onClick={this.basicPlan} />
          <span className="checkmark"></span>
        </label>
        <label className="container yellow-container">
          <input type="radio" name="radio" onClick={this.advancedPlan} />
          <span className="checkmark"></span>
        </label>
        <label className="container green-container">
          <input type="radio" name="radio" onClick={this.superPlan} />
          <span className="checkmark"></span>
        </label>
      </div>
    );
  }
}

export default SelectPlan;
