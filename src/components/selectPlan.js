import React, { Component } from "react";

class SelectPlan extends Component {
  superPlan = event => {
    let basicProp =
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode.nextSibling;
    let advanceProp = basicProp.nextSibling;
    let targetStyle = advanceProp.nextSibling;
    targetStyle.style.zIndex = "2";
    advanceProp.style.zIndex = "0";
    basicProp.style.zIndex = "0";
  };
  advancedPlan = event => {
    let basicProp =
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode.nextSibling;
    let targetStyle = basicProp.nextSibling;
    let superProp = targetStyle.nextSibling;
    targetStyle.style.zIndex = "2";
    basicProp.style.zIndex = "0";
    superProp.style.zIndex = "0";
  };
  basicPlan = event => {
    // let targetStyle =
    //   event.target.parentNode.parentNode.parentNode.parentNode.nextSibling;
    // let advanceProp = targetStyle.nextSibling.nextSibling;
    // let superProp = targetStyle.nextSibling;
    // targetStyle.style.zIndex = "2";
    // advanceProp.style.zIndex = "0";
    // superProp.style.zIndex = "0";
    // console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.nextSibling);
    let targetStyle = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.nextSibling;
    let advanceProp = targetStyle.nextSibling;
    let superProp = targetStyle.nextSibling;
    targetStyle.style.zIndex = "2";
    advanceProp.style.zIndex = "0";
    superProp.style.zIndex = "0";
  };

  render() {
    return (
      <div className="hospital-items">
        <div className="left-item">Select Plan Values apply ➔</div>
        {/* <input
          className="radio-button"
          type="radio"
          name="choose"
          value="basic"
          onClick={this.basicPlan}
        />

        <input
          className="radio-button"
          type="radio"
          name="choose"
          value="advanced"
          onClick={this.advancedPlan}
        />
        <input
          className="radio-button"
          type="radio"
          name="choose"
          value="super"
          onClick={this.superPlan}
        /> */}
        <label class="container blue-container">
          <input type="radio" name="radio" onClick={this.basicPlan}/>
          <span class="checkmark"></span>
        </label>
        <label class="container yellow-container">
          <input type="radio" name="radio" onClick={this.advancedPlan}/>
          <span class="checkmark"></span>
        </label>
        <label class="container green-container">
          <input type="radio" name="radio" onClick={this.superPlan} />
          <span class="checkmark"></span>
        </label>
      </div>
    );
  }
}

export default SelectPlan;
