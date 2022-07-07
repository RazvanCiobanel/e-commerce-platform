import React, { PureComponent } from "react";
import "./Carousel.css";
import { connect } from "react-redux";
import {
  increaseQuantity,
  removeFromCart,
  decreaseQuantity,
} from "../../Actions/actions";

export class Carousel extends PureComponent {

  render() {
    
    const {
      newId,
      quantity,
      gallery,
      current,
      id,
      removeFromCart,
      decreaseQuantity,
      increaseQuantity,
      prevSlide,
      nextSlide,
    } = this.props;
    let visible = gallery?.length <= 1 ? false : true;

    const handleDecr = (e) => {
      if (quantity === 1) {
        removeFromCart(e);
      } else {
        decreaseQuantity(e);
      }
    };

    const mappedGallery = gallery?.map((img, i) => {
      return (
        <div key={img}>
          {
            <div>
              {i === current && (
                <img
                  src={img}
                  alt={id}
                  className="cart-image"
                />
              )}
            </div>
          }
        </div>
      );
    });

    return (
      <>
        <div className="carousel-div">
          <div className="cart-quantity">
            <div
              onClick={(e) => increaseQuantity(e)}
              id={newId}
              className="increment-decrement"
            >
              +
            </div>
            <div className="quantity">{quantity}</div>
            <div
              onClick={(e) => handleDecr(e)}
              id={newId}
              className="increment-decrement"
            >
              -
            </div>
          </div>
          <div className="carousel">
            {visible && (
              <>
                <span
                  onClick={prevSlide}
                  className="left-arrow"
                >
                  {"<"}
                </span>
                <span
                  onClick={nextSlide}
                  className="right-arrow"
                >
                  {">"}
                </span>
              </>
            )}
            {mappedGallery}
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    increaseQuantity: (e) => dispatch(increaseQuantity(e)),
    decreaseQuantity: (e) => dispatch(decreaseQuantity(e)),
    removeFromCart: (e) => dispatch(removeFromCart(e)),
  };
};

export default connect(null, mapDispatchToprops)(Carousel);
