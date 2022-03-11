import React, { Component } from "react";
import "./PDP.css";
import { connect } from "react-redux";
import { client } from "..";
import { choosePdpItem, resetItem } from "../Actions/actions";
import { GET_PRODUCT_QUERY } from "../GraphQl/Queries";
import { withRouter } from "react-router-dom";
import Thumbnail from "../Components/PDP Components/Thumbnail";
import Attributes from "../Components/PDP Components/Attributes";
import Price from "../Components/PDP Components/Price";

export class PDP extends Component {
  state = {
    product: {
      id: "",
      name: "",
      inStock: true,
      gallery: [],
      description: "",
      category: "",
      attributes: [],
      prices: [],
      brand: "",
    },
    image: "",
  };

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const res = await client.query({
      query: GET_PRODUCT_QUERY,
      variables: {
        id: id,
      },
      fetchPolicy: "no-cache",
    });
    this.setState({
      product: { ...this.state.product, ...res.data.product },
    });

    if (this.state.product) {
      this.props.choosePdpItem(this.state.product);
    }

    if (this.state.product) {
      this.setState({
        image: this.state.product?.gallery[0],
      });
    }
  };

  componentWillUnmount() {
    this.setState({
      product: {},
    });
    this.props.resetItem();
  }

  render() {
    const setImage = (e) => {
      this.setState({
        image: e.target.id,
      });
    };

    return (
      <section className="pdp" onClick={this.props.hideMiniCart}>
        {this.props.isVisible && <div className="backdrop"></div>}
        <Thumbnail
          gallery={this.state.product.gallery}
          inStock={this.state.product.inStock}
          product={JSON.stringify(this.state.product)}
          image={this.state.image}
          setImage={setImage}
        />
        <div className="pdp-description">
          <Attributes
            attributes={this.state.product.attributes}
            id={this.state.product.id}
            product={JSON.stringify(this.state.product)}
            inStock={this.state.product.inStock}
          />
          <Price
            prices={this.state.product.prices}
            inStock={this.state.product.inStock}
            product={JSON.stringify(this.state.product)}
            description={this.state.product.description}
          />
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (disptatch) => {
  return {
    choosePdpItem: (item) => disptatch(choosePdpItem(item)),
    resetItem: () => disptatch(resetItem()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(PDP));
