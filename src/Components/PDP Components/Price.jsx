import React, { Component } from "react";
import "./Price.css";
import { connect } from "react-redux";
import DOMPurify from "dompurify";
import {
  addToCartPdp,
  resetItem,
  choosePdpItem,
} from "../../Actions/actions";
import { roundPrice } from "../../Utils/appUtils";

export class Price extends Component {

  render() {
    
    const prices = this.props.prices;
    const inStock = this.props.inStock;
    const selectedCurr = this.props.selectedCurr;
    const product = JSON.parse(this.props.product);
    const description = this.props.description;
    const roundedPrices = roundPrice(prices);

    const handleOnClick = (e) => {
      if (
        this.props.selectedItem?.selectedAttr?.length ===
        this.props.selectedItem?.attributes?.length
      ) {
        this.props.addToCartPdp(this.props.selectedItem);
        this.props.resetItem();
        this.props.choosePdpItem(product);
      } else {
        e.preventDefault();
        alert("One of the attributes it is not selected");
      }
    };

    const price = roundedPrices?.map((item) => {
      return selectedCurr === item["currency"]["label"] ? (
        <p
          className="pdp-amount"
          key={item["currency"]["label"]}
        >
          {item["currency"]["symbol"]}
          {item["amount"]}{" "}
        </p>
      ) : undefined;
    });

    return (
      <>
        <p className="pdp-price">PRICE:</p>
        {price}
        <button
          onClick={(e) => handleOnClick(e)}
          disabled={!inStock}
        >
          ADD TO CART
        </button>
        <div
          className="product-description"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(description),
          }}
        ></div>
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
