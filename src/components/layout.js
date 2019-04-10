import React from "react";
import PropTypes from "prop-types";
import { GlobalStyle } from "../theme/globalStyle";
import styled from "styled-components";

import Header from "./header";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.08rem 1.45rem;
  padding-top: 0;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <Wrapper>
      <main>{children}</main>
      <footer>
        &copy; {new Date().getFullYear()}, Build with {` `} <a href="https://www.gatsbyjs.olrg">Gats</a>
      </footer>
    </Wrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
