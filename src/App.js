import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PDP from "./Pages/PDP";
import PLPAll from "./Pages/PLPAll";
import Cart from "./Pages/Cart";
import PLP from "./Pages/PLP";
import { connect } from "react-redux";
import { getCatNames } from "./Actions/actions";

export class App extends Component {
  state = {
    isVisible: false,
  };

  async componentDidMount() {
    this.props.getCatNames();
  }

  render() {
    const showMiniCart = () => {
      this.setState({
        isVisible: true,
      });
    };

    const hideMiniCart = () => {
      if (this.state.isVisible === true) {
        this.setState({
          isVisible: false,
        });
      }
    };

    return (
      <div className="App">
        <Navbar
          showMiniCart={showMiniCart}
          isVisible={this.state.isVisible}
          hideMiniCart={hideMiniCart}
        />

        <Switch>
          <Route exact path="/cart">
            <Cart
              isVisible={this.state.isVisible}
              hideMiniCart={hideMiniCart}
            />
          </Route>
          <Route exact path="/">
            <PLPAll
              isVisible={this.state.isVisible}
              hideMiniCart={hideMiniCart}
            />
          </Route>
          <Route exact path="/pdp/:id">
            <PDP
              isVisible={this.state.isVisible}
              hideMiniCart={hideMiniCart}
            />
          </Route>
          <Route
            path="/plp/:name"
            render={(props) => (
              <PLP
                key={props.match.params.name}
                {...props}
                isVisible={this.state.isVisible}
                hideMiniCart={hideMiniCart}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCatNames: () => dispatch(getCatNames()),
  };
};

export default connect(null, mapDispatchToProps)(App);
