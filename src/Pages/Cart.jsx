import React, { PureComponent } from "react";
import "./Cart.css";
import { connect } from "react-redux";
import CartItem from "../Components/Cart Components/CartItem";
import key from "weak-key";

export class Cart extends PureComponent {

  render() {
    
    const {cart} = this.props

    const cartItem = cart?.map((item, i) => {
      return (
        <div key={key(item)}>
          <CartItem
            id={item.id}
            brand={item.brand}
            name={item.name}
            gallery={item.gallery}
            attributes={item.attributes}
            prices={item.prices}
            selectedAttr={item.selectedAttr}
            i={i}
            quantity={item.quantity}
          />
        </div>
      );
    });

    return (
      <section
        className="cart-section"
        onClick={this.props.hideMiniCart}
      >
        {this.props.isVisible && (
          <div className="backdrop"></div>
        )}
        <h1 className="cart-page">CART</h1>
        <hr />
        {cart && cartItem}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart.cartItems,
  };
};

export default connect(mapStateToProps)(Cart);
