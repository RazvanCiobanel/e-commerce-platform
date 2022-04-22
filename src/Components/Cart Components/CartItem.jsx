import React, { Component } from "react";
import "./CartItem.css";
import Price from "./Price";
import Attributes from "./Attributes";
import Carousel from "./Carousel";

export class CartItem extends Component {
  
  state = {
    current: 0,
  };

  render() {

    const id = this.props.id;
    const gallery = this.props.gallery;
    const i = this.props.i;
    const newId = i.toString().concat(id);

    const nextSlide = () => {
      let length = gallery?.length;
      let copy = this.state.current;
      this.setState({
        current: copy === length - 1 ? 0 : copy + 1,
      });
    };

    const prevSlide = () => {
      let length = gallery?.length;
      let copy = this.state.current;
      this.setState({
        current: copy === 0 ? length - 1 : copy - 1,
      });
    };

    return (
      <>
        <div className="cart-product" id={newId}>
          <div className="description">
            <Price
              prices={this.props.prices}
              name={this.props.name}
              brand={this.props.brand}
            />
            <Attributes
              attributes={this.props.attributes}
              id={this.props.id}
              selectedAttr={this.props.selectedAttr}
            />
          </div>
          <Carousel
            newId={newId}
            quantity={this.props.quantity}
            gallery={this.props.gallery}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            current={this.state.current}
            id={this.props.id}
          />
        </div>
        <hr />
      </>
    );
  }
}

export default CartItem;
