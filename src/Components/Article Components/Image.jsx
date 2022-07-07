import React, { PureComponent } from "react";
import "./Image.css";
import { connect } from "react-redux";
import {
  addToCart,
  resetItem,
  chooseItem,
} from "../../Actions/actions";
import EmptyCart from "../../EmptyCart.png";

export class Image extends PureComponent {
  render() {
    const {
      img,
      inStock,
      name,
      brand,
      id,
      item,
      selectedItem,
      addToCart,
      resetItem,
      chooseItem,
      showOtherAttr,
    } = this.props;

    const itemObj = JSON.parse(item);

    const handleOnclick = (e) => {
      if (
        selectedItem?.hasOwnProperty("selectedAttr") ===
        false
      ) {
        e.preventDefault();
        alert("One of the attributes it is not selected");
      } else if (
        selectedItem?.attributes?.length ===
        selectedItem?.selectedAttr?.length
      ) {
        addToCart(e, selectedItem);
        resetItem();
        chooseItem(e, itemObj);
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
          {showOtherAttr && (
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
