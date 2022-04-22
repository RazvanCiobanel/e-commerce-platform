import React, { Component } from "react";
import "./DrdItemPrice.css";
import { connect } from "react-redux";
import { roundPrice } from "../../Utils/appUtils";

export class DrdItemPrice extends Component {

  render() {
    
    const brand = this.props.brand;
    const name = this.props.name;
    const prices = this.props.prices;
    const selectedCurr = this.props.selectedCurr;
    const roundedPrices = roundPrice(prices);

    const price = roundedPrices?.map((price) => {
      return selectedCurr === price["currency"]["label"] ? (
        <p className="drd-price" key={price["currency"]}>
          {price["currency"]["symbol"]}
          {price["amount"]}{" "}
        </p>
      ) : undefined;
    });

    return (
      <>
        <div className="drd-text">
          <p>{brand}</p>
          <p>{name}</p>
        </div>
        <div>{price}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCurr: state.selectedCurr.selectedCurr,
  };
};

export default connect(mapStateToProps)(DrdItemPrice);
