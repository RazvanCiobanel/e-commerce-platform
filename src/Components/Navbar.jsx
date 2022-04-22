import React, { Component } from "react";
import "./Navbar.css";
import { connect } from "react-redux";
import { getCurrencies } from "../Actions/actions";
import Select from "./Navbar components/Select";
import DropDown from "./Navbar components/DropDown";
import NavLinks from "./Navbar components/NavLinks";
import CartLogo from "./Navbar components/CartLogo";

export class Navbar extends Component {

  componentDidMount() {
    this.props.getCurrencies();
  }

  render() {
    
    return (
      <nav>
        <NavLinks hideMiniCart={this.props.hideMiniCart} />
        <div className="cart-currency">
          <div className="my-select">
            <Select />
            <CartLogo
              hideMiniCart={this.props.hideMiniCart}
              showMiniCart={this.props.showMiniCart}
            />
          </div>
          <DropDown
            hideMiniCart={this.props.hideMiniCart}
            isVisible={this.props.isVisible}
          />
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrencies: () => dispatch(getCurrencies()),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
