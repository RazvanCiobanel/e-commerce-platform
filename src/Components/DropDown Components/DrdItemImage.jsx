import React, { Component } from "react";
import "./DrdItemImage.css";
import { connect } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../Actions/actions";

export class DrdItemImage extends Component {
  render() {
    const id = this.props.id;
    const i = this.props.i;
    const newId = i.toString().concat(id);
    const quantity = this.props.quantity;
    const gallery = this.props.gallery;
    const img = gallery[0];

    const handleDecr = (e) => {
      if (quantity === 1) {
        this.props.removeFromCart(e);
      } else {
        this.props.decreaseQuantity(e);
      }
    };

    return (
      <>
        <div className="drd-quantity">
          <div
            onClick={(e) => this.props.increaseQuantity(e)}
            id={newId}
            className="drp-incr"
          >
            +
          </div>
          <div className="drp-quantity">{quantity}</div>
          <div onClick={(e) => handleDecr(e)} id={newId} className="drp-decr">
            -
          </div>
        </div>
        <div>
          <img src={img} className="drd-img" height="137px" alt="" />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseQuantity: (e) => dispatch(increaseQuantity(e)),
    decreaseQuantity: (e) => dispatch(decreaseQuantity(e)),
    removeFromCart: (e) => dispatch(removeFromCart(e)),
  };
};

export default connect(null, mapDispatchToProps)(DrdItemImage);
