import React, { PureComponent } from "react";
import "./Attributes.css";
import { connect } from "react-redux";
import { choosePdpAttr } from "../../Actions/actions";
import { colorFirst } from "../../Utils/appUtils";

export class Attributes extends PureComponent {

  render() {
    
    const {
      choosePdpAttr,
      attributes,
      id,
      product,
      inStock,
      selectedItem,
    } = this.props;

    const productObj = JSON.parse(product);
    const changedOrder = colorFirst(attributes);

    const handleAttrClick = (e) => {
      if (inStock) {
        choosePdpAttr(e);
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
                      selectedItem?.selectedAttr?.indexOf(
                        id.concat(
                          " ",
                          changedOrder[index].id,
                          ":",
                          item.id
                        )
                      ) !== -1 &&
                      changedOrder[index].type === "swatch"
                        ? "pdp-box-swatch pdp-Is-Selected-Swatch"
                        : selectedItem?.selectedAttr?.indexOf(
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
                        changedOrder[index].type ===
                        "swatch"
                          ? item.value
                          : undefined,
                    }}
                    disabled={!inStock}
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
        <p className="pdp-brand">{productObj?.brand}</p>
        <p className="pdp-name">{productObj?.name}</p>
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
