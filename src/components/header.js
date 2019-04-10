import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

const OuterWrapper = styled.header`
  background: slategray;
  margin-bottom: 1.45rem;
`;

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.4rem 1.08rem;
`;

const Headline = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
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
      <OuterWrapper>
        <InnerWrapper>
          <Headline>
            <StyledLink to="/">{data.site.siteMetadata.title}</StyledLink>
          </Headline>
        </InnerWrapper>
      </OuterWrapper>
    )}
  />
);

export default Header;
