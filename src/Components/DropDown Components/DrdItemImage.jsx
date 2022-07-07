import React, { PureComponent } from "react";
import "./DrdItemImage.css";
import { connect } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../Actions/actions";

export class DrdItemImage extends PureComponent {
  
  render() {
    const {
      id,
      i,
      quantity,
      gallery,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
    } = this.props;

    const newId = i.toString().concat(id);
    const img = gallery ? gallery[0] : undefined;

    const handleDecr = (e) => {
      if (quantity === 1) {
        removeFromCart(e);
      } else {
        decreaseQuantity(e);
      }
    };

    return (
      <>
        <div className="drd-quantity">
          <div
            onClick={(e) => increaseQuantity(e)}
            id={newId}
            className="drp-incr"
          >
            +
          </div>
          <div className="drp-quantity">{quantity}</div>
          <div
            onClick={(e) => handleDecr(e)}
            id={newId}
            className="drp-decr"
          >
            -
          </div>
        </div>
        <div>
          <img
            src={img}
            className="drd-img"
            height="137px"
            alt=""
          />
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

export default connect(
  null,
  mapDispatchToProps
)(DrdItemImage);
