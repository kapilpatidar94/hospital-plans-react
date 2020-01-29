import React, { Component } from "react";
import SelectPlan from "./selectPlan";

class PlansList extends Component {
  render() {
    return (
      <div className="item-area">
        <div className="hospital-items">
          <div className="left-item">What you pay →</div>
          <div className="basic-item">0.8</div>
          <div>1.1</div>
          <div>1.2</div>
        </div>
        <div className="hospital-items">
          <div className="left-item">Protection </div>
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
          <div className="basic-item">—</div>
          <div>50</div>
          <div>50</div>
        </div>
        <div className="hospital-items highlighted">
          <div className="left-item">Doctor visit: </div>
          <div className="basic-item">—</div>
          <div>3</div>
          <div>3</div>
        </div>
        <div className="hospital-items highlighted">
          <div className="left-item">Dential visit: </div>
          <div className="basic-item">—</div>
          <div>—</div>
          <div>2</div>
        </div>

        <SelectPlan />

        <button className="check-out">Check out this plan</button>
      </div>
    );
  }
}
export default PlansList;
