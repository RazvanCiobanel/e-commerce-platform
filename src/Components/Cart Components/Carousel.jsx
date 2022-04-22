import React, { Component } from "react";
import "./Carousel.css";
import { connect } from "react-redux";
import {
  increaseQuantity,
  removeFromCart,
  decreaseQuantity,
} from "../../Actions/actions";

export class Carousel extends Component {

  render() {
    
    const newId = this.props.newId;
    const quantity = this.props.quantity;
    const gallery = this.props.gallery;
    const current = this.props.current;
    const id = this.props.id;
    let visible = gallery?.length <= 1 ? false : true;

    const handleDecr = (e) => {
      if (quantity === 1) {
        this.props.removeFromCart(e);
      } else {
        this.props.decreaseQuantity(e);
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
              onClick={(e) =>
                this.props.increaseQuantity(e)
              }
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
                  onClick={this.props.prevSlide}
                  className="left-arrow"
                >
                  {"<"}
                </span>
                <span
                  onClick={this.props.nextSlide}
                  className="right-arrow"
                >
                  {" "}
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
