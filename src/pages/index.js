import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import SEO from "../components/seo";
import styled from "styled-components";
import IconInsta from "../assets/icon-instagram.inline.svg";
import IconFb from "../assets/icon-facebook.inline.svg";

const StyledImg = styled(Img)`
  width: 60%;
  max-width: 700px;
  box-shadow: 5px 17px 51px 0 rgba(0, 0, 0, 0.25);
  border-radius: 0 3rem;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to right, transparent 80%, Lavender);
    opacity: 0;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
}`;

const TextHolder = styled.div`
  margin-left: -3rem;

  position: relative;

  h1 {
    margin: 0.3rem 0;
    font-size: 2.5rem;
    position: relative;
    background-image: linear-gradient(to bottom right, white, Lavender);
    padding: 0.7rem 0.7rem 0.4rem;
    display: inline-block;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin: 0.3rem 0;
    padding: 0.7rem 0.7rem 0.5rem;
    color: lavender;
    background-image: linear-gradient(to bottom right, #5e4d7c, purple);
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const MainCopy = styled.section`
  margin: 4rem 0;
  padding: 0 3rem;

  h2 {
    text-align: center;
  }
`;

const SocialCta = styled.div`
  position: relative;
  margin: 0.6rem 0;
  text-align: right;
  > span {
    background-image: linear-gradient(to bottom right, #5e4d7c, purple);
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);

    color: lavender;
    display: inline-block;
    padding: 0.15rem 0.5rem 0.08rem;
    margin: 0 0.3rem;
  }

  a {
    margin: 0 0.3rem;
    span {
      margin: 0 0.2rem;
      border-bottom: 1.5px solid #8c65b3;
    }
  }

  .icon {
    height: 1.2em;
    vertical-align: bottom;
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={["dog training, puppy training"]} />
    <IntroWrapper>
      <StyledImg fluid={data.file.childImageSharp.fluid} />
      <TextHolder>
        <h1>{data.allDataJson.edges[0].node.siteCopy.headline}</h1>
        <h2>{data.allDataJson.edges[0].node.siteCopy.subHeadline}</h2>
        <SocialCta>
          {/* <span>Let's Connect &#10511;</span> */}
          <a href="http://fb.me/properpupacademy" rel="noopener noreferrer" target="_blank">
            <IconFb className="icon" />
            <span>Facebook</span>
          </a>
          <a href="http://fb.me/properpupacademy" rel="noopener noreferrer" target="_blank">
            <IconInsta className="icon" />
            <span>Instagram</span>
          </a>
        </SocialCta>
      </TextHolder>
    </IntroWrapper>
    <MainCopy>
      <h2>{data.allDataJson.edges[0].node.siteCopy.introTitle}</h2>
      <p dangerouslySetInnerHTML={{ __html: data.allDataJson.edges[0].node.siteCopy.introCopy }} />
    </MainCopy>
    <MainCopy>
      <h2>Packages &amp; Pricing</h2>
      <p>
        I offer a variety of training packages. Whether you need a single day of consultation or a multi-session
        packages. Feel free to{" "}
        <a href="mailto:katelyn@properpupacademy.com" rel="noopener noreferrer" target="_blank">
          contact me
        </a>{" "}
        if you have any questions or are in need of a custom package plan.
      </p>
    </MainCopy>

    <a href="mailto:katelyn@properpupacademy.com" rel="noopener noreferrer" target="_blank">
      katelyn@properpupacademy.com
    </a>
    <a href="tel:18475555555">1-847-555-5555</a>

    <Link to="/page-2">Go to page 2</Link>
  </Layout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "feature-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allDataJson {
      edges {
        node {
          siteCopy {
            headline
            subHeadline
            introTitle
            introCopy
          }
        }
      }
    }
  }
`;

export default IndexPage;
