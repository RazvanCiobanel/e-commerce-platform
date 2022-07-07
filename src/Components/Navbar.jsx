import React, { PureComponent } from "react";
import "./Navbar.css";
import { connect } from "react-redux";
import { getCurrencies } from "../Actions/actions";
import Select from "./Navbar components/Select";
import DropDown from "./Navbar components/DropDown";
import NavLinks from "./Navbar components/NavLinks";
import CartLogo from "./Navbar components/CartLogo";

export class Navbar extends PureComponent {
  componentDidMount() {
    this.props.getCurrencies();
  }

  render() {
    const { 
      hideMiniCart, 
      showMiniCart, 
      isVisible 
    } = this.props;

    return (
      <nav>
        <NavLinks hideMiniCart={hideMiniCart} />
        <div className="cart-currency">
          <div className="my-select">
            <Select />
            <CartLogo
              hideMiniCart={hideMiniCart}
              showMiniCart={showMiniCart}
            />
          </div>
          <DropDown
            hideMiniCart={hideMiniCart}
            isVisible={isVisible}
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
