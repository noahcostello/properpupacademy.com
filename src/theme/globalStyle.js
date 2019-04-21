import { createGlobalStyle } from "styled-components";
import "../fonts/fonts.css";
import "normalize.css";
import QuoteSVG from "../assets/quote.svg";

export const GlobalStyle = createGlobalStyle`

:root {
  --pup-blue: #217577;
  --pup-purple: #494866;
}

html{
  font-family: "dinnext-regular", serif;
  color: #444;
  font-size: 17px;
    @media (max-width: 500px) {
      font-size: 80%;
    }
  }
 body {
    padding: 0;
    margin: 0;
    background-color: purple;

   background-image: linear-gradient(rgba(222, 226, 233, 1), rgba(221, 214, 223, 1));
  background-attachment: fixed;
  overflow-x: hidden;

  }

  a {
    text-decoration: none;
    color: purple;

    &:visited {
      color: purple;
    }

    &:hover {
      color: magenta;
    }
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
  h1 {
    font-family: "marinaio-medium";
    letter-spacing: .06rem;
    color: #5d4e7c;
  }
  h2 {
    font-family: "marinaio-medium";
    letter-spacing: .06rem;
  }
  p{
    line-height: 1.5;
    letter-spacing: .01rem;
  }

  aside {
    float: right;
    width: 11rem;
    font-weight: bold;
    font-size: 1.25rem;
    padding: 1rem 0 1rem 1.3rem;
    margin: 0 0 0 1rem;
    color: #5e4d7c;
    font-family: "marinaio-medium";
    position: relative;
    border-left: 3px solid #5d4e7c;
    border-radius: 2.8rem;
  }

  blockquote {
    margin: 0; /* gets rid of the default blockquote margin */

    p {
      margin: 0;
      line-height: 1.7;
    }

    &:before {
      color: #8dccca;
      position: absolute;
      content: '';
      background-image: url(${QuoteSVG});
      background-repeat: no-repeat;
      transform-origin: top left;
      top: .3rem;
      left: .3rem;

      display: inline-block;
      z-index: -1;
      width: 5rem;
      height: 4rem;
    }
}
`;
