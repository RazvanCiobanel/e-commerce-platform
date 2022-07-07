import React, { PureComponent } from "react";
import "./CartLogo.css";
import { connect } from "react-redux";
import cartLogo from "../../cart.jpg";

export class CartLogo extends PureComponent {

  render() {
    
    const {quantity, hideMiniCart,showMiniCart} = this.props
    

    const displaQuantity =
      quantity === 0 ? (
        <></>
      ) : (
        <div className="cart-size">{quantity}</div>
      );

    return (
      <div
        className="logo"
        onClick={hideMiniCart}
      >
        <img
          onClick={showMiniCart}
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
    quantity: state.cart.cart.totalQuantity,
  };
};

export default connect(mapStateToProps)(CartLogo);
