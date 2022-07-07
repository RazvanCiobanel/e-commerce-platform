import React, { PureComponent } from "react";
import "./CartItem.css";
import Price from "./Price";
import Attributes from "./Attributes";
import Carousel from "./Carousel";

export class CartItem extends PureComponent {
  state = {
    current: 0,
  };

  render() {
    
    const {
      id,
      gallery,
      i,
      prices,
      name,
      brand,
      attributes,
      selectedAttr,
      quantity,
    } = this.props;
    const { current } = this.state;

    const newId = i.toString().concat(id);

    const nextSlide = () => {
      let length = gallery?.length;
      let copy = current;
      this.setState({
        current: copy === length - 1 ? 0 : copy + 1,
      });
    };

    const prevSlide = () => {
      let length = gallery?.length;
      let copy = current;
      this.setState({
        current: copy === 0 ? length - 1 : copy - 1,
      });
    };

    return (
      <>
        <div className="cart-product" id={newId}>
          <div className="description">
            <Price
              prices={prices}
              name={name}
              brand={brand}
            />
            <Attributes
              attributes={attributes}
              id={id}
              selectedAttr={selectedAttr}
            />
          </div>
          <Carousel
            newId={newId}
            quantity={quantity}
            gallery={gallery}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            current={current}
            id={id}
          />
        </div>
        <hr />
      </>
    );
  }
}

export default CartItem;
