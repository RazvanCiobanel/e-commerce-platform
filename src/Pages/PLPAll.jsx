import React, { Component } from "react";
import "./PLP.css";
import Article from "../Components/Article";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAll } from "../Actions/actions";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

export class PLPAll extends Component {
  async componentDidMount() {
    this.props.getAll();
  }

  render() {
    const all = this.props.all;

    const name = this.props?.all?.name[0]
      ?.toUpperCase()
      .concat(this.props.all.name?.slice(1));

    const article = this.props.all?.products?.map((item) => {
      return (
        <StyledLink
          to={{
            pathname: `/pdp/${item.id}`,
          }}
          key={item.id}
          replace
        >
          <Article
            key={item.id}
            name={item.name}
            inStock={item.inStock}
            img={item.gallery[0]}
            prices={item.prices}
            id={item.id}
            brand={item.brand}
            attributes={item.attributes}
            gallery={item.gallery}
            item={JSON.stringify(item)}
          />
        </StyledLink>
      );
    });

    return (
      <section onClick={this.props.hideMiniCart}>
        {this.props.isVisible && <div className="backdrop"></div>}
        <h2 className="category-heading">{name}</h2>
        {all && article}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    all: state.all.all,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => dispatch(getAll()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PLPAll));
