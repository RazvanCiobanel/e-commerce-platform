import React, { PureComponent } from "react";
import "./NavLinks.css";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import brandicon from "../../brandIcon.jpg";
import { connect } from "react-redux";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1d1f22;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;
  text-transform: uppercase;

  &:focus,
  &:active {
    text-decoration: none;
    color: rgba(84, 229, 130, 255);
    border-bottom: 1px solid rgba(84, 229, 130, 255);
    padding-bottom: 30px;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
  }
`;

export class NavLinks extends PureComponent {

  render() {
    
    const {catNames, hideMiniCart} = this.props

    
    const names = catNames?.map((item) => {
      if (item.name === "all") {
        return (
          <li className="div-links" key={item.name}>
            <StyledLink to="/" replace>
              {item.name}
            </StyledLink>
          </li>
        );
      } else {
        return (
          <li className="div-links" key={item.name}>
            <StyledLink
              to={{
                pathname: `/plp/${item.name}`,
              }}
              replace
            >
              {item.name}
            </StyledLink>
          </li>
        );
      }
    });

    return (
      <>
        <div
          className="nav-links"
          onClick={hideMiniCart}
        >
          <ul className="navbar">{names}</ul>
        </div>
        <div
          className="brand-logo"
          onClick={hideMiniCart}
        >
          <img src={brandicon} alt="brand icon" />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catNames: state.names.names,
  };
};

export default withRouter(
  connect(mapStateToProps)(NavLinks)
);
