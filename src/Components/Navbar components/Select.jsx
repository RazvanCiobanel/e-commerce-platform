import React, { Component } from "react";
import "./Select.css";
import { connect } from "react-redux";
import { changeCurr } from "../../Actions/actions";

export class Select extends Component {
  state = {
    visible: false,
  };

  render() {
    const handleOnChange = () => {
      if (this.state.visible === false) {
        this.setState({
          visible: true,
        });
      } else {
        this.setState({
          visible: false,
        });
      }
    };

    const shadow = this.state.visible
      ? "select_options shadow"
      : "select_options";

    const currency = this.props.currencies?.map((item) => {
      return (
        <li className="select_option" key={item.label}>
          <input
            onChange={(e) => this.props.changeCurr(e)}
            className="select_input"
            type="radio"
            name="currency"
            value={item.label}
            id={item.label}
          />
          <label className="select_label" htmlFor={item.label}>
            {item.symbol} {item.label}
          </label>
        </li>
      );
    });

    return (
      <form onChange={handleOnChange}>
        <ul className="select">
          <li>
            <input
              className="select_close"
              type="radio"
              name="currency"
              id="awesomeness-close"
              value=""
            />
            <div className="select_label select_label-placeholder">$</div>
          </li>
          <li className="select_items">
            <input
              className="select_expand"
              type="radio"
              name="currency"
              id="awesomeness-opener"
            />
            <label
              className="select_closeLabel"
              htmlFor="awesomeness-close"
            ></label>
            <ul className={shadow}>{currency}</ul>
            <label
              className="select_expandLabel"
              htmlFor="awesomeness-opener"
            ></label>
          </li>
        </ul>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currencies: state.currencies.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurr: (e) => dispatch(changeCurr(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
