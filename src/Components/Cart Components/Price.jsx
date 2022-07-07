import React, { PureComponent } from "react";
import "./Price.css";
import { connect } from "react-redux";
import { roundPrice } from "../../Utils/appUtils";

export class Price extends PureComponent {
  render() {
    
    const { 
      prices, 
      name, 
      brand, 
      selectedCurr 
    } = this.props;

    const roundedPrices = roundPrice(prices);

    const price = roundedPrices?.map((price) => {
      return selectedCurr === price.currency.label ? (
        <p
          className="cart-price"
          key={price.currency.label}
        >
          {price.currency.symbol}
          {price.amount}
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
