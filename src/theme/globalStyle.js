import { createGlobalStyle } from "styled-components";
import "../fonts/fonts.css";
import "normalize.css";
import QuoteSVG from "../assets/quote.svg";
import { size } from "./sizes.js";

export const GlobalStyle = createGlobalStyle`

:root {
  --pup-blue: #217577;
  --pup-purple: #494866;
}

html{
  font-family: "dinnext-regular", sans-serif;
  color: #444;
  font-size: 17px;

  @media (max-width: ${size.tablet}) {
      font-size: 90%;
  }
  @media (max-width: ${size.mobile})  {
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
      color: var(--pup-blue);
    }
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
  h1 {
    font-family: "marinaio-medium";
    letter-spacing: .06rem;
    color: var(--pup-purple);
  }
  h2 {
    font-family: "marinaio-medium";
    letter-spacing: .06rem;
    color: var(--pup-purple);
    font-size: 2.1rem;
    margin: .5em 0;
  }
  p{
    line-height: 1.6;
    font-size: 1.1rem;
    letter-spacing: .02em;
  }

  aside {
    float: right;
    width: 12rem;
    font-weight: bold;
    padding: 1rem 0 .5rem 1.3rem;
    margin: 0 0 0 1rem;
    color: #5e4d7c;
    font-family: "marinaio-medium";
    position: relative;
    /* border-left: 3px solid #5d4e7c; */
    /* border-radius: 2.8rem; */
  }

  blockquote {
    margin: 0; /* gets rid of the default blockquote margin */

    p {
      margin: 0;
      font-size: 1.3rem;
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
