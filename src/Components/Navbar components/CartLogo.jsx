import React, { Component } from "react";
import "./CartLogo.css";
import { connect } from "react-redux";
import cartLogo from "../../cart.jpg";

export class CartLogo extends Component {

  render() {
    
    const quantity = this.props.cart.totalQuantity;

    const displaQuantity =
      quantity === 0 ? (
        <></>
      ) : (
        <div className="cart-size">{quantity}</div>
      );

    return (
      <div
        className="logo"
        onClick={this.props.hideMiniCart}
      >
        <img
          onClick={this.props.showMiniCart}
          src={cartLogo}
          alt="cart"
          className="cart"
        />
        {displaQuantity}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(CartLogo);
