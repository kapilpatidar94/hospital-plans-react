import React, { Component } from "react";
import "./App.css";
import HospitalPlans from "./components/hospitalPlan";
import PlansList from "./components/PlansList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="mobile-view">
            <div className="close">X</div>
            <div className="choose-range">
              Choose from a range of protection plans that best suit your needs.
            </div>

            <HospitalPlans />

            <div>
              <PlansList />
            </div>
          </div>
          <div className="blue-area"></div>
          <div className="yellow-area"></div>
          <div className="green-area"></div>
        </div>
      </div>
    );
  }
}

export default App;
