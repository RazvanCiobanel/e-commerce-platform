import React, { PureComponent } from "react";
import "./Buttons.css";
import { connect } from "react-redux";
import { resetCart } from "../../Actions/actions";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { totalSelector } from "../../Selectors/totalSelector";


const CartLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #1d1f22;
  margin-left: 13px;

  &:focus,
  &:active {
    text-decoration: none;
    color: #1d1f22;
  }
`;

export class Buttons extends PureComponent {
  render() {
    
    const { 
      cartItems, 
      currencies, 
      selectedCurr,
      hideMiniCart,
      resetCart,
      total, 
    } = this.props;
    
    const liknClass = cartItems?.length === 0 ? "disabled" : "";
    

    const mappedCurr = currencies?.map((item) => {
      return item.label === selectedCurr ? (
        <div className="total-amount" key={item.label}>
          {item.symbol}
          {total}
        </div>
      ) : undefined;
    });

    return (
      <>
        <div className="total">
          <div className="total-text">Total</div>
          {mappedCurr}
        </div>
        <div className="buttons">
          <CartLink
            to="/cart"
            replace
            className={liknClass}
          >
            <button
              className="view-bag"
              onClick={hideMiniCart}
            >
              VIEW BAG
            </button>
          </CartLink>
          <button
            onClick={resetCart}
            className="check-out"
          >
            CHECK OUT
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cart.cartItems,
    currencies: state.currencies.items,
    selectedCurr: state.selectedCurr.selectedCurr,
    total: totalSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetCart: () => dispatch(resetCart()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Buttons)
);
