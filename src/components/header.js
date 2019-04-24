import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Logo from "../assets/logo.inline.svg";

const HeaderWrapper = styled.header`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
`;

const LogoLink = styled(Link)`
  width: 16rem;
  display: block;
  margin: 0 auto;
  padding: 3rem 0;
  border: none;
`;

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <LogoLink to="/" title={data.site.siteMetadata.title}>
          <Logo />
        </LogoLink>
      </HeaderWrapper>
    )}
  />
);

export default Header;
