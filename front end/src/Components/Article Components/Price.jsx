import React, { Component } from "react";
import "./Price.css";
import { connect } from "react-redux";

export class Price extends Component {
  render() {
    const prices = this.props.prices;
    const id = this.props.id;
    const selectedCurr = this.props.selectedCurr;

    const price = prices?.map((item) => {
      return selectedCurr === item["currency"]["label"] ? (
        <p id={id} className="art-price" key={item["currency"]["label"]}>
          {item["currency"]["symbol"]}
          {item["amount"]}
        </p>
      ) : undefined;
    });

    return <>{price}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCurr: state.selectedCurr.selectedCurr,
  };
};

export default connect(mapStateToProps)(Price);
