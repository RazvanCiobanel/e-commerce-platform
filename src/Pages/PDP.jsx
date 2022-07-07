import React, { PureComponent } from "react";
import "./PDP.css";
import { connect } from "react-redux";
import { client } from "..";
import {
  choosePdpItem,
  resetItem,
} from "../Actions/actions";
import { GET_PRODUCT_QUERY } from "../GraphQl/Queries";
import { withRouter } from "react-router-dom";
import Thumbnail from "../Components/PDP Components/Thumbnail";
import Attributes from "../Components/PDP Components/Attributes";
import Price from "../Components/PDP Components/Price";

export class PDP extends PureComponent {
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
      product: {
        ...this.state.product,
        ...res.data.product,
      },
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
    
    const { product, image } = this.state;
    const { hideMiniCart, isVisible } = this.props;
    const {
      id,
      gallery,
      inStock,
      attributes,
      prices,
      description,
    } = product;

    const setImage = (e) => {
      this.setState({
        image: e.target.id,
      });
    };

    return (
      <section className="pdp" onClick={hideMiniCart}>
        {isVisible && <div className="backdrop"></div>}
        <Thumbnail
          gallery={gallery}
          inStock={inStock}
          product={JSON.stringify(product)}
          image={image}
          setImage={setImage}
        />
        <div className="pdp-description">
          <Attributes
            attributes={attributes}
            id={id}
            product={JSON.stringify(product)}
            inStock={inStock}
          />
          <Price
            prices={prices}
            inStock={inStock}
            product={JSON.stringify(product)}
            description={description}
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

export default withRouter(
  connect(null, mapDispatchToProps)(PDP)
);
