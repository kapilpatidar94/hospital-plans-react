import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="mobile-view">
          <div className="close">X</div>
          <div className="choose-range">
            Choose from a range of protection plans that best suit your needs.
          </div>
          <div className="categories">
            <div className="categories-item basic">Basic</div>
            <div className="categories-item advanced">Advanced</div>
            <div className="categories-item super">Super</div>
          </div>
          <div className="item-area">
            <div className="hospital-items">
              <div className="left-item">What you pay →</div>
              <div className="basic-item">0.8</div>
              <div>1.1</div>
              <div>1.2</div>
            </div>
            <div className="hospital-items">
              <div className="left-item">Protection →</div>
              <div className="basic-item">80</div>
              <div>100</div>
              <div>120</div>
            </div>
            <div className="hospital-items highlighted">
              <div className="left-item">Hospital </div>
              <div className="basic-item">80</div>
              <div>100</div>
              <div>100</div>
            </div>
            <div className="hospital-items highlighted">
              <div className="left-item">Surgery </div>
              <div className="basic-item">40</div>
              <div>50</div>
              <div>60</div>
            </div>
            <div className="hospital-items highlighted">
              <div className="left-item">Payout(Death)</div>
              <div className="basic-item">80</div>
              <div>100</div>
              <div>100</div>
            </div>
            <div className="hospital-items highlighted">
              <div className="left-item">Total disability</div>
              <div className="basic-item">80</div>
              <div>100</div>
              <div>100</div>
            </div>
            <div className="hospital-items highlighted">
              <div className="left-item">Partial disability </div>
              <div className="basic-item">-</div>
              <div>50</div>
              <div>50</div>
            </div>
            <div className="hospital-items highlighted">
              <div className="left-item">Doctor visit: </div>
              <div className="basic-item">-</div>
              <div>3</div>
              <div>3</div>
            </div>
            <div className="hospital-items highlighted">
              <div className="left-item">Dential visit: </div>
              <div className="basic-item">-</div>
              <div>-</div>
              <div>2</div>
            </div>
            <div className="hospital-items">
              <div className="left-item">Select Plan Values apply</div>
              <input
                className="radio-button"
                type="radio"
                name="choose"
                value="basic"
              />
              <input
                className="radio-button"
                type="radio"
                name="choose"
                value="advanced"
              />
              <input
                className="radio-button"
                type="radio"
                name="choose"
                value="super"
              />
            </div>

            <button className="check-out">Check out this plan</button>
          </div>
        </div>
        <div class="blue-area"></div>
        <div class="yellow-area"></div>
        <div class="green-area"></div>
      </div>
    </div>
  );
}

export default App;
