import React, { PureComponent } from "react";
import "./PLP.css";
import Article from "../Components/Article";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCategory,
  resetCategory,
} from "../Actions/actions";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

export class PLP extends PureComponent {
  async componentDidMount(prevProps) {
    if (
      this.props.match.params !== prevProps?.match.params
    ) {
      const name = this.props.match.params.name;
      this.props.getCategory(name);
    }
  }

  componentWillUnmount() {
    this.props.resetCategory();
  }

  render() {
    const { category, 
            hideMiniCart, 
            isVisible 
          } = this.props;

    const name = category.name[0]
      ?.toUpperCase()
      .concat(category?.name.slice(1));

    const article = category.products?.map((item) => {
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
      <section onClick={hideMiniCart}>
        {isVisible && <div className="backdrop"></div>}
        <h2 className="category-heading">{name}</h2>
        {category && article}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategory: (id) => dispatch(getCategory(id)),
    resetCategory: () => dispatch(resetCategory()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PLP)
);
