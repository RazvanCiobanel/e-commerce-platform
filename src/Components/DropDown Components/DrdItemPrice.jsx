import React, { PureComponent } from "react";
import "./DrdItemPrice.css";
import { connect } from "react-redux";
import { roundPrice } from "../../Utils/appUtils";

export class DrdItemPrice extends PureComponent {
  
  render() {

    const { 
      brand, 
      name, 
      prices, 
      selectedCurr 
    } = this.props;
    
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
