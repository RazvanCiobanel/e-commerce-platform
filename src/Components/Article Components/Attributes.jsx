import React, { Component } from "react";
import "./Attributes.css";
import { connect } from "react-redux";
import { choosePlpAttr } from "../../Actions/actions";

export class Attributes extends Component {
  render() {
    const attributes = this.props.attributes;
    const id = this.props.id;
    const inStock = this.props.inStock;

    const handleAttrClick = (e) => {
      if (inStock) {
        this.props.choosePlpAttr(e);
      } else {
        return undefined;
      }
    };

    const mappedAttr = attributes?.map((attr, index) => {
      return (
        <div
          id={id}
          key={attr.id}
          className={
            attr.type === "swatch"
              ? "swatch"
              : attr.type !== "swatch" && this.props.showOtherAttr === false
              ? "hidden"
              : "swatch"
          }
        >
          {/* attribute name */}
          <p id={id}>{attr.name}:</p>

          {/* attribute representation */}
          <div className="swatch-flex">
            {attributes[index].items?.map((item) => (
              <div
                key={item.id}
                id={id.concat(" ", attributes[index].id, ":", item.id)}
              >
                <div
                  onClick={(e) => handleAttrClick(e)}
                  className={
                    this.props.selectedItem?.selectedAttr?.indexOf(
                      id.concat(" ", attributes[index].id, ":", item.id)
                    ) !== -1 && attributes[index].type === "swatch"
                      ? "art-box art-Is-Selected-Swatch"
                      : this.props.selectedItem?.selectedAttr?.indexOf(
                          id.concat(" ", attributes[index].id, ":", item.id)
                        ) !== -1 && attributes[index].type !== "swatch"
                      ? "art-box art-Is-Selected"
                      : "art-box"
                  }
                  id={id.concat(" ", attributes[index].id, ":", item.id)}
                  style={{
                    backgroundColor:
                      attributes[index].type === "swatch"
                        ? item.value
                        : undefined,
                  }}
                >
                  {attributes[index].type === "swatch" ? "" : item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    });

    return (
      <>
        {attributes && mappedAttr}
        <br />
      </>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Attributes);
