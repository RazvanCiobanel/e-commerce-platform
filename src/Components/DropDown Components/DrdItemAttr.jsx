import React, { Component } from "react";
import "./DrdItemAttr.css";
import { colorFirst } from "../../Utils/appUtils";

export class DrdItemAttr extends Component {

  render() {
    
    const attributes = this.props.attributes;
    const id = this.props.id;
    const selectedAttr = this.props.selectedAttr;
    const changedOrder = colorFirst(attributes)

    const mappedAttr = changedOrder?.map((attr, index) => {
      return (
        <div key={attr.id}>
          {/* attribute name */}
          <p className="drd-attr">{attr.name}:</p>

          {/* attribute representation */}
          <div className="swatch-flex">
            {changedOrder[index].items?.map((itemAttr) => (
              <div key={itemAttr.id}>
                <div
                  className={
                    selectedAttr?.indexOf(
                      id.concat(
                        " ",
                        changedOrder[index].id,
                        ":",
                        itemAttr.id
                      )
                    ) !== -1
                      ? "drd-box"
                      : selectedAttr?.indexOf(
                          id.concat(
                            " ",
                            changedOrder[index].id,
                            ":",
                            itemAttr.id
                          )
                        ) === -1 &&
                        changedOrder[index].type === "swatch"
                      ? "drd-box swatch-not-selected"
                      : "drd-box not-Selected"
                  }
                  style={{
                    backgroundColor:
                      changedOrder[index].type === "swatch"
                        ? itemAttr.value
                        : undefined,
                  }}
                >
                  {changedOrder[index].type === "swatch"
                    ? ""
                    : itemAttr.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    });

    return <div>{mappedAttr}</div>;
  }
}

export default DrdItemAttr;
