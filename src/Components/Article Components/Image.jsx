import React, { Component } from "react";
import "./Image.css";
import { connect } from "react-redux";
import {
  addToCart,
  resetItem,
  chooseItem,
} from "../../Actions/actions";
import EmptyCart from "../../EmptyCart.png";

export class Image extends Component {

  render() {
    
    const img = this.props.img;
    const inStock = this.props.inStock;
    const name = this.props.name;
    const brand = this.props.brand;
    const id = this.props.id;
    const item = JSON.parse(this.props.item);

    const handleOnclick = (e) => {
      if (
        this.props.selectedItem?.hasOwnProperty(
          "selectedAttr"
        ) === false
      ) {
        e.preventDefault();
        alert("One of the attributes it is not selected");
      } else if (
        this.props.selectedItem?.attributes?.length ===
        this.props.selectedItem?.selectedAttr?.length
      ) {
        this.props.addToCart(e, this.props.selectedItem);
        this.props.resetItem();
        this.props.chooseItem(e, item);
      } else {
        e.preventDefault();
        alert("One of the attributes it is not selected");
      }
    };

    return (
      <>
        <div id={id} className="image">
          <img
            id={id}
            src={img}
            className="article-image"
            alt={id}
            width="auto"
            height="330px"
          />
          {!inStock && (
            <div className="image-text">OUT OF STOCK</div>
          )}
          {this.props.showOtherAttr && (
            <button
              id={id}
              onClick={(e) => handleOnclick(e)}
              className="addBtn"
              disabled={!inStock}
            >
              <img src={EmptyCart} alt="" id={id} />
            </button>
          )}
        </div>
        <span className="art-name" id={id}>
          <p>
            {brand} {name}
          </p>
        </span>
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
    addToCart: (e, item) => dispatch(addToCart(e, item)),
    chooseItem: (e, item) => dispatch(chooseItem(e, item)),
    resetItem: () => dispatch(resetItem()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);
