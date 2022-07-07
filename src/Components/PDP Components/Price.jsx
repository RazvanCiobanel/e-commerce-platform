import React, { PureComponent } from "react";
import "./Price.css";
import { connect } from "react-redux";
import { Interweave } from 'interweave';
import {
  addToCartPdp,
  resetItem,
  choosePdpItem,
} from "../../Actions/actions";
import { roundPrice } from "../../Utils/appUtils";

export class Price extends PureComponent {
  render() {
    const {
      prices,
      inStock,
      selectedCurr,
      description,
      addToCartPdp,
      selectedItem,
      resetItem,
      choosePdpItem,
      product,
    } = this.props;
    const objProduct = JSON.parse(product);
    const roundedPrices = roundPrice(prices);

    const handleOnClick = (e) => {
      if (
        selectedItem?.selectedAttr?.length ===
        selectedItem?.attributes?.length
      ) {
        addToCartPdp(selectedItem);
        resetItem();
        choosePdpItem(objProduct);
      } else {
        e.preventDefault();
        alert("One of the attributes it is not selected");
      }
    };

    const price = roundedPrices?.map((item) => {
      return selectedCurr === item.currency.label ? (
        <p
          className="pdp-amount"
          key={item.currency.label}
        >
          {item.currency.symbol}
          {item.amount}
        </p>
      ) : undefined;
    });

    return (
      <>
        <p className="pdp-price">PRICE:</p>
        {price}
        <button
          className="add-button"
          onClick={(e) => handleOnClick(e)}
          disabled={!inStock}
        >
          ADD TO CART
        </button>
        <div
          className="product-description">
          <Interweave content={description} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCurr: state.selectedCurr.selectedCurr,
    selectedItem: state.selectedItem.selectedItem,
  };
};

const mapDispatchToProps = (disptatch) => {
  return {
    addToCartPdp: (item) => disptatch(addToCartPdp(item)),
    choosePdpItem: (item) => disptatch(choosePdpItem(item)),
    resetItem: () => disptatch(resetItem()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Price);
