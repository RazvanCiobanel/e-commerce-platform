import React, { PureComponent } from "react";
import "./DropDown.css";
import { connect } from "react-redux";
import key from "weak-key";
import { withRouter } from "react-router-dom";
import DropDownItem from "../DropDown Components/DropDownItem";
import Buttons from "../DropDown Components/Buttons";

export class DropDown extends PureComponent {

  render() {
    
    const { 
      cart, 
      isVisible, 
      quantity, 
      hideMiniCart 
    } = this.props;

    const drdClass = isVisible
      ? "dropdown-content"
      : "hide";

    const item = cart?.map((item, i) => {
      return (
        <div key={key(item)} className="dropdown-item">
          <DropDownItem
            id={item?.id}
            brand={item?.brand}
            name={item?.name}
            gallery={item?.gallery}
            attributes={item?.attributes}
            prices={item?.prices}
            selectedAttr={item?.selectedAttr}
            i={i}
            quantity={item?.quantity}
          />
        </div>
      );
    });

    return (
      <div className="dropdown">
        <div className={drdClass}>
          <span className="dropdown-text">
            <p>
              <b>My Bag</b>, {quantity} items
            </p>
          </span>

          {cart && item}
          <Buttons hideMiniCart={hideMiniCart} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart.cartItems,
    quantity: state.cart.cart.totalQuantity,
  };
};

export default withRouter(
  connect(mapStateToProps)(DropDown)
);
