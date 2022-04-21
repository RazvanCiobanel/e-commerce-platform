import React, { Component } from "react";
import "./DropDownItem.css";
import DrdItemPrice from "./DrdItemPrice";
import DrdItemAttr from "./DrdItemAttr";
import DrdItemImage from "./DrdItemImage";

export class DropDownItem extends Component {
  render() {
    return (
      <div className="drd-item">
        <div className="drd-description">
          <DrdItemPrice
            brand={this.props.brand}
            name={this.props.name}
            prices={this.props.prices}
          />
         <DrdItemAttr
          i={this.props.i}
          id={this.props.id}
          quantity={this.props.quantity}
          gallery={this.props.gallery}
          selectedAttr = {this.props.selectedAttr}
          attributes={this.props.attributes}
        /> 
        </div>        
        <DrdItemImage
          id={this.props.id}
          i={this.props.i}
          quantity={this.props.quantity}
          gallery={this.props.gallery}
        />
      </div>
    );
  }
}

export default DropDownItem;
