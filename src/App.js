import React, { Component } from "react";
import "./App.css";
import HospitalPlans from "./components/hospitalPlan";
import PlansList from "./components/checkOutPlan";

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
          <div class="blue-area"></div>
          <div class="yellow-area"></div>
          <div class="green-area"></div>
        </div>
      </div>
    );
  }
}

export default App;
