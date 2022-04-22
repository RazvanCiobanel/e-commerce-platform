import React, { Component } from "react";
import "./Attributes.css";
import { connect } from "react-redux";
import { choosePdpAttr } from "../../Actions/actions";
import { colorFirst } from "../../Utils/appUtils";

export class Attributes extends Component {

  render() {
    
    const attributes = this.props.attributes;
    const id = this.props.id;
    const product = JSON.parse(this.props.product);
    const inStock = this.props.inStock;
    const changedOrder = colorFirst(attributes)

    const handleAttrClick = (e) => {
      if (inStock) {
        this.props.choosePdpAttr(e);
      } else {
        return undefined;
      }
    };

    const mappedAttributes = changedOrder?.map(
      (attr, index) => {
        return (
          <div key={attr.id}>
            {/* attribute name */}
            <p className="pdp-attr">{attr.name}:</p>

            {/* attribute representation */}
            <div className="swatch-flex">
              {changedOrder[index].items?.map((item) => (
                <div key={item.id}>
                  <div
                    onClick={(e) => handleAttrClick(e)}
                    className={
                      this.props.selectedItem?.selectedAttr?.indexOf(
                        id.concat(
                          " ",
                          changedOrder[index].id,
                          ":",
                          item.id
                        )
                      ) !== -1 &&
                      changedOrder[index].type === "swatch"
                        ? "pdp-box-swatch pdp-Is-Selected-Swatch"
                        : this.props.selectedItem?.selectedAttr?.indexOf(
                            id.concat(
                              " ",
                              changedOrder[index].id,
                              ":",
                              item.id
                            )
                          ) !== -1 &&
                          changedOrder[index].type !==
                            "swatch"
                        ? "pdp-box pdp-Is-Selected"
                        : changedOrder[index].type ===
                          "swatch"
                        ? "pdp-box-swatch"
                        : "pdp-box"
                    }
                    id={id.concat(
                      " ",
                      changedOrder[index].id,
                      ":",
                      item.id
                    )}
                    style={{
                      backgroundColor:
                        changedOrder[index].type === "swatch"
                          ? item.value
                          : undefined,
                    }}
                  >
                    {changedOrder[index].type === "swatch"
                      ? ""
                      : item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
    );

    return (
      <>
        <p className="pdp-brand">{product?.brand}</p>
        <p className="pdp-name">{product?.name}</p>
        <div className="pdp-attributes">
          {mappedAttributes}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedItem: state.selectedItem.selectedItem,
  };
};

const mapDispatchToProps = (disptatch) => {
  return {
    choosePdpAttr: (e) => disptatch(choosePdpAttr(e)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Attributes);
