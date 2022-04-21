import React, { Component } from "react";
import "./Article.css";
import { connect } from "react-redux";
import { chooseItem, resetItem } from "../Actions/actions";
import Image from "./Article Components/Image";
import Attributes from "./Article Components/Attributes";
import Price from "./Article Components/Price";

class Article extends Component {
  state = {
    showOtherAttr: false,
  };

  render() {
    const inStock = this.props.inStock;
    const id = this.props.id;
    const item = JSON.parse(this.props.item);

    const cssClass = inStock ? "in card" : "out card";

    const displayOtherAttr = () => {
      if (this.state.showOtherAttr === false) {
        this.setState({
          showOtherAttr: true,
        });
      }
    };

    const hideOtherAttr = () => {
      if (this.state.showOtherAttr === true) {
        this.setState({
          showOtherAttr: false,
        });
      }
    };

    const handleEnter = (e) => {
      displayOtherAttr();
      this.props.chooseItem(e, item);
    };

    const handleOver = (e) => {
      if (this.props.selectedItem.id === "") {
        displayOtherAttr();
        this.props.chooseItem(e, item);
      }
    };

    const handleLeave = () => {
      hideOtherAttr();
      this.props.resetItem();
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
          id={this.props.id}
          img={this.props.img}
          inStock={this.props.inStock}
          brand={this.props.brand}
          name={this.props.name}
          showOtherAttr={this.state.showOtherAttr}
          item={this.props.item}
        />
        <Price prices={this.props.prices} id={this.props.id} />
        <Attributes
          attributes={this.props.attributes}
          id={this.props.id}
          showOtherAttr={this.state.showOtherAttr}
          inStock={this.props.inStock}
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

export default connect(mapStateToProps, mapDispatchToProps)(Article);
