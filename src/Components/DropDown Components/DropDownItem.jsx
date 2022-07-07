import React, { PureComponent } from "react";
import "./DropDownItem.css";
import DrdItemPrice from "./DrdItemPrice";
import DrdItemAttr from "./DrdItemAttr";
import DrdItemImage from "./DrdItemImage";

export class DropDownItem extends PureComponent {

  render() {
    
    const {
      brand,
      name,
      prices,
      i,
      id,
      quantity,
      gallery,
      selectedAttr,
      attributes,
    } = this.props;

    return (
      <div className="drd-item">
        <div className="drd-description">
          <DrdItemPrice
            brand={brand}
            name={name}
            prices={prices}
          />
          <DrdItemAttr
            i={i}
            id={id}
            quantity={quantity}
            gallery={gallery}
            selectedAttr={selectedAttr}
            attributes={attributes}
          />
        </div>
        <DrdItemImage
          id={id}
          i={i}
          quantity={quantity}
          gallery={gallery}
        />
      </div>
    );
  }
}

export default DropDownItem;
