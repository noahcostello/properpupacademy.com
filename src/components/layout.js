import React from "react";
import PropTypes from "prop-types";
import { GlobalStyle } from "../theme/globalStyle";
import styled from "styled-components";
import Header from "./header";
import BackgroundSVG from "../assets/bg.svg";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.08rem 1.45rem;
  padding-top: 0;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundSVG});
  background-position: center;
  background-size: 30rem auto;
  z-index: -1;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Background />
    <Header />
    <Wrapper>
      <main>{children}</main>
      <footer>&copy; {new Date().getFullYear()}, Proper Pup Academy</footer>
    </Wrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
