import React, { PureComponent } from "react";
import "./Article.css";
import { connect } from "react-redux";
import { chooseItem, resetItem } from "../Actions/actions";
import Image from "./Article Components/Image";
import Attributes from "./Article Components/Attributes";
import Price from "./Article Components/Price";

class Article extends PureComponent {
  state = {
    showOtherAttr: false,
  };

  render() {

    const {
      inStock,
      id,
      item,
      chooseItem,
      name,
      resetItem,
      attributes,
      prices,
      selectedItem,
      img,
      brand,
    } = this.props;

    const { showOtherAttr } = this.state;
    const itemObj = JSON.parse(item);

    const cssClass = inStock ? "in card" : "out card";

    const displayOtherAttr = () => {
      if (showOtherAttr === false) {
        this.setState({
          showOtherAttr: true,
        });
      }
    };

    const hideOtherAttr = () => {
      if (showOtherAttr === true) {
        this.setState({
          showOtherAttr: false,
        });
      }
    };

    const handleEnter = (e) => {
      displayOtherAttr();
      chooseItem(e, itemObj);
    };

    const handleOver = (e) => {
      if (selectedItem?.id === "") {
        displayOtherAttr();
        chooseItem(e, itemObj);
      }
    };

    const handleLeave = () => {
      hideOtherAttr();
      resetItem();
    };

    return (
      <div
        className={cssClass}
        onMouseEnter={(e) => handleEnter(e)}
        onMouseOver={(e) => handleOver(e)}
        onMouseLeave={handleLeave}
        id={id}
      >
        <Image
          id={id}
          img={img}
          inStock={inStock}
          brand={brand}
          name={name}
          showOtherAttr={showOtherAttr}
          item={item}
        />
        <Price prices={prices} id={id} />
        <Attributes
          attributes={attributes}
          id={id}
          showOtherAttr={showOtherAttr}
          inStock={inStock}
        />
      </div>
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
    chooseItem: (e, item) => dispatch(chooseItem(e, item)),
    resetItem: () => dispatch(resetItem()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
