import React, { PureComponent } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PDP from "./Pages/PDP";
import PLPAll from "./Pages/PLPAll";
import Cart from "./Pages/Cart";
import PLP from "./Pages/PLP";
import { connect } from "react-redux";
import { getCatNames } from "./Actions/actions";

export class App extends PureComponent {
  state = {
    isVisible: false,
  };

  async componentDidMount() {
    this.props.getCatNames();
  }

  render() {

    const {isVisible} = this.state

    const showMiniCart = () => {
      this.setState({
        isVisible: true,
      });
    };

    const hideMiniCart = () => {
      if (isVisible === true) {
        this.setState({
          isVisible: false,
        });
      }
    };

    return (
      <div className="App">
        <Navbar
          showMiniCart={showMiniCart}
          isVisible={isVisible}
          hideMiniCart={hideMiniCart}
        />

        <Switch>
          <Route exact path="/cart">
            <Cart
              isVisible={isVisible}
              hideMiniCart={hideMiniCart}
            />
          </Route>
          <Route exact path="/">
            <PLPAll
              isVisible={isVisible}
              hideMiniCart={hideMiniCart}
            />
          </Route>
          <Route exact path="/pdp/:id">
            <PDP
              isVisible={isVisible}
              hideMiniCart={hideMiniCart}
            />
          </Route>
          <Route
            path="/plp/:name"
            render={(props) => (
              <PLP
                key={props.match.params.name}
                {...props}
                isVisible={isVisible}
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
