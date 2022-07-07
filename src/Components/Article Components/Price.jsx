import React, { PureComponent } from "react";
import "./Price.css";
import { connect } from "react-redux";
import { roundPrice } from "../../Utils/appUtils";

export class Price extends PureComponent {
  render() {
    const { prices, id, selectedCurr } = this.props;

    const roundedPrices = roundPrice(prices);

    const price = roundedPrices?.map((item) => {
      return selectedCurr === item.currency.label ? (
        <p
          id={id}
          className="art-price"
          key={item.currency.label}
        >
          {item.currency.symbol}
          {item.amount}
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
