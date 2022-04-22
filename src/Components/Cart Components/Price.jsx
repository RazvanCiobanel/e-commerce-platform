import React, { Component } from "react";
import "./Price.css";
import { connect } from "react-redux";
import { roundPrice } from "../../Utils/appUtils";

export class Price extends Component {

  render() {
    
    const prices = this.props.prices;
    const name = this.props.name;
    const brand = this.props.brand;
    const selectedCurr = this.props.selectedCurr;
    const roundedPrices = roundPrice(prices);

    const price = roundedPrices?.map((price) => {
      return selectedCurr === price["currency"]["label"] ? (
        <p
          className="cart-price"
          key={price["currency"]["label"]}
        >
          {price["currency"]["symbol"]}
          {price["amount"]}{" "}
        </p>
      ) : undefined;
    });

    return (
      <>
        <p className="cart-brand">{brand}</p>
        <p className="cart-name">{name}</p>
        {price}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCurr: state.selectedCurr.selectedCurr,
});

export default connect(mapStateToProps)(Price);
