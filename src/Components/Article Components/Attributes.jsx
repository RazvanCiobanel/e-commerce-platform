import React, { Component } from "react";
import "./Attributes.css";
import { connect } from "react-redux";
import { choosePlpAttr } from "../../Actions/actions";
import { colorFirst } from "../../Utils/appUtils";

export class Attributes extends Component {

  render() {
    
    const attributes = this.props.attributes;
    const id = this.props.id;
    const inStock = this.props.inStock;
    const changedOrder = colorFirst(attributes);

    const handleAttrClick = (e) => {
      if (inStock) {
        this.props.choosePlpAttr(e);
      } else {
        return undefined;
      }
    };

    const mappedAttr = changedOrder?.map((attr, index) => {
      return (
        <div
          id={id}
          key={attr.id}
          className={
            attr.type === "swatch"
              ? "swatch"
              : attr.type !== "swatch" &&
                this.props.showOtherAttr === false
              ? "hidden"
              : "swatch"
          }
        >
          {/* attribute name */}
          <p id={id}>{attr.name}:</p>

          {/* attribute representation */}
          <div className="swatch-flex">
            {changedOrder[index].items?.map((item) => (
              <div
                key={item.id}
                id={id.concat(
                  " ",
                  changedOrder[index].id,
                  ":",
                  item.id
                )}
              >
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
                      ? "art-box art-Is-Selected-Swatch"
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
                      ? "art-box art-Is-Selected"
                      : "art-box"
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
    });

    return <>{attributes && mappedAttr}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    selectedItem: state.selectedItem.selectedItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    choosePlpAttr: (e) => dispatch(choosePlpAttr(e)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Attributes);
