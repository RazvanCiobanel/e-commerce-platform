import React, { PureComponent } from "react";
import "./Attributes.css";
import { colorFirst } from "../../Utils/appUtils";

export class Attributes extends PureComponent {
  render() {

    const { attributes, id, selectedAttr } = this.props;
    const changedOrder = colorFirst(attributes);

    const mappedAttributes = changedOrder?.map(
      (attr, index) => {
        return (
          <div key={attr.id}>
            {/* attribute name */}
            <p className="cart-attr">{attr.name}:</p>

            {/* attribute representation */}
            <div className="swatch-flex">
              {changedOrder[index].items.map((itemAttr) => (
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
                      ) === -1 &&
                      changedOrder[index].type === "swatch"
                        ? "cart-box-swatch cart-not-Selected-Swatch"
                        : selectedAttr?.indexOf(
                            id.concat(
                              " ",
                              changedOrder[index].id,
                              ":",
                              itemAttr.id
                            )
                          ) !== -1 &&
                          changedOrder[index].type !==
                            "swatch"
                        ? "cart-box cart-Is-Selected"
                        : changedOrder[index].type ===
                          "swatch"
                        ? "cart-box-swatch"
                        : "cart-box"
                    }
                    style={{
                      backgroundColor:
                        changedOrder[index].type ===
                        "swatch"
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
      }
    );

    return <>{mappedAttributes}</>;
  }
}

export default Attributes;
