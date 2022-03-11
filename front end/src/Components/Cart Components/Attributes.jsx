import React, { Component } from "react";
import "./Attributes.css";

export class Attributes extends Component {
  render() {
    const attributes = this.props.attributes;
    const id = this.props.id;
    const selectedAttr = this.props.selectedAttr

    const mappedAttributes = attributes?.map((attr, index) => {
      return (
        <div key={attr.id}>
          {/* attribute name */}
          <p className="cart-attr">{attr.name}:</p>

          {/* attribute representation */}
          <div className="swatch-flex">
            {attributes[index].items.map((itemAttr) => (
              <div key={itemAttr.id}>
                <div
                  className={
                    selectedAttr?.indexOf(
                      id.concat(" ", attributes[index].id, ":", itemAttr.id)
                    ) === -1 && attributes[index].type === "swatch"
                      ? "cart-box-swatch cart-not-Selected-Swatch"
                      : selectedAttr?.indexOf(
                          id.concat(" ", attributes[index].id, ":", itemAttr.id)
                        ) !== -1 && attributes[index].type !== "swatch"
                      ? "cart-box cart-Is-Selected"
                      : attributes[index].type === "swatch"
                      ? "cart-box-swatch"
                      : "cart-box"
                  }
                  style={{
                    backgroundColor:
                      attributes[index].type === "swatch"
                        ? itemAttr.value
                        : undefined,
                  }}
                >
                  {attributes[index].type === "swatch" ? "" : itemAttr.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    });

    return <>{mappedAttributes}</>;
  }
}

export default Attributes;
